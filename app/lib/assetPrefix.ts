export const assetPrefix = process.env.NODE_ENV === 'production' ? '/canhme' : ''

export function withAssetPrefix(path: string) {
  if (!path.startsWith('/')) return path
  return `${assetPrefix}${path}`
}
