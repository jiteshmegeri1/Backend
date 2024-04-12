

module.exports={ VerifyToken:(req,res,next) => {
   
    const jwt =require("jsonwebtoken");
    let token=req.headers['authorization'];
    if(token){
    token=token.split(' ')[1].trim();
 
    jwt.verify(token,process.env.JWT_Key,(err,valid)=>{
    if(err){
    
      res.json({msg:"Invalid Token"})
    
    }else{
    next();
    
    }
    
    
    
    })
    
    }
    else
    {
      res.json({msg:"Token not Found"})
      
    }
    

    
  }
}

