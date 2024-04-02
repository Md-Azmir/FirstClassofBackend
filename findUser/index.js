
const express=require('express');
const app=express();
const router=express.Router();
app.use(express.json())
let user1={
    name :"Azmir",
    pass:"123"
}
let user2={
    name :"Kaif",
    pass:"123"
}
let users=[user1,user2
    ]

router.get('/user',function(req,res){
    const {user}=req.body
    for(let i=0;i<users.length;i++){
        if(users[i].name==user){
            return res.send(users[i])
        }
    }
    return res.send("user not found");
})
app.use('/',router)
app.listen(8000,function(){
    console.log('server started at port: ',8000)
})