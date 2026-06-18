'use client'

/* eslint-disable @next/next/no-img-element */
import { FOOTER_SERVICES, FOOTER_INFO, FOOTER_POLICIES, FOOTER_FAQ } from './data'

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li style={{ marginBottom: 12 }}>
      <a
        className="id-footer-link"
        href={href}
        style={{
          color: 'rgba(255,255,255,0.78)',
          fontSize: 14,
          lineHeight: 1.55,
          transition: 'color 0.2s',
          display: 'inline-block',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#FF9900')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.78)')}
      >
        {label}
      </a>
    </li>
  )
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="id-footer-column">
      <h4 className="id-footer-heading" style={{
        color: '#fff',
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 18,
        letterSpacing: -0.2,
      }}>{title}</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map(item => (
          <FooterLink key={item.href} label={item.label} href={item.href} />
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #003B9A 0%, #001A5E 100%)' }}>
      <div className="id-footer-scroll">
        <div className="id-footer-grid" style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '56px 24px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 32,
        }}>
        <div className="id-footer-company">
          <img
            src="https://interdata.vn/assets/LogoNewSlogan-09.png"
            alt="InterData"
            width={160}
            height={48}
            style={{
              display: 'block',
              height: 48,
              width: 'auto',
              objectFit: 'contain',
              marginBottom: 20,
              borderRadius: 6,
            }}
          />
          <h4 className="id-footer-heading id-footer-company-name" style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 1.4,
            marginBottom: 14,
          }}>CÔNG TY CỔ PHẦN INTER GROUP</h4>
          <p className="id-footer-contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, margin: '0 0 12px' }}>
            <strong style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600 }}>VPGD:</strong>{' '}
            <a
              href="https://maps.app.goo.gl/JdnrU5N9xWYKShqt5"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.78)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FF9900')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.78)')}
            >
              211 Đường số 5, P. Bình Trưng, TP. Hồ Chí Minh
            </a>
          </p>
          <p className="id-footer-contact" style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600 }}>MST:</strong> 0316918910
          </p>
        </div>

        <FooterColumn title="Dịch vụ" items={FOOTER_SERVICES} />
        <FooterColumn title="Thông tin" items={FOOTER_INFO} />
        <FooterColumn title="Quy định và Chính sách" items={FOOTER_POLICIES} />
        <FooterColumn title="Câu hỏi thường gặp" items={FOOTER_FAQ} />
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="id-footer-copyright" style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '20px 24px',
          fontSize: 13,
          color: 'rgba(255,255,255,0.6)',
        }}>
          © {new Date().getFullYear()} Công ty Cổ phần Inter Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
