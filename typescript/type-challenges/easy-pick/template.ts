type MyPick<T, K extends keyof T> = {
   [P in K]:T[P]
}

//* 一定要保证 K是具有T的属性的这一个约束条件
//* 使用关键字 in 进行遍历