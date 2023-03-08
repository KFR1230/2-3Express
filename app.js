//利用Express建立路由，會比Node.js方便許多，不用設定http、hostname、res.end來穿送資料，讓整體更簡潔。
//運用靜態資料
//學會建立.json，抓取不同資料
//express-handlebars將handlebars語法 轉成 html格式 讓瀏覽器讀取
//部分模板更換內容
//佈局保持內容
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const page_data = require('./page-data.json')
//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//建立靜態資料
app.use(express.static('public'))

//設定路由，起始首頁
app.get('/', (req, res) => {
  res.render('index', { description: page_data.results[0].description })
})

app.get('/:id', (req, res) => {
  let page = page_data.results.filter((item =>
    item.title.toLowerCase().includes(req.params.id.toLowerCase())
  ))
  res.render('index', { description: page[0].description })
})

app.listen(port, () => {
  console.log(`This Web url is http://localhost:${port}`)
})