type First<T extends any[]> = T extends []?never:T[0]

//条件类型 condition继承