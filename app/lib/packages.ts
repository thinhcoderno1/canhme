export type PricingPeriod =
  | 'monthly'
  | 'quarterly'
  | 'semiannually'
  | 'annually'
  | 'biennially'
  | 'triennially'

export interface ApiProduct {
  pid: number
  gid: number
  name: string
  slug: string
  description: string
  product_url: string
  pricing: {
    VND: {
      prefix: string
      suffix: string
      monthly: string
      quarterly: string
      semiannually: string
      annually: string
      biennially: string
      triennially: string
    }
  }
}

export const PERIOD_SUFFIX: Record<PricingPeriod, string> = {
  monthly: '/tháng',
  quarterly: '/3 tháng',
  semiannually: '/6 tháng',
  annually: '/năm',
  biennially: '/2 năm',
  triennially: '/3 năm',
}

export function parseDescriptionSpecs(html: string): string[] {
  return html
    .replace(/<[^>]+>/g, '')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean)
}

export function formatVNDPrice(value: string): string {
  const num = parseFloat(value)
  if (!num || num <= 0) return ''
  return num.toLocaleString('vi-VN') + 'đ'
}

export async function fetchGroupPricing(gid: number): Promise<ApiProduct[]> {
  try {
    const res = await fetch(`https://support.interdata.vn/packages.php?gid=${gid}&module`, {
      next: { revalidate: 600 },
    })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data?.products) ? data.products : []
  } catch {
    return []
  }
}

export async function fetchAllGroupPricing(gids: readonly number[]): Promise<Record<number, ApiProduct[]>> {
  const entries = await Promise.all(gids.map(async (gid) => [gid, await fetchGroupPricing(gid)] as const))
  return Object.fromEntries(entries)
}
