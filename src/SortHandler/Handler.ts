import { Country, Sort } from '../types'

export default function sort<T extends keyof Country>({
  a,
  b,
  key,
  sortBy,
}: Sort<T>) {
  if (sortBy === 'asc') {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1

    return 0
  }
  if (a[key] > b[key]) return -1
  if (a[key] < b[key]) return 1

  return 0
}
