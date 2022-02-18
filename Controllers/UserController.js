const mssql = require("mssql");
const crypto = require("crypto");
const config = require("../config/db");

async function getUsers(req, res) {
  try {
    const pool = await mssql.connect(config);

    const products = await pool.request().query("exec getUsers");
    return res.json(products.recordset);
  } catch (error) {
    console.log(error);
  }
}

async function getUser(req, res) {
  try {
    const pool = await mssql.connect(config);

    const products = await pool
      .request()
      .query(`exec getUser @id = ${req.params.id}`);
    return res.json(products.recordset);
  } catch (error) {
    console.log(error);
  }
}

async function addUser(req, res) {
  try {
    const pool = await mssql.connect(config);
    const password = req.body.password;
    const hash = crypto.createHash("sha256").update(password).digest("base64");

    await pool
      .request()
      .query(
        `exec addUser @fname = '${req.body.fname}', @sname = '${req.body.sname}', @lname = '${req.body.lname}', @password = '${hash}'`
      );
    return res.json({
      Msg: "User added!",
    });
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req, res) {
  try {
    const pool = await mssql.connect(config);
    const password = req.body.password;
    const hash = crypto.createHash("sha256").update(password).digest("base64");

    await pool
      .request()
      .query(
        `exec updateUser @id = ${req.body.id}, @fname = '${req.body.fname}', @sname = '${req.body.sname}', @lname = '${req.body.lname}', @password = '${hash}'`
      );
    return res.json({
      Msg: "User updated!",
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  try {
    const pool = await mssql.connect(config);

    await pool.request().query(`exec deleteUser @id = ${req.params.id}`);
    return res.json({
      Msg: "User deleted!",
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
