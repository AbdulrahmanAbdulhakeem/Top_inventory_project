const {Pool} = require("pg")

module.exports = new Pool({
    host:"localhost",
    user:"mac",
    database:process.env.database,
    password:process.env.password,
    port:process.env.port
})