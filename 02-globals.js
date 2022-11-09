// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)       // showing path to current directory
setInterval(() => {          // console hello world in every 5 sec
  console.log('hello world')
}, 5000)

setTimeout(() => {          // console hello world in 5 sec only 1 time
    console.log('hello world')
}, 5000)