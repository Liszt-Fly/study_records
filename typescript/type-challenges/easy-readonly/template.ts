type MyReadonly<T> = {
   readonly [K in keyof T]:T[K]
}

//* 和Easy-pick的方法一样
//* 熟悉readonly