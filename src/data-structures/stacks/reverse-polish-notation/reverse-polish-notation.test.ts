import { evalRPN } from './solution'

describe('reverse-polish-notation', () => {
  it('Example 1: ["2", "1", "+", "3", "*"] → 9', () => {
    const tokens = ['2', '1', '+', '3', '*']
    expect(evalRPN(tokens)).toBe(9)
  })

  it('Example 2: ["4", "13", "5", "/", "+"] → 6', () => {
    const tokens = ['4', '13', '5', '/', '+']
    expect(evalRPN(tokens)).toBe(6)
  })

  it('Example 3: Complex nested expression → 22', () => {
    const tokens = [
      '10',
      '6',
      '9',
      '3',
      '+',
      '-11',
      '*',
      '/',
      '*',
      '17',
      '+',
      '5',
      '+',
    ]
    expect(evalRPN(tokens)).toBe(22)
  })

  it('Handles negative results and subtraction', () => {
    const tokens = ['5', '10', '-']
    expect(evalRPN(tokens)).toBe(-5)
  })

  it('Handles division truncation toward zero', () => {
    const tokens = ['7', '3', '/']
    expect(evalRPN(tokens)).toBe(2)

    const tokens2 = ['-7', '3', '/']
    expect(evalRPN(tokens2)).toBe(-2)
  })

  it('Single operand returns itself', () => {
    const tokens = ['42']
    expect(evalRPN(tokens)).toBe(42)
  })
})
