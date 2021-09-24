// DB.js config for your database  
//const sql = require('mssql')
const {Pool, Client} = require('pg')
/* var ConnectionPool = require('tedious-connection-pool');
var Request = require('tedious').Request; */

 
//Variable de configuracion de conexion a la base de datos
const pool = new Pool({
    user: 'gjxadminpg@gjxopendoors.postgres.database.azure.com',
    host: 'gjxopendoors.postgres.database.azure.com',
    database: 'opendoorsgjx',
    password: 'Gjx##2021',
    port: 5432,
    ssl:true
});



/*  const config = {
    user: 'gjxadminpg',
    password: 'Gjx##2021@gjxopendoors.postgres.database.azure.com',
    server: "gjxopendoors.postgres.database.azure.com" , 
    database: 'opendoorsgjx',
    port: "5432",
    "options": {
    "encrypt": true,
    "enableArithAbort": true
    }
}    */


// codigo de conexion a la base de datos
  pool.on('error', (err, client) => {
    console.error('Error:', err);
});  




/* const query = `
select count(*) from "Tr_DCI"
`;
 */

/* pool.connect((err, client, done) => {
    if (err) throw err;
    client.query(query, (err, res) => {
        done();
        if (err) {
            console.log(err.stack);
        } else {
            for (let row of res.rows) {
                console.log(row);
            }
        }
    });
});
 */
/*  const poolPromise = new sql.ConnectionPool(config)  
.connect()  
.then(pool => {  
console.log('Connected to MSSQL') 
return pool  
})  
.catch(err => console.log('Database Connection Failed! Bad Config: ', err))  
module.exports = {  
sql, poolPromise  
}   
 */





