import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Get dynamic details from URL, or use defaults
    const title = searchParams.get('title') || 'KrDevanshu06';
    const type = searchParams.get('type') || 'Portfolio';
    const tech = searchParams.get('tech') || 'Full Stack Engineer';

    // Load a font (optional, but looks better). Using a standard fetch here.
    // We'll use a standard system font stack fallback if this fails in some environments.
    const fontData = await fetch(
      new URL('https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff2', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#020617', // Slate-950
            padding: '80px',
            fontFamily: '"Playfair Display"',
          }}
        >
          {/* Decorative Gradient Blob */}
          <div
            style={{
              position: 'absolute',
              top: '-200px',
              right: '-100px',
              width: '600px',
              height: '600px',
              backgroundColor: '#2dd4bf', // Teal-400
              opacity: '0.1',
              borderRadius: '50%',
              filter: 'blur(100px)',
            }}
          />

          {/* Top Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#2dd4bf',
              }}
            />
            <span
              style={{
                fontSize: 24,
                color: '#94a3b8', // Slate-400
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {type}
            </span>
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: '#f8fafc', // Slate-50
              lineHeight: 1.1,
              marginBottom: '40px',
              maxWidth: '900px',
              textShadow: '0 0 40px rgba(45, 212, 191, 0.1)',
            }}
          >
            {title}
          </div>

          {/* Tech Stack / Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              border: '1px solid #1e293b', // Slate-800
              borderRadius: '30px',
              backgroundColor: 'rgba(15, 23, 42, 0.5)', // Slate-900/50
            }}
          >
            <span
              style={{
                fontSize: 20,
                color: '#2dd4bf', // Teal-400
                fontFamily: 'monospace',
              }}
            >
              {tech}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Playfair Display',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
