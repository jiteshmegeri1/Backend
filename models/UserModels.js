const connection = require("../config/Db");

const { promisify } = require("util");

const promise_connection = promisify(connection.query).bind(connection);

exports.SaveEmp = async (data) => {
  let query =
    "insert into employee_data (firstName,lastName,gender,dateOfBirth,aadharNumber,fatherSpouseName,nationality,educationLevel,dateOfJoning,banktName,bankAccountNumber,ifscCode,panNumber,uan,pfNumber,esicIP,lwf,siteLocaion,categoryWork,designation,serviceBookNumber,serviceRemark,presentAddress,permanentAddress,cityName,markOfIdentification,mobileNumber,alternateMobileNumber) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  //let query="insert into employee_data(Fname)values(?)"
  //let query="insert into employee_data SET ?"
  let query2 =
    "insert into emp_profile (Emp_ID,firstName,lastName,gender,dateOfBirth,aadharNumber,fatherSpouseName,nationality,panNumber,esicIP,pfNumber) values (?,?,?,?,?,?,?,?,?,?,?)";
  let query3 =
    "insert into emp_official (bankName,bankAccountNumber,ifscCode,siteLocaion,categoryWork,designation,serviceBookNumber,serviceRemark) values (?,?,?,?,?,?,?,?)";
  let query1 =
    "insert into emp_data (dateOfJoning,lwf,presentAddress,permanentAddress,cityName,markOfIdentification,mobileNumber,alternateMobileNumber) values (?,?,?,?,?,?,?,?) ";
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

exports.GetEmp = async () => {
  let query =
    "select * from ((emp_profile as ef inner join emp_official as eo on ef.Id=eo.Id) inner join emp_data ed on ef.id=ed.Id and eo.Id=ed.Id);";

  return await promise_connection(query);
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


exports.GetProj_site =async () =>{

  let query="select * from proj_site"
  return await promise_connection(query);
}