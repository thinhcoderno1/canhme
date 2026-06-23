'use client'

import { useState } from 'react'
import Link from 'next/link'
import { withAssetPrefix } from '../lib/assetPrefix'

type MenuItem = {
  label: string
  href: string
  children?: {
    label: string
    href: string
  }[]
}

const TOPBAR_LINKS = [
  { label: 'Gửi ticket', href: 'https://support.interdata.vn/submitticket.php' },
  { label: 'Giới thiệu', href: 'https://interdata.vn/about-us' },
  { label: 'Liên hệ', href: 'https://interdata.vn/contact' },
]

const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Cloud Server',
    href: '/cloud-server/',
    children: [
      { label: 'AMD Gen 3 Cloud', href: '/amd-epyc-gen3-cloud/' },
      { label: 'Platinum Gen 2 Cloud', href: '/intel-platinum-gen2-cloud/' },
    ],
  },
  {
    label: 'Thuê VPS',
    href: '/thue-vps/',
    children: [
      { label: 'VPS AMD', href: '/vps-amd/' },
      { label: 'VPS Platinum', href: '/platinum' },
      { label: 'VPS Gold', href: '/vps-gold-nvme-u2/' },
      { label: 'VPS Linux', href: '/vps-linux/' },
      { label: 'VPS Windows', href: '/vps-windows-enterprise/' },
      { label: 'VPS n8n', href: '/vps-n8n/' },
    ],
  },
  {
    label: 'Thuê Máy Chủ',
    href: '/vietnam-dedicated-server/',
  },
  {
    label: 'Chỗ Đặt Máy Chủ',
    href: '#',
    children: [
      { label: 'Chỗ Đặt Máy Chủ Tại Việt Nam', href: '/vietnam-co-location/' },
      { label: 'Chỗ Đặt Máy Chủ Tại US', href: '/usa-co-location/' },
    ],
  },
  {
    label: 'Hosting',
    href: '/thue-hosting/',
    children: [
      { label: 'Hosting AMD', href: '/hosting-amd/' },
      { label: 'Hosting NVMe', href: '/hosting/nvme-cloud-hosting-1gbps/' },
      { label: 'SEO Hosting', href: '/hosting/seo-hosting/' },
      { label: 'Singapore Hosting', href: '/hosting/singapore-hosting' },
    ],
  },
  {
    label: 'Free Hosting',
    href: '/free-hosting/',
  },
]

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={open ? 'id-navbar-chevron is-open' : 'id-navbar-chevron'}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path d="M3 5.25L7 9L11 5.25" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setExpandedMenu(null)
  }

  return (
    <header className="id-navbar">
      <div className="id-navbar-topbar">
        <div className="id-navbar-container id-navbar-topbar-inner">
          <div className="id-navbar-topbar-links">
            {TOPBAR_LINKS.map(link => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
            <a
              className="id-navbar-login"
              href="https://support.interdata.vn/index.php?rp=/login"
            >
              Đăng nhập
            </a>
          </div>
        </div>
      </div>

      <nav className="id-navbar-main" aria-label="Điều hướng chính">
        <div className="id-navbar-container id-navbar-main-inner">
          <Link className="id-navbar-brand" href="/" aria-label="InterData - Trang chủ">
            {/* Avoid next/image optimizer path issues when this page is served under /canhme. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="id-navbar-logo"
              src={withAssetPrefix('/interdata-logo-white.png')}
              alt="InterData - Unlimited Connections"
              width={2048}
              height={713}
            />
          </Link>

          <div className="id-navbar-desktop-menu">
            {MENU_ITEMS.map(item => (
              <div
                key={item.label}
                className={item.children ? 'id-navbar-menu-item has-dropdown' : 'id-navbar-menu-item'}
              >
                <a className="id-navbar-menu-link" href={item.href}>
                  {item.label}
                  {item.children && <Chevron />}
                </a>

                {item.children && (
                  <div className="id-navbar-dropdown">
                    <div className="id-navbar-dropdown-label">{item.label}</div>
                    {item.children.map(child => (
                      <a key={child.label} href={child.href}>
                        <span>{child.label}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <a className="id-navbar-hotline" href="tel:1900636822">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92V20A2 2 0 0 1 19.82 22A19.79 19.79 0 0 1 11.19 18.93A19.5 19.5 0 0 1 5.07 12.81A19.79 19.79 0 0 1 2 4.18A2 2 0 0 1 3.99 2H7.08A2 2 0 0 1 9.08 3.72C9.2 4.68 9.43 5.62 9.77 6.52A2 2 0 0 1 9.32 8.63L8.01 9.94A16 16 0 0 0 14.06 15.99L15.37 14.68A2 2 0 0 1 17.48 14.23C18.38 14.57 19.32 14.8 20.28 14.92A2 2 0 0 1 22 16.92Z" fill="currentColor"/>
            </svg>
            <span>1900636822</span>
          </a>

          <button
            className="id-nav-burger"
            type="button"
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(current => !current)}
          >
            <span className={mobileOpen ? 'is-open' : ''} />
            <span className={mobileOpen ? 'is-open' : ''} />
            <span className={mobileOpen ? 'is-open' : ''} />
          </button>
        </div>

        {mobileOpen && (
          <div className="id-nav-mobile">
            <div className="id-navbar-mobile-toplinks">
              {TOPBAR_LINKS.map(link => (
                <a key={link.label} href={link.href} onClick={closeMobileMenu}>
                  {link.label}
                </a>
              ))}
            </div>

            {MENU_ITEMS.map(item => {
              const isExpanded = expandedMenu === item.label

              return (
                <div key={item.label} className="id-navbar-mobile-item">
                  <div className="id-navbar-mobile-row">
                    <a href={item.href} onClick={closeMobileMenu}>
                      {item.label}
                    </a>
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`${isExpanded ? 'Thu gọn' : 'Mở rộng'} ${item.label}`}
                        aria-expanded={isExpanded}
                        onClick={() => setExpandedMenu(isExpanded ? null : item.label)}
                      >
                        <Chevron open={isExpanded} />
                      </button>
                    )}
                  </div>

                  {item.children && isExpanded && (
                    <div className="id-navbar-mobile-submenu">
                      {item.children.map(child => (
                        <a key={child.label} href={child.href} onClick={closeMobileMenu}>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <a
              className="id-navbar-mobile-login"
              href="https://support.interdata.vn/index.php?rp=/login"
              onClick={closeMobileMenu}
            >
              Đăng nhập
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
