// 加载 express
const express = require('express')

// 调用 express 得到一个 app
// 类似于 http.createServer()
const app = express()

// 设置请求对应的处理函数
// 当客户端，以 get 的方法请求时，就是调用第二个处理函数
app.get('/', (req, res) => {
    // res.end('哈哈') end 是http模块提供的方法，给他中文会显示乱码，职能简单
    res.send('哈哈')
})

const details = require('./details.js')
app.get('/home/page/:page/:pageSize', (req, res) => {
    // console.log(req.query)
    // console.log(req.params)
    // res.end('哈哈') end 是http模块提供的方法，给他中文会显示乱码，职能简单
    // 生产数据
    const { pageSize } = req.params
    const arr = details.getData(pageSize)
    res.send(
        {
            data: arr,
            total: arr.length
        }
    )
    // res.json(arr)
})

app.get('/details', (req, res) => {
    // console.log(req.params, req.query, 11)
    const mid = req.query.mid
    // 根据 mid 找到商品信息
    const arr = details.getData(15)
    const result = arr.filter(item => item.id == mid)
    res.send(result)
})

// 启动服务，监听端口号
app.listen(3333, () => console.log('app listening on port 3333!'))
