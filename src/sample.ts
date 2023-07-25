export function first1(array: Array<string>): string | null {
  return array.length === 0 ? null : array[0];
}

export function first2<Item>(array: Array<Item>): Item | null {
  return array.length === 0 ? null : array[0];
}
