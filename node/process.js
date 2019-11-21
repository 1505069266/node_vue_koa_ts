// console.log(process);

// console.log(process.env);

// console.log(process.argv);

// console.log(process.execPath);

// console.log(process.env.OS);

// console.log(process.pid);

// console.log(process);

// console.log(process.arch);

// console.log(process.cwd());

// console.log(process.platform);  //当前操作系统平台

// console.log(process.memoryUsage());

// console.log(process.version); //node版本

// console.log(process.stdin);

// console.log(process.stdout);

process.stdin.resume()

process.stdin.on('data', (a)=>{
  console.log("用户输入了" + a);
})