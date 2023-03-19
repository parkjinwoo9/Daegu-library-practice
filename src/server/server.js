const express = require('express') //가져오기
const app = express()//서버생성
const PORT = process.env.PORT || 4000 //포트설정
const db = require('./config/db');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log('root')
})

app.get('/notice',(req,res)=>{
    console.log('/notice')
    db.query('select * from notice_board',(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})


app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})