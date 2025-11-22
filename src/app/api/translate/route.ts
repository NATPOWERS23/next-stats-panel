import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

interface RequestBody {
  text: string;
}

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body.text || typeof body.text !== 'string' || body.text.length === 0) {
    return NextResponse.json({ error: 'Missing text' }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not set' }, { status: 500 });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
const prompt = `Translate this Ukrainian text to English for a Slack message to a dev team.

Tone requirements:
- Friendly and approachable (like talking to colleagues)
- Clear and professional (but not stiff or overly formal)
- Natural conversational style
- Use appropriate tech/dev terminology if relevant
- Warm but respectful

Provide 3 variations:
- Variation 1: Slightly more casual and friendly
- Variation 2: Balanced (professional yet warm)
- Variation 3: Slightly more polished and clear

IMPORTANT: Return ONLY the 3 translations, one per line, WITHOUT numbers, bullets, or labels. Just the pure text.

Format:
First translation here
Second translation here
Third translation here

Ukrainian text: ${body.text}`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
const fullText = response.text.trim();

// Split by newlines and filter empty lines
const options = fullText
  .split('\n')
  .map(opt => opt.trim())
  .filter(opt => opt.length > 0)
  // Remove any numbers, dots, or dashes at the start
  .map(opt => opt.replace(/^[\d\.\-\*\)]+\s*/, ''));

// Take only first 3 options
const translations = options.slice(0, 3);

if (translations.length === 0) {
  return NextResponse.json({ 
    translations: [fullText]
  });
}

return NextResponse.json({ 
  translations
});
  } catch (error: any) {
    console.error('Translation error:', error);
    return NextResponse.json({ 
      error: error.message || 'Translation failed' 
    }, { status: 500 });
  }
}