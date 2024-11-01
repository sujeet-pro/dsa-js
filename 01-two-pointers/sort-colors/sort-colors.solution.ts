// type Tcolor = number | 0 (red)| 1 (white)| 2(blue)

const RED = 0
const WHITE = 1
const BLUE = 2

function swap(arr: number[], i: number, j: number) {
  if (i >= 0 && j >= 0 && i < arr.length && j < arr.length) {
    const temp = arr[i] as number
    arr[i] = arr[j] as number
    arr[j] = temp
  }
}

export function sortColors(colors: number[]): number[] {
  let red = 0
  let white = 0
  let blue = colors.length - 1

  while (blue >= white) {
    switch (colors[white]) {
      case WHITE:
        white += 1
        break
      case RED:
        swap(colors, white, red)
        red += 1
        white += 1
        break
      case BLUE:
        swap(colors, white, blue)
        blue -= 1
        break
    }
  }

  return colors
}
