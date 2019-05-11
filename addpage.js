const fs = require('fs')
const readline = require('readline')
const path = require('path')
const colors = require('colors')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//获取运行时附带参数，目前只定义了vue文件中的css语言类型和页面标题
let arguments = process.argv.splice(2);
let caaLang = arguments[0]
let pageTitle = arguments[1]

let appJson = JSON.parse(fs.readFileSync('./src/app.json', 'utf8').toString())

rl.question(' 请输入页面路径: '.bgBlue, (pathStr) => {
  rl.question(' 请输入页面标题: '.bgBlue, (title) => {
    pageTitle = title
    pageCreate(pathStr)
  })
})

function pageCreate(pathStr){
  let jsonPush = `pages/${pathStr}/main`
  let stop = false
  appJson.pages.forEach((item) => {
    let pathArr = item.split('/')
    let pathStrArr = pathStr.split('/')
    if (pathArr.length > 3 && pathStrArr.length === 1 && pathArr.indexOf(pathStrArr[0]) !== -1) {
      stop = true
    }
  })

  if (stop) {
    console.log(' 此路径下有其他页面，不可直接作为页面路径 '.bgRed);
    rl.close()
    return
  }

  if (appJson.pages.indexOf(jsonPush) !== -1) {
    console.log(' 此页面已存在 '.bgRed)
    rl.close()
    return
  }
  //app.json pages数组中没有，项目结构中有，此时已有的文件夹会被删除
  deleteFolder('./src/pages/' + pathStr)
  try {
    mkdirsSync('./src/pages/' + pathStr)
  } catch (error) {
    console.log(error);
  }

  if (writePage('./src/pages/' + pathStr)) {
    //加入本次创建的页面路径
    appJson.pages.push(jsonPush)
    //写入app.json
    fs.writeFile('./src/app.json', JSON.stringify(appJson, null, "\t"), function (err) {
      if (err) {
        console.error(err)
      }
      console.log(' ----------新增成功---------- '.bgGreen)
      rl.close()
    })
  }
}

//删除文件夹
function deleteFolder(path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      var curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolder(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}
//创建多级目录
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

//写入目标页面的三个文件
function writePage(path) {
  try {
    fs.writeFileSync(path + '/index.vue', `<template>
  <div class="page-container">

  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="${caaLang?caaLang:'scss'}" scoped>
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  background-image: linear-gradient(to bottom, #00d164, #00d164);
  background-repeat: no-repeat;
  background-size: 100% 170rpx;
  background-position: top center;
  padding-bottom: 65rpx;
}
</style>`, 'utf8');
    fs.writeFileSync(path + '/main.js', `import Vue from 'vue'
import App from './index'
    
const app = new Vue(App)
app.$mount()`, 'utf8')
    fs.writeFileSync(path + '/main.json', `{
  "navigationBarTitleText": "${pageTitle}"
}`, 'utf8')
    return true
  } catch (error) {
    //写入错误删除该文件夹
    deleteFolder(path)
    console.log(' 创建页面失败 '.bgRed);
    throw error
  }
}