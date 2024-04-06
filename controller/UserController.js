const {
  SaveEmp,
  GetEmp,
  DeleteEmp,
  GetRoles,
  SaveProj_Site,
  GetProj_site,
  DeleteProj_Site,
} = require("../models/UserModels");

exports.SaveEmp = async (req, res) => {
  let data = [];
  try {
    console.log(req);
    data = await SaveEmp(req.body);
    res.json({ msg: "success", data: data });
  } catch (error) {
    console.log(error);
    res.json({ msg: error, data: [] });
  }
};

exports.GetEmp = async (req, res) => {
  let data = [];
  try {
    data = await GetEmp();
    res.json({ msg: "Data Milala Ka", data: data });
  } catch (error) {
    console.log(error);
    res.json({ msg: error, data: [] });
  }
};

exports.DeleteEmp = async (req, res) => {
  let data = [];
  try {
    data = await DeleteEmp(req.body);
    res.json({ msg: "Employee udavlo ", data: data });
  } catch (error) {
    console.log(error);
    res.json({ msg: error, data: [] });
  }
};

exports.GetRole = async (req, res) => {
  let data = [];
  try {
    data = await GetRoles();
    res.json({ msg: "Ghe Role", data: data });
  } catch (error) {
    console.log(error);
    res.json({ msg: error, data: data });
  }
};


exports.SaveProj_Site =async (req,res) =>{

  let data=[];
  try{
    data=await SaveProj_Site(req.body)
    res.json({msg:"Sites save kelo be!!",data: data});
  }catch(error){
    console.log(error);
    res.json({msg:error,data:data});
  }
}

exports.GetProj_Site =async (req,res)=>{

  let data=[];
  try{
    data=await GetProj_site();
    res.json({msg:"Sites Dilo Bagh",data: data})
  }catch(error){
    console.log(error);
    
    res.json({msg:error,data:data});
  }
  

}




exports.DeleteProj_Site=async (req,res)=>{


try{
  
  data=await DeleteProj_Site(req.params.Id);
  res.json({msg:"Site Khatam Tata Goodbye Gaya"});

}catch(error){
  console.log(error);
  res.json({msg:error});
}


}