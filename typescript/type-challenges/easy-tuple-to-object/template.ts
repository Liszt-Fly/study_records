type TupleToObject<T extends readonly (string|number|symbol)[]> = {
  [P in T[number]]:P
}

//* 数组的遍历方式 如何进行遍历