# 🧮 Reverse Polish Notation Evaluator

This is a TypeScript/JavaScript implementation for evaluating **Reverse Polish Notation (RPN)** expressions using a stack-based approach.

## 📘 Problem Statement

You are given an array of strings `tokens` that represents an arithmetic expression in **Reverse Polish Notation**.

Your task is to **evaluate the expression** and return an integer result.

### Rules:

- Valid operators are: `'+'`, `'-'`, `'*'`, `'/'`
- Each operand may be an integer or another expression
- Division between two integers **truncates toward zero**
- No division by zero will occur
- All intermediate and final results will fit within a 32-bit signed integer

---

## 🧪 Examples

### Example 1

```ts
Input: tokens = ['2', '1', '+', '3', '*']
Output: 9
// Explanation: ((2 + 1) * 3) = 9
```
