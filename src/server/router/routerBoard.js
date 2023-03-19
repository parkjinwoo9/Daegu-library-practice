var express = require('express');
var router = express.Router();
const db = require('../config/db');

// /board

//모두조회
router.get('/',(req,res)=>{
    console.log('board root')
})

//최신 공지사항 게시글 7개
router.get('/tab/notice/recent',(req,res)=>{
    console.log('/board/tab/notice/recent')
})

//최신 입찰정보 게시글 7개
router.get('/tab/bid/recent',(req,res)=>{
    console.log('/board/tab/bid/recent')
})

router.get('/notice/count',(req,res)=>{
    console.log('/notice/count')

    db.query(`select count(*) as b_cnt from notice_board`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

//공지사항 게시판 글 limit 조회
router.get('/notice',(req,res)=>{
    console.log('/notice')
    console.log(req.query)
    console.log(req.query.page)
    const page = req.query.page
    console.log(page)
    const startIndex = (page-1) * 10
    db.query(`select * from notice_board order by no desc limit ${startIndex},10`, (err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

module.exports = router;