
const jwtkey=process.env.JWT_Key
exports.Authencticate = async (req, res) => {
  const jwt =require("jsonwebtoken");
 
  try {
    
    let data=req[0].roleID;
   const token= jwt.sign({data},jwtkey)
return(token);
  } catch (error) {
    console.log(error);
    
  }
};