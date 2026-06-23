export default function RenewalBonus() {
  return (
    <section className="cm-section cm-renewal-section" id="renewal-bonus">
      <div className="cm-renewal-card">
        <div className="cm-renewal-visual" aria-hidden="true">
          <div className="cm-renewal-calendar">
            <span />
            <strong>+1</strong>
            <small>năm</small>
          </div>
          <div className="cm-renewal-server">
            <i />
            <span />
            <span />
          </div>
        </div>

        <div className="cm-renewal-content">
          <div className="cm-pill">KẾT NỐI DÀI LÂU - TRI ÂN BỀN VỮNG</div>
          <h2>Gia hạn nhận đến 1 năm sử dụng</h2>
          <p>Liên hệ InterData để được hỗ trợ nhận ưu đãi khi gia hạn dịch vụ.</p>
          <div className="cm-renewal-actions">
            <a href="https://facebook.com/interdata.com.vn" target="_blank" rel="nofollow noopener noreferrer">
              NHẬN ƯU ĐÃI NGAY!
            </a>
            {/* <span>Áp dụng cho toàn bộ các gói dịch vụ</span> */}
          </div>
        </div>
      </div>
    </section>
  )
}
