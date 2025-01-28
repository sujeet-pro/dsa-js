/**
 * Given an array of positive integers representing the values of coins in your possession,
 * write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.
 * The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
 *
 * For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4.
 * If you're given no coins, the minimum amount of change that you can't create is 1.
 * 
 * @param coins - Array of positive integers representing coin values
 * @returns The minimum amount of change that cannot be created
 */
export function nonConstructibleChange(coins: number[]) {
  coins.sort((a,b) => a-b)
  let currentMinChange = 0
  for(const coin of coins) {
    if(coin > currentMinChange + 1) {
      return currentMinChange + 1
    }
    currentMinChange += coin
  }
  return currentMinChange + 1
}
