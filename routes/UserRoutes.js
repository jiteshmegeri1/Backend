

const router=require("express").Router();
 
const { SaveEmp, GetEmp, DeleteEmp, SaveProj_Site, GetRole, GetProj_Site, DeleteProj_Site, UpdateProj_Site, GetSiteID, GetEmpId, UpdateEmp, UseAuthenticator, Login } = require("../controller/UserController");




router.route("/SaveEmp").post(SaveEmp);
router.route("/GetEmp").get(GetEmp);
router.route("/DeleteEmp").post(DeleteEmp);
router.route("/GetRole").get(GetRole);
router.route("/SaveProj_Site").post(SaveProj_Site);
router.route("/GetProj_Site").get(GetProj_Site);
router.route("/DeleteProj_Site/:Id").delete(DeleteProj_Site);
router.route("/UpdateProj_Site").put(UpdateProj_Site);
router.route("/GetProj_Site/:Id").get(GetSiteID);
router.route("/GetEmp/:Id").get(GetEmpId);
router.route("/UpdateEmp").put(UpdateEmp);
router.route("/Authenticate").get(UseAuthenticator);

module.exports=router;