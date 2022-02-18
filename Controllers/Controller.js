const mssql = require("mssql");
const config = require("../config/db");

async function getProducts(req, res) {
  try {
    const pool = await mssql.connect(config);

    const products = await pool.request().query("exec getProducts");
    return res.json(products.recordset);
  } catch (error) {
    console.log(error);
  }
}

async function getProduct(req, res) {
  try {
    const pool = await mssql.connect(config);

    const products = await pool
      .request()
      .query(`exec getProduct @id = ${req.params.id}`);
    return res.json(products.recordset);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
};
