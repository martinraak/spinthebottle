// Vercel serverless function to extract names from meeting screenshots using Claude Vision API
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    // Parse the data URL to get media type and base64 data
    const matches = image.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
      return res.status(400).json({ error: 'Invalid image format. Expected base64 data URL.' });
    }

    const mediaType = matches[1];
    const base64Data = matches[2];

    // Validate media type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(mediaType)) {
      return res.status(400).json({ error: `Unsupported image type: ${mediaType}` });
    }

    // Call Claude Vision API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mediaType,
                data: base64Data
              }
            },
            {
              type: 'text',
              text: `Extract all participant names from this meeting screenshot (Zoom, Google Meet, Teams, etc.).

Rules:
- Return ONLY a valid JSON array of names, nothing else
- Include first and last names when visible
- Ignore labels like "Host", "You", "(me)", screen share indicators
- Remove any parenthetical suffixes like "(Guest)" or "(Mobile)"
- If no names are found, return an empty array: []

Example output: ["John Smith", "Jane Doe", "Bob Wilson"]`
            }
          ]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Claude API error:', errorData);
      return res.status(response.status).json({
        error: errorData.error?.message || 'Failed to process image'
      });
    }

    const data = await response.json();

    // Extract the text response
    const textContent = data.content?.find(c => c.type === 'text');
    if (!textContent) {
      return res.status(500).json({ error: 'No response from Claude' });
    }

    // Parse the JSON array from the response
    let names;
    try {
      // Try to extract JSON array from the response (in case there's extra text)
      const jsonMatch = textContent.text.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        names = JSON.parse(jsonMatch[0]);
      } else {
        names = JSON.parse(textContent.text);
      }
    } catch (parseError) {
      console.error('Failed to parse names:', textContent.text);
      return res.status(500).json({
        error: 'Failed to parse names from response',
        raw: textContent.text
      });
    }

    // Validate that names is an array of strings
    if (!Array.isArray(names)) {
      return res.status(500).json({ error: 'Invalid response format' });
    }

    // Filter and clean names
    const cleanedNames = names
      .filter(name => typeof name === 'string' && name.trim().length > 0)
      .map(name => name.trim());

    return res.status(200).json({ names: cleanedNames });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
