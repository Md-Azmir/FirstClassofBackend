const userModals=require('../models/userModal')
const user = async(req, res) => {
  const data=req.body
  const createdUser=await userModals.create(data)
  return res.send({status:'ok',message:createdUser})
};
module.exports=user 