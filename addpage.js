const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('请输入页面路径', (pathStr) => {
  console.log(pathStr)
  let jsonPush = 'pages/' + pathStr + '/main'
  fs.readFile('./src/app.json', function(err, json) {
    if (err) {
      return console.error(err)
    }
    let person = JSON.parse(json.toString()) //将二进制的数据转换为字符串
    console.log(person)
    person.pages.push(jsonPush)
    fs.writeFile('./src/app.json', JSON.stringify(person, null, "\t"), function(err) {
      if (err) {
        console.error(err)
      }
      console.log('----------新增成功-------------')
      rl.close()
    })
  })
})

// fs.readdir(`.${pathStr}`, function(err, files) {
//   console.log(files);
//   rl.close();
// })