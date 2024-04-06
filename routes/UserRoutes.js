

const router=require("express").Router();
const { SaveEmp, GetEmp, DeleteEmp, SaveProj_Site, GetRole, GetProj_Site, DeleteProj_Site } = require("../controller/UserController");





router.route("/SaveEmp").post(SaveEmp);
router.route("/GetEmp").get(GetEmp);
router.route("/DeleteEmp").post(DeleteEmp);
router.route("/GetRole").get(GetRole);
router.route("/SaveProj_Site").post(SaveProj_Site);
router.route("/GetProj_Site").get(GetProj_Site);
router.route("/DeleteProj_site/:Id").delete(DeleteProj_Site);
module.exports=router;