export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  redShirtHeights.sort((a, b) => a - b)
  blueShirtHeights.sort((a, b) => a - b)
  let isBlueFirst = true
  let isRedFirst = true
  for (let i = 0; i < redShirtHeights.length && (isBlueFirst || isRedFirst); i++) {
    const redHeight = redShirtHeights[i]!
    const blueHeight = blueShirtHeights[i]!
    if (isBlueFirst && blueHeight >= redHeight) {
      isBlueFirst = false
    }
    if (isRedFirst && redHeight >= blueHeight) {
      isRedFirst = false
    }
  }
  return isBlueFirst || isRedFirst
}
