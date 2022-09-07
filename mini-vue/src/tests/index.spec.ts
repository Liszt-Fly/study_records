export const add=(a,b)=>{
    return a+b
}
it("init",()=>{
    expect(true).toBe(true)
    expect(add(1,2)).toBe(3)
})