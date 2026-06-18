'use client'

import { useState } from 'react'

type CountdownValue = {
  d: string
  h: string
  m: string
  s: string
}

const flashSaleNotes = [
  'Chương trình áp dụng khi Quý khách đăng ký chu kỳ 12 tháng.',
  'Ưu tiên những khách hàng thanh toán nhanh và sớm nhất.',
  'Các hóa đơn không được thanh toán sau 15 phút kể từ khi khởi tạo sẽ bị xóa.',
  'Chương trình không áp dụng chung các gói dịch vụ đặc biệt, - Promo, - Special và các chương trình khuyến mãi khác.',
]

export default function FlashSale({
  countdown,
  copied,
  onCopy,
}: {
  countdown: CountdownValue
  copied: string | null
  onCopy: (code: string, copiedKey?: string) => void
}) {
  const [isNotesOpen, setIsNotesOpen] = useState(false)

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
          <button onClick={() => onCopy('XXXXXX', 'flash-vps')} type="button">
            XXXXXX <b>⧉</b>
          </button>
          {copied === 'flash-vps' ? <small>✓ Đã sao chép</small> : null}
        </div>
        <div className="cm-flash-code">
          <span>Mã CLOUD 60%</span>
          <button onClick={() => onCopy('XXXXXX', 'flash-cloud')} type="button">
            XXXXXX <b>⧉</b>
          </button>
          {copied === 'flash-cloud' ? <small>✓ Đã sao chép</small> : null}
        </div>

        <div className={`cm-flash-notes${isNotesOpen ? ' is-open' : ''}`}>
          <div className="cm-flash-notes-head">
            <strong>Lưu ý</strong>
            <button type="button" onClick={() => setIsNotesOpen((current) => !current)}>
              {isNotesOpen ? 'Thu gọn' : 'Xem chi tiết'}
            </button>
          </div>
          {isNotesOpen ? (
            <ul>
              {flashSaleNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}
