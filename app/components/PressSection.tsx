/* eslint-disable @next/next/no-img-element */
import { PRESS } from './data'

export default function PressSection() {
  const loopCards = [...PRESS, ...PRESS]

  return (
    <section className="id-press-section" style={{ background: '#fff', padding: '60px 0' }}>
      <style>{`
        @keyframes press-logo-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes press-card-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .press-logo-track {
          display: flex;
          align-items: center;
          gap: 48px;
          width: max-content;
          animation: press-logo-scroll 30s linear infinite;
          will-change: transform;
        }
        .press-logo-mask:hover .press-logo-track { animation-play-state: paused; }
        .press-card-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: press-card-scroll 70s linear infinite;
          will-change: transform;
        }
        .press-card-mask:hover .press-card-track { animation-play-state: paused; }
        .press-logo-item {
          flex: 0 0 auto;
          height: 36px;
          width: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }
        .press-logo-item:hover { opacity: 1; }
        .press-logo-item img { max-height: 100%; max-width: 100%; object-fit: contain; }
        .press-card {
          flex: 0 0 auto;
          width: 330px;
          display: block;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          background: #fff;
          border: 1px solid #E9ECEF;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .press-card:hover {
          border-color: rgba(10,99,255,0.5);
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(10,99,255,0.16);
        }
        .press-card-img { transition: transform 0.5s ease; }
        .press-card:hover .press-card-img { transform: scale(1.05); }
        .press-card-title { transition: color 0.2s ease; }
        .press-card:hover .press-card-title { color: #0A63FF; }
        .press-card-arrow { transition: transform 0.2s ease; }
        .press-card:hover .press-card-arrow { transform: translateX(4px); }
        .press-card-title {
          font-size: 17px !important;
          line-height: 1.55;
        }
        .press-card-link {
          font-size: 14px;
          line-height: 1.4;
        }
        @media (max-width: 560px) {
          .press-card { width: 290px; }
          .press-card-title { font-size: 16px !important; }
          .press-card-link { font-size: 13px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .press-logo-track, .press-card-track { animation: none; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', marginBottom: 40 }}>
        <div className="id-section-badge">INTERDATA</div>
        <h2
          className="id-section-title"
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '0.02em',
            color: '#1A1A2E',
            margin: 0,
          }}
        >
          Báo chí nói gì về InterData
        </h2>
      </div>

      <div className="press-card-mask" style={{ overflow: 'hidden', padding: '4px 8px' }}>
        <div className="press-card-track">
          {loopCards.map((item, i) => (
            <a
              className="press-card"
              key={`card-${i}`}
              href={item.href}
              rel="nofollow"
              target="_blank"
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: 215 }}>
                <img
                  className="press-card-img"
                  src={item.thumb}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent 55%)' }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    background: '#fff',
                    border: '1px solid #E9ECEF',
                    borderRadius: 9999,
                    padding: '2px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 28,
                    maxWidth: 110,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  <img src={item.partnerLogo} alt="logo" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
              </div>

              <div style={{ padding: 22 }}>
                <p
                  className="press-card-title"
                  style={{
                    color: '#1A1A2E',
                    fontWeight: 600,
                    lineHeight: 1.55,
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.title}
                </p>
                <span
                  className="press-card-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    marginTop: 14,
                    color: '#0A63FF',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  Đọc bài viết
                  <svg className="press-card-arrow" width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
