const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'stud5march'
})
conn.connect((err) => {
    if (err) {
        console.error("Database Error:" + err);
    }
})

router.get('/', (req, res) => {
    var sql = "Select * from studentMaster;";
    var search = ""
    conn.query(sql, (err, result) => {
        if (err) {
            console.error("sql error:" + err)
        }
        res.render('delemiterSearch/index', { result, search })
    })
})

router.get('/search', (req, res) => {
    var searchString = req.query.search;
    var sql;
    console.log(searchString.search('%'))
    if (searchString.search('%') > -1) {
        console.log(searchString.replace("%", "\\%"));
        searchString = searchString.replace("%", "\\%")
    }
    if (searchString) {
        var symbol = ["_", "^", "$", "}", '{', ":"];
        var index = []
        var gotSymbol = []
        for (s in searchString) {
            if (symbol.indexOf(searchString[s]) != -1) {
                index.push(parseInt(s));
                gotSymbol.push(searchString[s]);
            }
        }
        var strings = [];
        for (let i = 0; i < index.length; i++) {
            strings.push(searchString.slice(index[i] + 1, index[i + 1]));
        }
        console.log(strings);
        var firstname = [];
        var lastname = [];
        var email = [];
        var age = [];
        var mobileno = [];
        var city = [];
        for (let i = 0; i < gotSymbol.length; i++) {
            if (gotSymbol[i] == '_') {
                firstname.push(strings[i]);
            }
            else if (gotSymbol[i] == '^') {
                lastname.push(strings[i])
            }
            else if (gotSymbol[i] == '$') {
                email.push(strings[i]);
            }
            else if (gotSymbol[i] == '}') {
                age.push(strings[i]);
            }
            else if (gotSymbol[i] == '{') {
                mobileno.push(strings[i]);
            }
            else if (gotSymbol[i] == ':') {
                city.push(strings[i]);
            }
        }
        if (firstname.length) var ex1 = firstname.filter(e => e.length).map(e => "firstname like '%" + e + "%'").join(' or ');
        if (lastname.length) var ex2 = lastname.filter(e => e.length).map(e => "lastname like '%" + e + "%'").join(' or ');
        if (email.length) var ex3 = email.filter(e => e.length).map(e => "email like '%" + e + "%'").join(' or ');
        if (age.length) var ex4 = age.filter(e => e.length).map(e => "age like '%" + e + "%'").join(' or ');
        if (mobileno.length) var ex5 = mobileno.filter(e => e.length).map(e => "mobileno like '%" + e + "%'").join(' or ');
        if (city.length) var ex6 = city.filter(e => e.length).map(e => "city like '%" + e + "%'").join(' or ');
        console.log(ex5);
        let claus = [ex1, ex2, ex3, ex4, ex5, ex6].filter(l => l != undefined).map(e => "(" + e + ")").join(' and ');
        let sqlP = "select * from studentMaster ";
        var extend;
        if (claus.length > 0) {
            extend = ` where ${claus}`;
        }
        else {
            extend = " ";
        }
        sql = sqlP + extend;
        console.log(sql);
        conn.query(sql, (err, result) => {
            if (err) {
                console.error('err' + err);
            }
            return res.render('delemiterSearch/index', { result, search: searchString })
        })
    }
    else {
        sql = 'select * from studentMaster;'
        conn.query(sql, (err, result) => {
            if (err) {
                console.log('sql Err: ' + err)
            }
            res.render('delemiterSearch/index', { result, search: searchString })
        })
    }
})

module.exports = router