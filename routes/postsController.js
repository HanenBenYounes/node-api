const express = require('express');
const router = express.Router();
const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, docs)=>{
        if (!err) res.send(docs);
        else console.log ("error to get data:" +err);
    })
});
router.post('/', (req, res) =>{
    const newRecord = new PostsModel({
        autor:req.body.autor,
        message: req.body.message
    });
    newRecord.save((err, docs)=>{
        if(!err) res.send(docs);
        else console.log('error creating new data:' + err)
    })
})
module.exports = router;