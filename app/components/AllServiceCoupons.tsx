const coupons = [
  {
    term: 'Đăng ký 1 năm',
    discount: '60%',
    code: 'BD26-INTERDATA60',
    note: 'Phù hợp khi muốn tối ưu chi phí năm đầu.',
  },
  {
    term: 'Đăng ký 2 năm',
    discount: '66%',
    code: 'BD26-INTERDATA66',
    note: 'Cân bằng giữa mức giảm sâu và thời gian sử dụng.',
  },
  {
    term: 'Đăng ký 3 năm',
    discount: '74%',
    code: 'BD26-INTERDATA74',
    note: 'Mức giảm cao nhất cho kế hoạch dài hạn.',
    featured: true,
  },
]

export default function AllServiceCoupons({
  copied,
  onCopy,
}: {
  copied: string | null
  onCopy: (code: string, copiedKey?: string) => void
}) {
  return (
    <section className="cm-section cm-service-coupons-section" id="service-coupons">
      <div className="cm-service-coupons">
        <div className="cm-service-coupons-head">
          <div>
            <div className="cm-pill">Coupon</div>
            <h2 style={{ textTransform: 'uppercase', fontSize: '36px' }}>Giảm giá toàn dịch vụ đến 74%</h2>
            {/* <p>Chọn thời hạn đăng ký phù hợp và sử dụng đúng mã ưu đãi để nhận mức giảm tương ứng.</p> */}
          </div>
          <div className="cm-service-coupons-badge" aria-hidden="true">
            <strong>-74%</strong>
            {/* <span>GIẢM GIÁ</span> */}
          </div>
        </div>

        <div className="cm-service-coupon-grid">
          {coupons.map((coupon) => {
            const copiedKey = `service-coupon-${coupon.discount}`

            return (
              <article
                className={`cm-service-coupon-card ${coupon.featured ? 'is-featured' : ''}`}
                key={coupon.code}
              >
                {coupon.featured ? <div className="cm-service-coupon-ribbon">Tiết kiệm nhất</div> : null}
                <div className="cm-service-coupon-term">{coupon.term}</div>
                <div className="cm-service-coupon-discount">
                  Giảm <strong>{coupon.discount}</strong>
                </div>
                <p>{coupon.note}</p>
                <button
                  className="cm-service-coupon-code"
                  onClick={() => onCopy(coupon.code, copiedKey)}
                  type="button"
                >
                  <span>Mã</span>
                  <strong>{coupon.code}</strong>
                  <small>{copied === copiedKey ? 'Đã sao chép' : 'Sao chép'}</small>
                </button>
              </article>
            )
          })}
        </div>

        <p className="cm-service-coupons-note">
          Chương trình không áp dụng cộng dồn chung khuyến mãi với các chương trình khác.
        </p>
      </div>
    </section>
  )
}
