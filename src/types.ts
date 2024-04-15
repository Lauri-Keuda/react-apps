export type historyItemType = {
  id: number,
  calculation: string,
  equals: string
}

export type TaskType = {
  id: number,
  name: string,
  description: string,
  reminder: boolean
}

export type ResultType = {
  numbers: number[],
  specialNumber: boolean,
  winAmount: number,
  numbersRight: number
}

export type FixMeLater = any