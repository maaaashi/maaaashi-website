type CountMap = { [key: string]: number }

export const countAndSort = (input: string[]): CountMap[] => {
  const counts: CountMap = {}

  // Count occurrences
  for (const item of input) {
    if (!counts[item]) {
      counts[item] = 0
    }
    counts[item]++
  }

  const result: CountMap[] = Object.keys(counts).map((key) => ({
    [key]: counts[key],
  }))

  result.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])

  return result
}
