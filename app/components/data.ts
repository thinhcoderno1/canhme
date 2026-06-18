export type Deal = {
  name: string
  specs: string[]
  oldPrice?: string
  price: string
  period?: string
  featured?: boolean
}

export type DealProgram = {
  eyebrow: string
  title: string
  description: string
  note: string
  deals: Deal[]
  iconVariant?: 'cloud' | 'vps'
}

export type Testimonial = {
  name: string
  role: string
  initials: string
  quote: string
}

export type PressItem = {
  tag: string
  title: string
  desc: string
}

export const deals: DealProgram[] = [
  {
    eyebrow: 'Cloud-Day by InterData 2026',
    title: 'AMD EPYC hiệu năng cao - tiết kiệm đến 81%',
    description:
      'Sở hữu ngay hạ tầng AMD EPYC hiệu năng cao, tiết kiệm đến 81% chi phí. Đăng ký từ 2 năm trở lên được tặng 1 năm sử dụng và 500GB S3 Storage. Trang bị SSD NVMe U.2 Gen4 tốc độ cao, phù hợp cho website traffic lớn, ứng dụng doanh nghiệp và hệ thống cần tài nguyên ổn định.',
    note: 'Chương trình có thể kết thúc sớm do số lượng ưu đãi có hạn.',
    iconVariant: 'cloud',
    deals: [
      {
        name: 'Cloud-Day - Base',
        specs: [
          'Gia hạn không đổi giá',
          'Tặng 80GB S3 và 1 năm sử dụng khi mua 2 năm trở lên',
          '4 vCPU AMD G3',
          '6GB RAM',
          '60GB SSD NVMe U.2',
          '10Gbps Network Port',
          '1 IPv4 Private',
          '2000GB băng thông',
        ],
        price: '2.666.000đ',
      },
      {
        name: 'Cloud-Day - Pro',
        specs: [
          'Gia hạn không đổi giá',
          'Tặng 200GB S3 và 1 năm sử dụng khi mua 2 năm trở lên',
          '8 vCPU AMD G3',
          '12GB RAM',
          '160GB SSD NVMe U.2',
          '10Gbps Network Port',
          '1 IPv4 Private',
          '5000GB băng thông',
        ],
        price: '5.666.000đ',
        featured: true,
      },
      {
        name: 'Cloud-Day - Ultra',
        specs: [
          'Gia hạn không đổi giá',
          'Tặng 500GB S3 và 1 năm sử dụng khi mua 2 năm trở lên',
          '16 vCPU AMD G3',
          '32GB RAM',
          '480GB SSD NVMe U.2',
          '10Gbps Network Port',
          '1 IPv4 Private',
          '18000GB băng thông',
        ],
        price: '14.666.000đ',
      },
    ],
  },
  {
    eyebrow: 'Best Plan VPS AMD',
    title: 'Máy chủ AMD EPYC - sức mạnh cho mọi tác vụ',
    description:
      'Trang bị CPU AMD EPYC mạnh mẽ, lưu trữ NVMe U.2 Gen4 IOPS cao. Đáp ứng từ website traffic cao đến hệ thống doanh nghiệp yêu cầu hiệu năng ổn định. Hỗ trợ kỹ thuật 24/7 và hoàn tiền nếu không đúng cam kết.',
    note: 'Chương trình có thể kết thúc sớm do số lượng ưu đãi có hạn.',
    iconVariant: 'vps',
    deals: [
      {
        name: 'AMD 7H Base',
        specs: [
          'Gia hạn không đổi giá',
          '3 vCPU AMD 7H12',
          '4GB RAM',
          '30GB SSD NVMe U.2',
          '300Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '988.000đ',
      },
      {
        name: 'AMD 7H Pro',
        specs: [
          'Gia hạn không đổi giá',
          '8 vCPU AMD 7H12',
          '8GB RAM',
          '80GB SSD NVMe U.2',
          '300Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '2.688.000đ',
        featured: true,
      },
      {
        name: 'AMD 7H Ultra',
        specs: [
          'Gia hạn không đổi giá',
          '12 vCPU AMD 7H12',
          '24GB RAM',
          '140GB SSD NVMe U.2',
          '400Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '5.199.000đ',
      },
      {
        name: 'AMD 7H Turbo',
        specs: [
          'Gia hạn không đổi giá',
          '16 vCPU AMD 7H12',
          '32GB RAM',
          '200GB SSD NVMe U.2',
          '500Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '9.998.000đ',
      },
    ],
  },
  {
    eyebrow: 'InterData Day - VPS AMD hiệu năng cao',
    title: 'Hạ tầng mạnh mẽ - vận hành tự tin',
    description:
      'Tăng tốc website, app và hệ thống trực tuyến với giải pháp VPS AMD dùng CPU AMD 7H12 mạnh mẽ, SSD NVMe U.2 siêu tốc độ, cùng dung lượng băng thông không giới hạn. Cấu hình đa dạng từ cơ bản đến doanh nghiệp với mức chi phí tối ưu, phù hợp cho nhu cầu vận hành liên tục, xử lý đa tác vụ và mở rộng tài nguyên linh hoạt khi cần.',
    note: 'Ưu đãi áp dụng từ 25/05 đến 31/05/2026. Sau thời gian này, giá sẽ được điều chỉnh tăng 20%.',
    iconVariant: 'vps',
    deals: [
      {
        name: 'BD - Starter',
        specs: [
          'Gia hạn không đổi giá',
          '1 vCPU Intel Xeon E5-2690 v4',
          '2GB RAM',
          '20GB NVMe U.2',
          '100Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '699.000đ',
      },
      {
        name: 'BD - Personal',
        specs: [
          'Gia hạn không đổi giá',
          '2 vCPU AMD 7H12',
          '4GB RAM',
          '40GB SSD NVMe U.2',
          '300Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '1.456.000đ',
      },
      {
        name: 'BD - Builder',
        specs: [
          'Gia hạn không đổi giá',
          '4 vCPU AMD 7H12',
          '8GB RAM',
          '80GB SSD NVMe U.2',
          '300Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '2.999.000đ',
      },
      {
        name: 'BD - Business',
        specs: [
          'Gia hạn không đổi giá',
          '6 vCPU AMD 7H12',
          '12GB RAM',
          '100GB SSD NVMe U.2',
          '500Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '4.599.000đ',
        featured: true,
      },
      {
        name: 'BD - Enterprise 1',
        specs: [
          'Gia hạn không đổi giá',
          '8 vCPU AMD 7H12',
          '16GB RAM',
          '120GB SSD NVMe U.2',
          '500Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '6.336.000đ',
      },
      {
        name: 'BD - Enterprise 2',
        specs: [
          'Gia hạn không đổi giá',
          '16 vCPU AMD 7H12',
          '32GB RAM',
          '160GB SSD NVMe U.2',
          '1Gbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '13.456.000đ',
      },
    ],
  },
  {
    eyebrow: 'Victory Month 2026 - VPS AMD hiệu năng cao',
    title: 'Mừng lễ Độc Lập - ưu đãi tràn ngập',
    description:
      'Giải pháp VPS AMD với CPU AMD EPYC 7H12, SSD NVMe Gen4, băng thông không giới hạn. Hạ tầng ổn định, tốc độ cao, vận hành mượt mà các workload như web app, database, container hay automation. Gia hạn giữ nguyên giá, cân bằng tốt giữa chi phí và hiệu suất.',
    note: 'Chỉ diễn ra: 15/04/2026 - 17/04/2026. Sẽ kết thúc sớm khi hết thời gian hoặc hết số lượng ưu đãi, tùy điều kiện nào đến trước.',
    iconVariant: 'cloud',
    deals: [
      {
        name: 'Victory AMD 1',
        specs: [
          'Gia hạn không đổi giá',
          'Mở bán từ ngày 15/04/2026',
          '3 vCPU AMD 7H12',
          '4GB RAM',
          '51GB SSD NVMe G4 R10',
          '300Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '1.567.000đ',
      },
      {
        name: 'Victory AMD 2',
        specs: [
          'Gia hạn không đổi giá',
          'Mở bán từ ngày 15/04/2026',
          '4 vCPU AMD 7H12',
          '8GB RAM',
          '80GB SSD NVMe G4 R10',
          '300Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '2.888.000đ',
        featured: true,
      },
      {
        name: 'Victory AMD 3',
        specs: [
          'Gia hạn không đổi giá',
          'Mở bán từ ngày 15/04/2026',
          '8 vCPU AMD 7H12',
          '12GB RAM',
          '100GB SSD NVMe G4 R10',
          '300Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '4.666.000đ',
      },
    ],
  },
  {
    eyebrow: 'VPS/Cloud Server - Best Value Plans',
    title: 'Hiệu năng vượt trội - tiết kiệm đến 60%',
    description:
      'Giải pháp VPS / Cloud Server cân bằng giữa hiệu năng và chi phí, phù hợp cho doanh nghiệp và cá nhân triển khai hệ thống linh hoạt. Dễ dàng vận hành các ứng dụng như Docker, n8n, OpenClaw, SQL, PHP hay .NET. Hạ tầng ổn định, tốc độ cao, hỗ trợ 24/7 giúp yên tâm mở rộng dự án và tối ưu hiệu suất lâu dài.',
    note: 'Chương trình có thể kết thúc sớm, do số lượng ưu đãi có hạn.',
    iconVariant: 'cloud',
    deals: [
      {
        name: 'Premium Base',
        specs: [
          'Gia hạn không đổi giá',
          'Mở bán từ ngày 06/04/2026',
          '2 vCore Intel Xeon Scalable',
          '2GB RAM',
          '30GB SSD NVMe',
          '300Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '299.000đ',
        period: '/3 tháng',
      },
      {
        name: 'Premium Pro',
        specs: [
          'Gia hạn không đổi giá',
          'Mở bán từ ngày 06/04/2026',
          '4 vCore Intel Xeon Scalable',
          '8GB RAM',
          '80GB SSD NVMe',
          '350Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth',
        ],
        price: '899.000đ',
        period: '/3 tháng',
      },
    ],
  },
  {
    eyebrow: 'VPS Hiệu Năng Cao Cho Developer & Business',
    title: 'Hiệu năng vượt trội - tối ưu chi phí',
    description:
      'Các gói VPS Premium chạy trên CPU Intel Xeon Scalable mạnh mẽ ổn định, SSD NVMe U.2 tốc độ cao, IPv4 riêng, băng thông không giới hạn và full root access. Hỗ trợ Linux & Windows, tự động khởi tạo ngay sau khi thanh toán, phù hợp cho developer, startup và doanh nghiệp cần triển khai web server, phần mềm doanh nghiệp hoặc tools tùy chỉnh.',
    note: 'Chương trình có thể kết thúc sớm, do số lượng ưu đãi có hạn.',
    iconVariant: 'vps',
    deals: [
      {
        name: 'Premium Base',
        specs: [
          'Gia hạn không đổi giá',
          '3 vCore Intel Xeon Scalable',
          '3GB RAM',
          '30GB SSD NVMe',
          '300Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth Monthly',
        ],
        price: '999.000đ',
      },
      {
        name: 'Premium Pro',
        specs: [
          'Gia hạn không đổi giá',
          '6 vCore Intel Xeon Scalable',
          '8GB RAM',
          '80GB SSD NVMe',
          '350Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth Monthly',
        ],
        price: '2.599.000đ',
        featured: true,
      },
      {
        name: 'Premium Ultra',
        specs: [
          'Gia hạn không đổi giá',
          '12 vCore Intel Xeon Scalable',
          '16GB RAM',
          '180GB SSD NVMe',
          '450Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth Monthly',
        ],
        price: '5.679.000đ',
      },
      {
        name: 'Premium Turbo',
        specs: [
          'Gia hạn không đổi giá',
          '16 vCore Intel Xeon Scalable',
          '32GB RAM',
          '240GB SSD NVMe',
          '600Mbps Network Port',
          '1 IPv4 Private',
          'Unlimited Bandwidth Monthly',
        ],
        price: '11.899.000đ',
      },
    ],
  },
]

export const vpsTabs = ['VPS Giá Rẻ', 'VPS AMD', 'VPS Intel', 'VPS NVMe', 'VPS Windows']
export const cloudTabs = ['Cloud Standard', 'Cloud AMD', 'Cloud Premium', 'Cloud Business', 'Cloud GPU']

export const testimonials: Testimonial[] = [
  {
    name: 'Anh Minh',
    role: 'Developer',
    initials: 'AM',
    quote: 'Chuyển hệ thống lên VPS InterData giúp team triển khai app nhanh hơn, máy local nhẹ hơn rõ rệt.',
  },
  {
    name: 'Chị Hương',
    role: 'Chủ shop online',
    initials: 'CH',
    quote: 'Website ổn định mùa cao điểm, hỗ trợ kỹ thuật phản hồi rất nhanh.',
  },
  {
    name: 'Anh Nam',
    role: 'Agency',
    initials: 'AN',
    quote: 'Cloud Server chạy mượt, dễ mở rộng khi cần thêm tài nguyên cho dự án.',
  },
  {
    name: 'Team Startup X',
    role: 'Startup',
    initials: 'SX',
    quote: 'Chi phí tối ưu nhưng vẫn có hiệu năng đủ mạnh để vận hành dịch vụ hàng ngày.',
  },
  {
    name: 'Chị Lan',
    role: 'Marketing Lead',
    initials: 'CL',
    quote: 'Landing page tải nhanh hơn hẳn sau khi chuyển sang hạ tầng của InterData.',
  },
  {
    name: 'Anh Quang',
    role: 'Sysadmin',
    initials: 'AQ',
    quote: 'Toàn quyền quản trị, snapshot và backup tiện lợi, đội kỹ thuật hỗ trợ 24/7 rất ổn.',
  },
]

export const press: PressItem[] = [
  {
    tag: 'TECHMAG',
    title: 'InterData và bài toán tối ưu chi phí hạ tầng cho doanh nghiệp trẻ',
    desc: 'InterData giúp doanh nghiệp trẻ tối ưu chi phí với hạ tầng mạnh mẽ, linh hoạt và ổn định.',
  },
  {
    tag: 'VIETDIGITAL',
    title: 'Giải pháp VPS, Cloud Server linh hoạt cho thời đại số',
    desc: 'Các giải pháp VPS và Cloud Server của InterData đáp ứng nhu cầu triển khai nhanh và mở rộng dễ dàng.',
  },
  {
    tag: 'DEVCOMMUNITY',
    title: 'InterData được nhiều developer lựa chọn nhờ hiệu năng và hỗ trợ tốt',
    desc: 'Hiệu năng ổn định, hạ tầng tại Việt Nam và hỗ trợ 24/7 là điểm cộng lớn của InterData.',
  },
  {
    tag: 'BUSINESS INSIGHT',
    title: 'Xu hướng chuyển dịch lên hạ tầng cloud tại Việt Nam',
    desc: 'Nhiều doanh nghiệp Việt đang chuyển dịch lên cloud để tăng hiệu quả vận hành và tiết kiệm chi phí.',
  },
  {
    tag: 'STARTUP NEWS',
    title: 'Hạ tầng giá tốt giúp startup tăng tốc sản phẩm',
    desc: 'Chi phí hợp lý và khả năng mở rộng linh hoạt giúp các startup rút ngắn thời gian ra mắt sản phẩm.',
  },
  {
    tag: 'CLOUD TODAY',
    title: 'Anti-DDoS và uptime 99.99% - tiêu chuẩn mới cho VPS Việt',
    desc: 'InterData đầu tư mạnh vào bảo mật và độ ổn định, đáp ứng yêu cầu khắt khe của khách hàng.',
  },
]

export const faqs = [
  ['VPS là gì?', 'VPS là máy chủ ảo có tài nguyên riêng như CPU, RAM, ổ cứng và cho phép toàn quyền quản trị như một máy chủ độc lập.'],
  ['Cloud Server khác gì VPS?', 'Cloud Server chạy trên cụm hạ tầng ảo hóa, thường linh hoạt hơn khi cần mở rộng tài nguyên và tăng độ sẵn sàng.'],
  ['Khi nào nên dùng VPS thay vì Shared Hosting?', 'Khi website cần tài nguyên ổn định, quyền cấu hình riêng hoặc lưu lượng tăng cao mà Shared Hosting không còn đáp ứng tốt.'],
  ['Cloud Server phù hợp với ai?', 'Phù hợp với doanh nghiệp, website thương mại, ứng dụng có lưu lượng biến động hoặc hệ thống cần mở rộng nhanh.'],
  ['InterData có hỗ trợ cài đặt ban đầu không?', 'Có. Đội kỹ thuật có thể hỗ trợ cài đặt và cấu hình ban đầu để khách hàng vận hành nhanh hơn.'],
  ['Có được toàn quyền quản trị máy chủ không?', 'Có. Khách hàng nhận quyền root hoặc Administrator để chủ động cài đặt và cấu hình theo nhu cầu.'],
  ['Có thể nâng cấp cấu hình sau này không?', 'Có. Người dùng có thể nâng cấp CPU, RAM hoặc dung lượng theo nhu cầu sử dụng thực tế.'],
  ['Dữ liệu có được sao lưu không?', 'Các gói dịch vụ có thể hỗ trợ backup hoặc snapshot tùy chính sách áp dụng tại thời điểm đăng ký.'],
  ['Có hỗ trợ hệ điều hành nào?', 'InterData hỗ trợ nhiều hệ điều hành phổ biến như Ubuntu, Debian, AlmaLinux và Windows Server.'],
  ['Thời gian kích hoạt dịch vụ là bao lâu?', 'Phần lớn dịch vụ được kích hoạt nhanh sau khi thanh toán, tùy loại dịch vụ và cấu hình đăng ký.'],
  ['InterData có hỗ trợ chống DDoS không?', 'Hạ tầng InterData có trang bị giải pháp Anti-DDoS nhằm giảm rủi ro gián đoạn dịch vụ.'],
  ['Có thể dùng để chạy WordPress không?', 'Có. VPS và Cloud Server đều phù hợp để chạy WordPress, WooCommerce và các CMS phổ biến khác.'],
  ['Có hỗ trợ kỹ thuật 24/7 không?', 'Có. InterData hỗ trợ kỹ thuật 24/7 qua các kênh chăm sóc khách hàng chính thức.'],
  ['Thanh toán theo tháng hay theo năm?', 'Khách hàng có thể chọn chu kỳ thanh toán phù hợp. Các gói trả dài hạn thường có ưu đãi tốt hơn.'],
  ['Làm sao chọn cấu hình phù hợp?', 'Nên dựa trên lượng truy cập, loại ứng dụng, mức RAM/CPU cần dùng và ngân sách. Có thể liên hệ tư vấn để được gợi ý cụ thể.'],
  ['Có hoàn tiền nếu dịch vụ không phù hợp không?', 'Chính sách hoàn tiền phụ thuộc điều kiện áp dụng của từng chương trình, nên kiểm tra kỹ trước khi đăng ký.'],
] as const

export const FOOTER_SERVICES = [
  { label: 'Thuê chỗ đặt máy chủ', href: 'https://interdata.vn/vietnam-co-location' },
  { label: 'Thuê máy chủ', href: 'https://interdata.vn/vietnam-dedicated-server' },
  { label: 'Thuê Cloud Server', href: 'https://interdata.vn/cloud-server/' },
  { label: 'Thuê VPS', href: 'https://interdata.vn/thue-vps/' },
  { label: 'Thuê Hosting', href: 'https://interdata.vn/thue-hosting/' },
  { label: 'Đăng ký tên miền', href: 'https://support.interdata.vn/cart.php?a=add&domain=register' },
]

export const FOOTER_INFO = [
  { label: 'Blog', href: 'https://interdata.vn/blog/' },
  { label: 'Giới thiệu', href: 'https://interdata.vn/about-us' },
  { label: 'Liên hệ', href: 'https://interdata.vn/contact' },
  { label: 'Khuyến mãi', href: 'https://interdata.vn/blog/khuyen-mai/' },
  { label: 'Sự kiện', href: 'https://interdata.vn/blog/su-kien/' },
]

export const FOOTER_POLICIES = [
  { label: 'Chính sách bảo hành', href: 'https://interdata.vn/chinh-sach-bao-hanh' },
  { label: 'Chính sách bảo mật', href: 'https://interdata.vn/privacy-policy' },
  { label: 'Chính sách xử lý khiếu nại', href: 'https://interdata.vn/chinh-sach-xu-ly-khieu-nai' },
  { label: 'Cam kết dịch vụ', href: 'https://interdata.vn/service-level-agreement' },
  { label: 'Điều khoản sử dụng dịch vụ', href: 'https://interdata.vn/terms-and-condition' },
  { label: 'GDPR', href: 'https://interdata.vn/gdpr' },
  { label: 'Hình thức thanh toán', href: 'https://interdata.vn/hinh-thuc-thanh-toan' },
  { label: 'Hướng dẫn thanh toán trên VNPAY', href: 'https://interdata.vn/huong-dan-thanh-toan-vnpay' },
  { label: 'Quy định đổi trả và hoàn trả tiền', href: 'https://interdata.vn/refund-policy' },
  { label: 'Quy định sử dụng tên miền', href: 'https://interdata.vn/quy-dinh-su-dung-ten-mien' },
]

export const FOOTER_FAQ = [
  { label: 'Hướng dẫn gửi tickets hỗ trợ', href: 'https://interdata.vn/blog/huong-dan-gui-yeu-cau-ho-tro-tai-interdata/' },
  { label: 'Hướng dẫn thay đổi thông tin tài khoản quản lý dịch vụ', href: 'https://interdata.vn/blog/thay-doi-thong-tin-quan-tri-interdata/' },
  { label: 'Hướng dẫn đăng ký Domain', href: 'https://interdata.vn/blog/huong-dan-dang-ky-ten-mien-tai-interdata/' },
]
