
const {Authenticator}=require('../config/Authenticator');

const {
  SaveEmp,
  GetEmp,
  DeleteEmp,
  GetRoles,
  SaveProj_Site,
  GetProj_site,
  DeleteProj_Site,
  UpdatePorj_site,
  GetSiteId,
  GetProjct_site,
  GetSiteID,
  UpdateProjct_site,
  GetEmpId,
  UpdateEmp,
  Login,
} = require("../models/UserModels");



exports.SaveEmp = async (req, res) => {
  let data = [];
  try {
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

exports.SaveProj_Site = async (req, res) => {
  let data = [];
  try {
    data = await SaveProj_Site(req.body);
    res.json({ msg: "Sites save kelo be!!", data: data });
  } catch (error) {
    console.log(error);
    res.json({ msg: error, data: data });
  }
};

exports.GetProj_Site = async (req, res) => {
  let data = [];
  try {
    data = await GetProj_site();
    res.json({ msg: "Sites Dilo Bagh", data: data });
  } catch (error) {
    console.log(error);

    res.json({ msg: error, data: data });
  }
};

exports.DeleteProj_Site = async (req, res) => {
  
  try {
    data = await DeleteProj_Site(req.params.Id);
    res.json({ msg: "Site Khatam Tata Goodbye Gaya" });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

exports.UpdateProj_Site = async (req, res) => {
  let data = [];
  try {
    // console.log(req);
    data = await UpdateProjct_site(req.body);
    res.json({ msg: "Site Update Kelo bagh" });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

exports.GetSiteID = async (req, res) => {
  let data = [];
  try {
    data = await GetSiteID(req.params.Id);
    res.json({ msg: "Ghe Site Data", data: data });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

exports.GetEmpId = async (req, res) => {
  let data = [];
  try {
    data = await GetEmpId(req.params.Id);
    res.json({ msg: "Ghe be kaamgar ", data: data });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

exports.UpdateEmp = async (req, res) => {
  let data = [];
  try {
    data = await UpdateEmp(req.body);
    res.json({ msg: "Kaamgar updated", data: data });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

exports.UseAuthenticator = async (req, res) => {
  try {
    res.json({ msg: "Authenticated", data: req.body });
  } catch (error) {
    console.log(error);
  }
};

exports.Login = async (req, res) => {
  const data = [];
  try {
    data = await Login(req.body);
    // verifyToken();
    console.log()

    res.json({ msg: "Key Save kr be", data: data });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};
