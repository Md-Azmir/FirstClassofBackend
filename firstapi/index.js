// importing express.js
const express=require('express');
// creating instance of express to create express app
// instace=object
const app=express();
// create router instance for routing from express
const router=express.Router();
// enabling json data read
app.use(express.json())
// get api creation router.get(path,callback)
router.get('/:country/user/:state',function(req,res){
    // getting values from query param
    // const name=req.query.product;
    // const brand=req.query.brand;
    // getting query object
    // console.log(req.query)
    // const data=req.query
    // destructuring the query param
    const {product,brand}=req.query;
    // accessing path parems
    const countryName =req.params;
    // accessing body req
    const user =req.body
    console.log(user)
    console.log(countryName)
    res.send({status:"ok",message:{name:product,brand:brand},user});
})
// global middleware for all api calling defined with router
app.use('/',router)
// code for server start app.listen(port,callback)
app.listen(8000,function(){
    console.log('server started at port: ',8000)
})