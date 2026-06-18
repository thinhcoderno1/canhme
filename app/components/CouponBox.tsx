import { CheckIcon } from './Icons'

export default function CouponBox({
  type,
  code,
  copied,
  onCopy,
}: {
  type: 'vps' | 'cloud'
  code: string
  copied: boolean
  onCopy: (code: string, copiedKey?: string) => void
}) {
  const isCloud = type === 'cloud'
  const hubUrl = isCloud ? 'https://interdata.vn/cloud-server/' : 'https://interdata.vn/thue-vps/'
  const hubLabel = isCloud ? 'Xem Cloud Server' : 'Xem VPS'
  const benefits = isCloud
    ? ['Hiệu năng mạnh', 'Mở rộng linh hoạt', 'Tài nguyên riêng', 'Dễ triển khai']
    : ['Kích hoạt nhanh', 'Toàn quyền quản trị', 'Ổn định', 'Phù hợp website/app']

  return (
    <section className={`cm-section cm-coupon-section ${isCloud ? 'is-cloud-coupon-section' : ''}`}>
      <div className={`cm-coupon ${isCloud ? 'is-cloud' : ''}`}>
        <div className="cm-coupon-main">
          <div className={`cm-coupon-visual ${isCloud ? 'is-cloud' : ''}`} aria-hidden="true">
            <div className="cm-coupon-orb" />
            <div className="cm-mini-stack">
              <span />
              <span />
              <span />
            </div>
            <strong>%</strong>
          </div>
          <div>
            <div className="cm-pill">★ Ưu đãi đặc biệt</div>
            <h3>{isCloud ? 'Cloud Server giảm đến 30%' : 'VPS giảm đến 50%'}</h3>
            <p>
              Nhập mã bên dưới để nhận ưu đãi lên đến {isCloud ? '30%' : '50%'} cho các gói{' '}
              {isCloud ? 'Cloud Server' : 'VPS'}.
            </p>
            <div className="cm-coupon-actions">
              <button className="cm-code-large" onClick={() => onCopy(code, `coupon-${type}`)} type="button">
                <span className="cm-ticket">▣</span>
                <strong>{code}</strong>
                <span>⧉</span>
              </button>
              <a className="cm-service-hub-button" href={hubUrl} target="_blank" rel="noopener noreferrer">
                {hubLabel}
              </a>
            </div>
            {copied ? <div className="cm-copied">✓ Đã sao chép mã {code}!</div> : null}
          </div>
        </div>
        <div className="cm-benefits">
          {benefits.map((benefit) => (
            <div key={benefit}>
              <CheckIcon />
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
