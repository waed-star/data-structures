type Arithmetic = '*' | '-' | '/' | '+'

const symbolHelper = (
  symbol: Arithmetic,
  left: number,
  right: number
): number => {
  switch (symbol) {
    case '*':
      return left * right
    case '-':
      return left - right
    case '/':
      return Math.trunc(left / right)
    case '+':
      return left + right
  }
}

export const evalRPN = (tokens: string[]) => {
  let stack = []

  for (const token of tokens) {
    if (!isNaN(Number(token))) stack.push(Number(token))
    else {
      const right = Number(stack.pop())
      const left = Number(stack.pop())

      const result = symbolHelper(token as Arithmetic, left, right)
      stack.push(result)
    }
  }

  return stack.pop()
}
