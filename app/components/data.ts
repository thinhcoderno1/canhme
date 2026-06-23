export type Deal = {
  name: string
  specs: string[]
  oldPrice?: string
  price: string
  period?: string
  featured?: boolean
  href?: string
}

export type DealProgram = {
  eyebrow: string
  title: string
  description: string
  note: string
  deals: Deal[]
  iconVariant?: 'cloud' | 'vps'
  hidden?: boolean
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

export type PressArticle = {
  href: string
  thumb: string
  partnerLogo: string
  title: string
}

export type CustomerTestimonial = {
  name: string
  company: string
  logo: string
  content: string
}

export const deals: DealProgram[] = [
  {
    eyebrow: 'BD CLOUD PERFORMANCE 2026',
    title: 'Cloud Server hiệu năng cao - tiết kiệm đến 80%',
    description:
      'Nâng tầm hạ tầng doanh nghiệp với Cloud Server thế hệ mới - tiết kiệm lên đến 80% chi phí và bảo đảm an toàn dữ liệu tuyệt đối trên hệ thống CEPH Storage cao cấp.',
    note: 'Chương trình có thể kết thúc sớm do số lượng ưu đãi có hạn.',
    iconVariant: 'cloud',
    deals: [
      {
        name: 'BD-CLOUD 1',
        specs: [
          'Gia hạn không đổi giá',
          '2 vCPU',
          '2 GB RAM',
          '30 GB SSD NVMe',
          '300 Mbps Network Port',
          'Unlimited Bandwidth',
          '1 IPv4 Private',
        ],
        price: '988.000đ',
        href: 'https://support.interdata.vn/index.php?rp=/store/bd-cloud-performance-2026/bd-cloud-1',
      },
      {
        name: 'BD-CLOUD 2',
        specs: [
          'Gia hạn không đổi giá',
          '4 vCPU',
          '8 GB RAM',
          '80 GB SSD NVMe',
          '300 Mbps Network Port',
          'Unlimited Bandwidth',
          '1 IPv4 Private',
        ],
        price: '2.988.000đ',
        featured: true,
        href: 'https://support.interdata.vn/index.php?rp=/store/bd-cloud-performance-2026/bd-cloud-2',
      },
      {
        name: 'BD-CLOUD 3',
        specs: [
          'Gia hạn không đổi giá',
          '8 vCPU',
          '16 GB RAM',
          '140 GB SSD NVMe',
          '400 Mbps Network Port',
          'Unlimited Bandwidth',
          '1 IPv4 Private',
        ],
        price: '5.999.000đ',
        href: 'https://support.interdata.vn/index.php?rp=/store/bd-cloud-performance-2026/bd-cloud-3',
      },
      {
        name: 'BD-CLOUD 4',
        specs: [
          'Gia hạn không đổi giá',
          '16 vCPU',
          '32 GB RAM',
          '200 GB SSD NVMe',
          '500 Mbps Network Port',
          'Unlimited Bandwidth',
        ],
        price: '9.998.000đ',
        href: 'https://support.interdata.vn/index.php?rp=/store/bd-cloud-performance-2026/bd-cloud-4',
      },
    ],
  },
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
        href: 'https://support.interdata.vn/index.php?rp=/store/cloud-day-by-interdata-2026/cloud-day-base',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/cloud-day-by-interdata-2026/cloud-day-pro',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/cloud-day-by-interdata-2026/cloud-day-ultra',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/best-plan-vps-amd-2026/amd-7h-base',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/best-plan-vps-amd-2026/amd-7h-pro',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/best-plan-vps-amd-2026/amd-7h-ultra',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/best-plan-vps-amd-2026/amd-7h-turbo',
      },
    ],
  },
  {
    eyebrow: 'InterData Day - VPS AMD hiệu năng cao',
    hidden: true,
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
        href: 'https://support.interdata.vn/index.php?rp=/store/interdata-day-2026/bd-starter',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/interdata-day-2026/bd-personal',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/interdata-day-2026/bd-builder',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/interdata-day-2026/bd-business',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/interdata-day-2026/bd-enterprise-1',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/interdata-day-2026/bd-enterprise-2',
      },
    ],
  },
  {
    eyebrow: 'Victory Month 2026 - VPS AMD hiệu năng cao',
    hidden: true,
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
        href: 'https://support.interdata.vn/index.php?rp=/store/victory-month-2026/victory-amd-1',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/victory-month-2026/victory-amd-2',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/victory-month-2026/victory-amd-3',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/best-value-plans-2026/best-value-plans-premium-base',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/best-value-plans-2026/premium-pro-1',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/cyber-week-2026/premium-base',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/cyber-week-2026/premium-pro',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/cyber-week-2026/premium-ultra',
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
        href: 'https://support.interdata.vn/index.php?rp=/store/cyber-week-2026/premium-turbo',
      },
    ],
  },
]

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

export const TESTIMONIALS: CustomerTestimonial[] = [
  {
    name: 'Lê Minh Hưng',
    company: 'SEO Việt',
    logo: '/logo-seoviet.png',
    content: `Sau 1 thời gian trải nghiệm và đã sử dụng dịch vụ của InterData thì Hưng đánh giá chất lượng dịch vụ khá là tốt. Hưng cũng dùng dịch vụ rất nhiều bên ở Việt Nam rồi thì thấy dịch vụ không thua kém bất kể bên nào, nhiều khi còn nhỉnh hơn các bên. Hệ thống ổn định, đặc biệt giá thành tốt hơn so với các bên trên thị trường. Mong muốn của Hưng cũng như tất cả khách hàng là InterData sẽ duy trì sự ổn định bền vững ở hiện tại và tương lai.`,
  },
  {
    name: 'Vĩnh Minh Đạo',
    company: 'RealDev',
    logo: '/logo-realdev.png',
    content: `Với tư cách là đơn vị sử dụng trực tiếp và cung cấp dịch vụ website đến khách hàng toàn quốc, mình đã sử dụng dịch vụ của các đơn vị cung cấp VPS, Hosting, Dedicate từ trong nước đến nước ngoài. Sau khi sử dụng dịch vụ VPS tại InterData, mình rất ấn tượng với cấu hình chuẩn chỉnh và giá trị thực tế của dịch vụ. Mình đánh giá rất cao thái độ cầu thị của toàn thể công ty InterData và chất lượng sản phẩm dịch vụ.`,
  },
  {
    name: 'Trịnh Bảo',
    company: 'BALICO',
    logo: '/balico.png',
    content: `Mình thấy khá hài lòng với dịch vụ Cloud AMD của InterData. Website chạy ổn định, hiệu suất và các tính năng đều đáp ứng tốt nhu cầu của mình. Có lúc cũng gặp vài trục trặc nhỏ, nhưng đội ngũ kỹ thuật xử lý rất nhanh và nhiệt tình. Nhìn chung, dùng dịch vụ của InterData mình cảm thấy rất yên tâm.`,
  },
  {
    name: 'Trường Phong',
    company: 'Công ty TNHH Giải pháp Công nghệ Trường Phong',
    logo: '/logo-themewpgiare-truongphong.png',
    content: `Từ lúc chuyển qua dùng VPS của InterData, mình thấy website chạy mượt hơn hẳn, hiếm khi gặp lỗi. Đội ngũ hỗ trợ cũng rất chuyên nghiệp, lúc nào cần là phản hồi liền. Hiện tại thì mình hoàn toàn hài lòng với dịch vụ này.`,
  },
  {
    name: 'Thắng Nguyễn',
    company: 'UMIX Việt Nam',
    logo: '/logo-umix-vietnam.png',
    content: `Tôi đã chuyển website Umix sang chạy ở InterData, điều tôi hài lòng nhất chính là sự nhiệt tình của các nhân viên, hỗ trợ mọi vấn đề một cách nhanh chóng ngay cả lúc nửa đêm.`,
  },
  {
    name: 'Trần Mạnh Hùng',
    company: 'Digizone Việt Nam',
    logo: '/logo-digizone-vietnam.png',
    content: `Bên mình là Agency về thiết kế web và Ads nên rất chú trọng về tính ổn định, bảo mật của VPS, Hosting để đảm bảo chất lượng dịch vụ với khách hàng. Từ khi dùng dịch vụ của InterData thì mình thấy hạ tầng mạnh, cập nhật các dòng cấu hình server mới, tốc độ kết nối nhanh và đội ngũ hỗ trợ nhiệt tình. Mình tin tưởng vào chất lượng dịch vụ của InterData sẽ luôn đảm bảo ổn định và bảo mật cao.`,
  },
  {
    name: 'Đặng Hải Triều',
    company: 'Đồng Hồ Hải Triều',
    logo: '/logo-donghohaitrieu.png',
    content: `Chất lượng dịch vụ rất tốt! Đội ngũ hỗ trợ mau chóng, phối hợp nhịp nhàng để hỗ trợ mấy ca khó. Linh hoạt xử lý mấy tình huống ngoài phạm vi trách nhiệm luôn. Rất tuyệt vời.`,
  },
  {
    name: 'Tạ Quốc Khánh',
    company: 'Công ty Cổ phần Jobke',
    logo: '/logo-jobkey.png',
    content: `Đội ngũ hỗ trợ kỹ thuật nhiệt tình và nhanh chóng. Tôi sẽ giới thiệu thêm cho bạn bè và đối tác của mình về dịch vụ của InterData trong thời gian tới.`,
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

export const PRESS: PressArticle[] = [
  {
    href: 'https://baoangiang.com.vn/vps-interdata-giai-phap-may-chu-ao-toi-uu-hieu-suat-va-chi-phi-a475417.html',
    thumb: '/press/thumb-angiang.png',
    partnerLogo: '/press/baoangiang.png',
    title: 'VPS InterData: Giải pháp máy chủ ảo tối ưu hiệu suất và chi phí',
  },
  {
    href: 'https://baohatinh.vn/thue-vps-tai-interdata-giai-phap-toi-uu-ha-tang-online-cho-doanh-nghiep-post304939.html',
    thumb: '/press/Thumb-baohatinh.jpg',
    partnerLogo: '/press/baohatinh.png',
    title: 'Thuê VPS tại InterData: Giải pháp tối ưu hạ tầng online cho doanh nghiệp',
  },
  {
    href: 'https://vnexpress.net/interdata-dua-giai-phap-viet-ra-thi-truong-quoc-te-4539197.html',
    thumb: '/press/thumb-vnexpress.webp',
    partnerLogo: '/press/vnexpress.png',
    title: 'InterData đưa giải pháp Việt ra thị trường quốc tế',
  },
  {
    href: 'https://thanhnien.vn/interdata-va-vnpt-hop-tac-chien-luoc-va-khai-thac-ha-tang-datacenter-185240701161300605.htm',
    thumb: '/press/thumb-baothanhnien.webp',
    partnerLogo: '/press/baothanhnien.webp',
    title: 'InterData và VNPT hợp tác chiến lược và khai thác hạ tầng Datacenter',
  },
  {
    href: 'https://cafef.vn/interdata-tang-mien-phi-luu-tru-web-nvme-dung-luong-6gb-toc-do-mang-1gbps-20230223134836995.chn',
    thumb: '/press/thumb-cafef.png',
    partnerLogo: '/press/cafef.png',
    title: 'InterData tặng miễn phí lưu trữ web NVMe dung lượng 6GB, tốc độ mạng 1Gbps',
  },
  {
    href: 'https://vtv.vn/cong-nghe/greencloud-hop-tac-cung-interdata-trien-khai-ha-tang-server-tai-viet-nam-20230411104845847.htm',
    thumb: '/press/thumb-vtv.png',
    partnerLogo: '/press/vtv.webp',
    title: 'GreenCloud hợp tác cùng InterData triển khai hạ tầng Server tại Việt Nam',
  },
  {
    href: 'https://dantri.com.vn/suc-manh-so/interdata-ra-mat-goi-cloud-server-network-port-10gbps-tai-viet-nam-20221123162831826.htm',
    thumb: '/press/thumb-dantri.webp',
    partnerLogo: '/press/dantri.webp',
    title: 'InterData ra mắt gói Cloud Server Network Port 10Gbps tại Việt Nam',
  },
  {
    href: 'https://www.24h.com.vn/doanh-nghiep/interdata-va-eztech-ky-ket-thoa-thuan-hop-tac-chien-luoc-cung-cap-giai-phap-ha-tang-datacenter-c849a1569291.html',
    thumb: '/press/thumb-24h.jpg',
    partnerLogo: '/press/24h.png',
    title: 'InterData và EZTech ký kết thỏa thuận hợp tác chiến lược cung cấp giải pháp hạ tầng Datacenter',
  },
  {
    href: 'https://vietnamnet.vn/interdata-hop-tac-vnpt-khai-thac-ha-tang-datacenter-va-cac-dich-vu-the-manh-2301215.html',
    thumb: '/press/thumb-vietnamnet.jpg',
    partnerLogo: '/press/Logo_Vietnamnet.png',
    title: 'InterData hợp tác VNPT khai thác hạ tầng Datacenter và các dịch vụ thế mạnh',
  },
  {
    href: 'https://baolamdong.vn/thong-tin-can-biet/202405/le-ky-ket-mou-giua-interdata-va-truong-dai-hoc-yersin-da-lat-b180e1a/',
    thumb: '/press/thumb-lamdong.jpg',
    partnerLogo: '/press/lamdong.png',
    title: 'Lễ ký kết MOU giữa InterData và Trường Đại học Yersin Đà Lạt',
  },
  {
    href: 'https://vtcnews.vn/interdata-hop-tac-cung-eztech-phat-trien-ha-tang-server-cloud-gpu-ar872150.html',
    thumb: '/press/thumb-vtc.webp',
    partnerLogo: '/press/vtcnews.webp',
    title: 'InterData hợp tác cùng EZTech phát triển hạ tầng server cloud GPU',
  },
]

export const faqs = [
  ['VPS là gì?', 'VPS là máy chủ ảo được chia tài nguyên riêng từ một máy chủ vật lý. Người dùng có CPU, RAM, ổ cứng và hệ điều hành riêng, có thể cài đặt website, ứng dụng, database hoặc phần mềm theo nhu cầu.'],
  ['Cloud Server là gì?', 'Cloud Server là máy chủ ảo chạy trên nền tảng điện toán đám mây. Dịch vụ này phù hợp khi bạn cần hạ tầng ổn định, dễ mở rộng tài nguyên và hạn chế rủi ro phụ thuộc vào một máy chủ đơn lẻ.'],
  ['VPS và Cloud Server khác nhau như thế nào?', 'VPS thường phù hợp với nhu cầu cố định và chi phí tối ưu. Cloud Server phù hợp hơn khi hệ thống cần mở rộng linh hoạt, vận hành ổn định hơn và có yêu cầu cao về khả năng sẵn sàng.'],
  ['Nên thuê VPS hay Cloud Server cho website doanh nghiệp?', 'Nếu website có lưu lượng vừa phải, cấu hình ổn định và cần tiết kiệm chi phí, VPS là lựa chọn hợp lý. Nếu website bán hàng, hệ thống nội bộ hoặc ứng dụng có lượng truy cập biến động, Cloud Server sẽ phù hợp hơn.'],
  ['Thuê VPS cần quan tâm thông số nào nhất?', 'Nên xem trước CPU, RAM, dung lượng SSD/NVMe, băng thông, Network Port, vị trí máy chủ, hệ điều hành hỗ trợ và chính sách backup. Với website nhiều truy cập, RAM, tốc độ ổ cứng và Network Port là các yếu tố rất quan trọng.'],
  ['Bao nhiêu RAM là đủ để chạy website WordPress?', 'Website WordPress cơ bản có thể bắt đầu từ 2GB RAM. Website có WooCommerce, nhiều plugin hoặc lượng truy cập cao nên dùng từ 4GB RAM trở lên để giảm lỗi quá tải và cải thiện tốc độ phản hồi.'],
  ['Network Port ảnh hưởng gì đến tốc độ VPS?', 'Network Port là giới hạn tốc độ kết nối mạng của máy chủ. Port cao giúp truyền dữ liệu tốt hơn khi website có nhiều người truy cập, tải file lớn hoặc chạy ứng dụng cần băng thông ổn định.'],
  ['Ổ cứng NVMe khác gì SSD thông thường?', 'NVMe có tốc độ đọc ghi và độ trễ tốt hơn SSD SATA thông thường. Với website, database hoặc ứng dụng cần xử lý nhiều truy vấn, NVMe giúp giảm thời gian tải và cải thiện hiệu năng tổng thể.'],
  ['VPS có dùng được cho website nhiều traffic không?', 'Có, nhưng cần chọn đúng cấu hình. Website nhiều traffic nên ưu tiên CPU mạnh, RAM đủ lớn, ổ NVMe, Network Port cao và có cấu hình cache phù hợp để tránh nghẽn tài nguyên vào giờ cao điểm.'],
  ['Có được toàn quyền quản trị VPS hoặc Cloud Server không?', 'Có. Khách hàng thường được cấp quyền root với Linux hoặc Administrator với Windows để chủ động cài đặt phần mềm, cấu hình bảo mật, quản lý dữ liệu và triển khai ứng dụng.'],
  ['InterData hỗ trợ những hệ điều hành nào?', 'InterData hỗ trợ các hệ điều hành phổ biến như Ubuntu, Debian, AlmaLinux, CentOS/Rocky Linux tùy thời điểm, cùng Windows Server cho những nhu cầu cần môi trường Windows.'],
  ['Sau khi thanh toán bao lâu thì dịch vụ được kích hoạt?', 'Thông thường dịch vụ được kích hoạt sau khi hệ thống ghi nhận thanh toán thành công. Một số cấu hình đặc biệt hoặc chương trình ưu đãi có thể cần thêm thời gian kiểm tra trước khi bàn giao.'],
  ['Có thể nâng cấp CPU, RAM hoặc dung lượng sau này không?', 'Có. Khi nhu cầu tăng, khách hàng có thể nâng cấp tài nguyên theo chính sách của từng dòng dịch vụ. Nên trao đổi trước với kỹ thuật nếu hệ thống đang chạy production để hạn chế gián đoạn.'],
  ['Dữ liệu trên VPS có được sao lưu tự động không?', 'Backup phụ thuộc vào gói dịch vụ và cấu hình khách hàng chọn. Với dữ liệu quan trọng, nên chủ động thiết lập backup định kỳ, lưu bản sao ngoài máy chủ chính và kiểm tra khả năng khôi phục.'],
  ['InterData có hỗ trợ kỹ thuật 24/7 không?', 'Có. InterData hỗ trợ kỹ thuật 24/7 qua các kênh chăm sóc khách hàng chính thức. Đội kỹ thuật có thể hỗ trợ các vấn đề liên quan đến hạ tầng, kết nối, vận hành và xử lý sự cố dịch vụ.'],
  ['Làm sao chọn được gói VPS hoặc Cloud Server phù hợp?', 'Hãy bắt đầu từ nhu cầu thực tế: loại website hoặc ứng dụng, lượng truy cập, dung lượng dữ liệu, phần mềm cần chạy, ngân sách và mức độ quan trọng của uptime. Nếu chưa chắc cấu hình, nên chọn gói vừa đủ và giữ khả năng nâng cấp.'],
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
