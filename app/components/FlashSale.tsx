type CountdownValue = {
  d: string
  h: string
  m: string
  s: string
}

export default function FlashSale({
  countdown,
  copied,
  onCopy,
}: {
  countdown: CountdownValue
  copied: string | null
  onCopy: (code: string) => void
}) {
  return (
    <section className="cm-section">
      <div className="cm-flash">
        <div>
          <h2>⚡ FLASH SALE</h2>
          <div className="cm-countdown" aria-label="Thời gian còn lại">
            {[
              ['Ngày', countdown.d],
              ['Giờ', countdown.h],
              ['Phút', countdown.m],
              ['Giây', countdown.s],
            ].map(([label, value]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p>Ưu đãi giới hạn thời gian cho khách hàng đăng ký mới dịch vụ VPS và Cloud Server.</p>
        </div>
        <div className="cm-flash-code">
          <span>Mã VPS 80%</span>
          <button onClick={() => onCopy('FLASHVPS80')} type="button">
            FLASHVPS80 <b>⧉</b>
          </button>
          {copied === 'FLASHVPS80' ? <small>✓ Đã sao chép</small> : null}
        </div>
        <div className="cm-flash-code">
          <span>Mã CLOUD 60%</span>
          <button onClick={() => onCopy('FLASHCLOUD60')} type="button">
            FLASHCLOUD60 <b>⧉</b>
          </button>
          {copied === 'FLASHCLOUD60' ? <small>✓ Đã sao chép</small> : null}
        </div>
      </div>
    </section>
  )
}
