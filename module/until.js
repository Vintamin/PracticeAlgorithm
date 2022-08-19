const add =function (...args) {
    return args.reduce((all,cur)=>all+cur)
}

console.log('我是export文件中的语句')

let isChange = 123;
export {add,isChange}
