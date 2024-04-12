const connection = require("../config/Db");

const { promisify } = require("util");

const promise_connection = promisify(connection.query).bind(connection);

exports.SaveEmp = async (data) => {
  let query =
    "insert into employee_data (firstName,lastName,gender,dateOfBirth,aadharNumber,fatherSpouseName,nationality,educationLevel,dateOfJoning,banktName,bankAccountNumber,ifscCode,panNumber,uan,pfNumber,esicIP,lwf,siteLocaion,categoryWork,designation,serviceBookNumber,serviceRemark,presentAddress,permanentAddress,cityName,markOfIdentification,mobileNumber,alternateMobileNumber) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  //let query="insert into employee_data(Fname)values(?)"
  //let query="insert into employee_data SET ?"
  let query2 =
    "insert into emp_profile (Emp_ID,firstName,lastName,gender,dateOfBirth,aadharNumber,fatherSpouseName,nationality,panNumber,esicIP,pfNumber,UAN) values (?,?,?,?,?,?,?,?,?,?,?,?)";
  let query3 =
    "insert into emp_official (bankName,bankAccountNumber,ifscCode,siteLocaion,categoryWork,designation,serviceBookNumber,serviceRemark) values (?,?,?,?,?,?,?,?)";
  let query1 =
    "insert into emp_data (dateOfJoning,lwf,presentAddress,permanentAddress,cityName,markOfIdentification,mobileNumber,alternateMobileNumber,educationLevel) values (?,?,?,?,?,?,?,?,?) ";
  let returnale = await promise_connection(query2, [
    null,
    data.firstName,
    data.lastName,
    data.gender,
    data.dateOfBirth,
    data.aadharNumber,
    data.fatherSpouseName,
    data.nationality,
    data.panNumber,
    data.esicIP,
    data.pfNumber,
    data.UAN,
  ]);
  returnale =
    returnale +
    "/n" +
    (await promise_connection(query3, [
      data.bankName,
      data.bankAccountNumber,
      data.ifscCode,
      data.siteLocaion,
      data.categoryWork,
      data.designation,
      data.serviceBookNumber,
      data.serviceRemark,
    ]));
  returnale =
    returnale +
    "/n" +
    (await promise_connection(query1, [
      data.dateOfJoning,
      data.lwf,
      data.presentAddress,
      data.permanentAddress,
      data.cityName,
      data.markOfIdentification,
      data.mobileNumber,
      data.alternateMobileNumber,
      data.educationLevel,
    ]));

  //  returnale=await promise_connection(query, [
  //     data.firstName,
  //     data.lastName,
  //     data.gender,
  //     data.dateOfBirth,
  //     data.aadharNumber,
  //     data.fatherSpouseName,
  //     data.nationality,
  //     data.educationLevel,
  //     data.dateOfJoning,
  //     data.banktName,
  //     data.bankAccountNumber,
  //     data.ifscCode,
  //     data.panNumber,
  //     data.uan,
  //     data.pfNumber,
  //     data.esicIP,
  //     data.lwf,
  //     data.siteLocaion,
  //     data.categoryWork,
  //     data.designation,
  //     data.serviceBookNumber,
  //     data.serviceRemark,
  //     data.presentAddress,
  //     data.permanentAddress,
  //     data.cityName,
  //     data.markOfIdentification,
  //     data.mobileNumber,
  //     data.alternateMobileNumber,
  //   ]);
  return returnale;
};

exports.DeleteEmp = async (data) => {
  // let query = "delete from employee_data where empid = ?";
  // return await promise_connection(query, [data.empId]);
};

exports.GetRoles = async () => {
  let query = "SELECT * FROM employee_role";
  return await promise_connection(query);
};

exports.SaveProj_Site = async (data) => {
  let query =
    "insert into proj_site (siteName,siteArea,creationDate) values (?,?,?)";
  return await promise_connection(query, [
    data.siteName,
    data.siteArea,
    data.creationDate,
  ]);
};

exports.GetProj_site = async () => {
  let query = "select * from proj_site";
  return await promise_connection(query);
};

exports.DeleteProj_Site = async (Id) => {
  let query = "delete from proj_site where Id=?";

  return await promise_connection(query, Id);
};

exports.UpdateProjct_site = async (data) => {
  let query =
    "update proj_site set  siteName=?,siteArea=?,creationDate=? where Id=?";

  return await promise_connection(query, [
    data.siteName,
    data.siteArea,
    data.creationDate,
    data.Id,
  ]);
};

exports.GetSiteID = async (Id) => {
  let query = "select * from proj_site where Id=?";
  return await promise_connection(query, Id);
};

exports.GetEmpId = async (Id) => {
  let query =
    "select * from ((emp_profile as ef inner join emp_official as eo on ef.Id=eo.Id) inner join emp_data ed on ef.id=ed.Id and eo.Id=ed.Id) where ef.Id=? ";

  return await promise_connection(query, Id);
};

exports.GetEmp = async () => {
  let query =
    "select * from ((emp_profile as ef inner join emp_official as eo on ef.Id=eo.Id) inner join emp_data ed on ef.id=ed.Id and eo.Id=ed.Id)";

  return await promise_connection(query);
};

exports.UpdateEmp = async (data) => {
  let query =
    "update table employee_data set firstName=?,lastName=?,gender=?,dateOfBirth=?,aadharNumber=?,fatherSpouseName=?,nationality=?,educationLevel=?,dateOfJoning=?,banktName=?,bankAccountNumber,ifscCode,panNumber,uan,pfNumber,esicIP,lwf,siteLocaion,categoryWork,designation,serviceBookNumber,serviceRemark,presentAddress,permanentAddress,cityName,markOfIdentification,mobileNumber,alternateMobileNumber) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  //let query="insert into employee_data(Fname)values(?)"
  //let query="insert into employee_data SET ?"
  let query2 =
    "update emp_profile set Emp_ID=?,firstName=?,lastName=?,gender=?,dateOfBirth=?,aadharNumber=?,fatherSpouseName=?,nationality=?,panNumber=?,esicIP=?,pfNumber=?,UAN=? where Id=?";
  let query3 =
    "update  emp_official set bankName=?,bankAccountNumber=?,ifscCode=?,siteLocaion=?,categoryWork=?,designation=?,serviceBookNumber=?,serviceRemark=? where Id=?";
  let query1 =
    "update emp_data set dateOfJoning=?,lwf=?,presentAddress=?,permanentAddress=?,cityName=?,markOfIdentification=?,mobileNumber=?,alternateMobileNumber=?,educationLevel=? where Id=?";
  let returnale = await promise_connection(query2, [
    null,
    data.firstName,
    data.lastName,
    data.gender,
    data.dateOfBirth,
    data.aadharNumber,
    data.fatherSpouseName,
    data.nationality,
    data.panNumber,
    data.esicIP,
    data.pfNumber,
    data.UAN,
    data.Id,
  ]);
  returnale =
    returnale +
    "/n" +
    (await promise_connection(query3, [
      data.bankName,
      data.bankAccountNumber,
      data.ifscCode,
      data.siteLocaion,
      data.categoryWork,
      data.designation,
      data.serviceBookNumber,
      data.serviceRemark,
      data.Id,
    ]));
  returnale =
    returnale +
    "/n" +
    (await promise_connection(query1, [
      data.dateOfJoning,
      data.lwf,
      data.presentAddress,
      data.permanentAddress,
      data.cityName,
      data.markOfIdentification,
      data.mobileNumber,
      data.alternateMobileNumber,
      data.educationLevel,
      data.Id,
    ]));
};

exports.Login = async (data) => {
  let query =
    "select username,empId,roleID from Login_Data where userId=? and userPassword=?";
//console.log(data.userPassword);
  return promise_connection(query, [data.userId, data.userPassword]);
};
