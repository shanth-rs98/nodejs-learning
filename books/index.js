const express = require('express')
const router = express.Router();
const db = require('./../connection');


router.get('/',(req,res)=>{
    db.query(`Select * from books`)
    .then(( result)=>{
        
            res.send(result.rows).status(200)
      
    }).catch(err=>{
        res.send(err).status(500)
    })
})


router.get('/:id',(req,res)=>{

    if(!req.params.id || isNaN(+req.params.id)){
        return res.status(400).send("Request parameter is not number") 
    }

    db.query('select * from books where id=$1',[req.params.id])
    .then((result)=>{
            let data =  result.rows[0] 
            if(data){
                res.send(data).status(200)
            }
           
        }
    ).catch(error=>{
        res.send(error).status(500);
    });
})

module.exports = router;