const express = require('express');
const mysql = require('mysql');
const router =express.Router();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studDb27Feb'
})
router.get('/', (req, res) => {
    res.render('dynamicGrid/index')
})
var page, order = 1;
var orderType='asc';
router.post('/query', (req, res) => {
    //console.log('get');
    var rows = 20;
    if (!req.query.page) {
        page = 1;
    }
    else {
        page = req.query.page;
    }
    let sql = req.body.sql;
    if(req.query.order == order){
        order = req.query.order;
        
            if(orderType=='asc'){
                orderType='desc';
            }
            else{
                orderType='asc';
            }
    }
    else{
        
        orderType=req.query.orderType;
    }
    if (!req.query.order) order = 1;
    else {
        order = req.query.order;
        page = 1;
    }
    
    ////console.log(sql.search('limit'));
    conn.query(sql, (err, data) => {
        if (err) {
            //console.log('You Query is not proper.' + err)
            res.end(err.message);
        }
        else {
            var len = data.length;
        }
        if (sql.search('limit') != -1) {
            sql = sql.replace('limit', " limit ? ,?;");
            sql = sql.substring(0, sql.indexOf(';') + 1);
            //console.log(sql);
            let r = rows;
            if (len - (parseInt(page - 1) * rows) < r) r = len - (parseInt(page - 1) * rows);
            conn.query(sql, [parseInt(page - 1) * rows, r], (err, result) => {
                if (err) {
                    //console.log('You Query is not proper.' + err)
                    res.end(err.message);
                }
                else if (result.fieldCount == 0) res.end("Your Task Completed!!");
                // //console.log(result)
                res.render('dynamicGrid/index', { result, thisPage: page, sql, len, rows, order,orderType })
            })
        }
        else if (sql.search('limit') == -1) {
            sql = sql.replace(';', " limit ? ,?;");
            //console.log(sql);
            let r = rows;
            if (len - (parseInt(page - 1) * rows) < r) r = len - (parseInt(page - 1) * rows);
            conn.query(sql, [parseInt(page - 1) * rows, r], (err, result) => {
                if (err) {
                    //console.log('You Query is not proper.' + err)
                    res.end(err.message);
                }
                else if (result.fieldCount == 0) res.end("Your Task Completed!!");
                // //console.log(result)
                res.render('dynamicGrid/index', { result, thisPage: page, sql, len, rows, order,orderType })
            })
        }
        else {
            conn.query(sql, (err, result) => {
                if (err) {
                    //console.log('You Query is not proper.' + err)
                    res.end(err.message);
                }
                else if (result.fieldCount == 0) res.end("Your Task Completed!!");
                //console.log(result)
                res.render('dynamicGrid/index', { result, thisPage: page, sql, len, rows, order,orderType })
            })
        }
    })
})

router.get('/query', (req, res) => {
    //console.log('get');
    // var page;
    // var order;
    // var orderType='asc';
    var rows = 20;
    if (!req.query.page) {
        page = 1;
    }
    else {
        page = req.query.page;
    }
    var len = req.query.len;
    if(req.query.order == order){
        order = req.query.order;
            if(orderType=='desc'){
                orderType='acs';
            }
            else{
                orderType='desc';
            }
    }
    else{
        orderType=req.query.orderType;
    }
    if (req.query.order) {
        
        order = req.query.order;
        
    }
    else {
        order = 1;
        orderType='asc';
    }
    //console.log("Orderby:"+parseInt(order.substring(0,1)));
    if (req.query.sql) {
        var sql = req.query.sql;
        if(orderType=='desc'){
            orderType='asc';
        }
        else{
            orderType='desc';
        }
        //console.log(orderType);
        // //console.log(sql.search('limit'));
        if (sql.search('limit') != -1) {
            //console.log(sql)
            if (sql.search('order by') == -1) {
                sql = sql.replace('limit ', "order by " + order+ "  " +orderType + " limit ? , ?;");
            }
            else {
                
                //console.log('with:'+sql);
                let subsql1=sql.substring(0,sql.indexOf('by')+2);
                let subsql2=sql.substring(sql.indexOf('by')+4);
                //console.log(subsql1)
                //console.log(subsql2)

                if(orderType=='desc' || orderType=='asc'){
                    sql=subsql1+ " " +order+" "+subsql2;
                }
                else{
                    sql=subsql1+ " " +order+ " "+orderType  + " "+subsql2;

                }
                //console.log("SQL" + sql);
                sql = sql.replace('limit ', " limit ? , ?;");
            }

           
            sql = sql.substring(0, sql.indexOf(';') + 1)
            //console.log("SQL" + sql);
            let r = rows;
            if (len - (parseInt(page - 1) * rows) < r) r = len - (parseInt(page - 1) * rows);
            conn.query(sql, [parseInt(page - 1) * rows, r], (err, result) => {
                //console.log(result)
                if (err) {
                    //console.log('Your Query is not proper.' + err)
                    res.end(err.message);
                }
                else if (result.fieldCount == 0) res.end("Your Task Completed!!");
                res.render('dynamicGrid/index', { result, thisPage: page, sql, len, rows, order, orderType })
            })
        }
        else if (sql.search('limit') == -1) {
            if (sql.search('order by') == -1) {
                sql = sql.replace(';', "order by " + order+ " limit ? , ?;");
            }
            else {
                //console.log('with:'+sql);
                let subsql1=sql.substring(0,sql.indexOf('by')+2);
                let subsql2=sql.substring(sql.indexOf('by')+4);
                sql=subsql1+ " " +order + " "+subsql2;
                sql = sql.replace(';', " limit ? , ?;");
            }
            //console.log("Here:"+sql);
            let r = rows;
            if (len - (parseInt(page - 1) * rows) < r) r = len - (parseInt(page - 1) * rows);
            conn.query(sql, [parseInt(page - 1) * rows, r], (err, result) => {
                if (err) {
                    //console.log('Your Query is not correct.' + err)
                    res.end(err.message);
                }
                else if (result.fieldCount == 0) res.end("Your Task Completed!!");
                // //console.log(result)
                res.render('dynamicGrid/index', { result, thisPage: page, sql, len, rows, order, orderType })
            })
        }
        else {
            //console.log('error')
            conn.query(sql, [parseInt(page - 1) * rows, rows], (err, result) => {
                if (err) {
                    //console.log('Your query is not proper.' + err)
                    res.end(err.message);
                }
                else if (result.fieldCount == 0) res.end("Your Task Completed!!");
                // //console.log("Result"+result)
                res.render('dynamicGrid/index', { result, thisPage: page, sql, len, rows, order })
            })
        }
    }
    else {
        res.end(' please enter first Query');
    }
})

module.exports=router