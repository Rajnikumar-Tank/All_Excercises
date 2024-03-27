const { render } = require('ejs');
const mysql = require('mysql');
var order = 1
var orderBy = "Asc"
const conn = mysql.createConnection({
    user: 'root',
    host: "localhost",
    password: "root",
    database: "studentDB26Feb"
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
})

async function getData(req, res) {
    var totalRecord;
    count = 'Select count(*) as count from studentDetails;';
    conn.query(count, (err, result) => {
        if (err) throw err
        total = JSON.parse(JSON.stringify(result))
        totalRecord=total[0].count;
    })
    if (!req.query.page) {
        page = 0;
    }
    else {
        page = req.query.page;
    }
    var sql;
    if (req.query.order) {
        order = parseInt(req.query.order)
        if (orderBy == "Asc") orderBy = 'DESC';
            else {
                orderBy = 'Asc';
            }
        page=0;
    }
    sql = "Select * from studentDetails order by " + order + " " + orderBy + " limit " + (parseInt(page)) * 200 + ",200;"
    conn.query(sql, (err, data) => {
        if (err) {
            console.error("ERROR in sql" + err);
        }
        else {
            
            const student = JSON.parse(JSON.stringify(data))
            // console.log(student);

            res.render("paginationGrid/index.ejs", { student, thisPage: page,totalRecord })
            return student;
        }
    })
}


module.exports = getData;