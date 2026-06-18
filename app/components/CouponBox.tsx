import { CheckIcon } from './Icons'

export default function CouponBox({
  type,
  code,
  tabs,
  copied,
  activeTab,
  onTab,
  onCopy,
}: {
  type: 'vps' | 'cloud'
  code: string
  tabs: string[]
  copied: boolean
  activeTab: number
  onTab: (index: number) => void
  onCopy: (code: string) => void
}) {
  const isCloud = type === 'cloud'
  const benefits = isCloud
    ? ['Hiệu năng mạnh', 'Mở rộng linh hoạt', 'Tài nguyên riêng', 'Dễ triển khai']
    : ['Kích hoạt nhanh', 'Toàn quyền quản trị', 'Ổn định', 'Phù hợp website/app']

  return (
    <section className="cm-section">
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
            <button className="cm-code-large" onClick={() => onCopy(code)} type="button">
              <span className="cm-ticket">▣</span>
              <strong>{code}</strong>
              <span>⧉</span>
            </button>
            {copied ? <div className="cm-copied">✓ Đã sao chép mã {code}!</div> : null}
          </div>
        </div>
        <div className="cm-tabs" role="tablist" aria-label={isCloud ? 'Nhóm Cloud Server' : 'Nhóm VPS'}>
          {tabs.map((tab, index) => (
            <button
              className={index === activeTab ? 'is-active' : ''}
              key={tab}
              onClick={() => onTab(index)}
              type="button"
            >
              {tab}
            </button>
          ))}
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
