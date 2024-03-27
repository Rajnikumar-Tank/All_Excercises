const express = require('express');
const mysql = require('mysql');

const router=express.Router();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "root",
    database: "studDb27Feb"
})
conn.connect((err) => {
    if (err) console.error('Database not connected:' + err);
})
router.get('/', (req, res) => {
    var page = "0";

    if (req.query.page == "" || !req.query.page) {
        page = 0;
    } else {
        page = parseInt(req.query.page);
    }
    if (req.query.month) {
        month = parseInt(req.query.month);
    }
    else month = 12
    let sql = "select studentMaster.studId,studentMaster.name,count(isAttend) as presentDays from attendence,studentMaster  where studentMaster.studId=attendence.studId and attendence.isAttend='p' and month(dateOfAttend)=" + month + " group by attendence.studId limit " + (parseInt(page)) * 50 + ",50";
    // console.log(sql);
    conn.query(sql, (err, data) => {
        if (err) console.error('sql ERROR:' + err)
        data = JSON.parse(JSON.stringify(data))
        // console.log(data);
        var totalRecord = data.length;
        count = "Select count(*) as count from studentMaster";
        conn.query(count, (err, result) => {
            if (err) throw err
            // console.log("this"+result);

            total = JSON.stringify(result)
            // console.log("this2"+total);

            totalRecord = total[0].count;
        })
        res.render('studentDetails/index', { details: data, thisPage: page, totalRecord, month });
    })
})
router.get('/clickForSearch', (req, res) => {
    res.render('studentDetails/attendence4march');
})
router.get('/attendence4march', (req, res) => {
    var page = "0";
    var studId = req.query.studId;
    var name = req.query.name;
    var days = req.query.days;
    var startRange=req.query.startRange;
    var endRange=req.query.endRange;
    // console.log(name)
    var sql;

    if (req.query.page == "" || !req.query.page) {
        page = 0;
    } else {
        page = parseInt(req.query.page);
    }
    if (req.query.month) {
        month = parseInt(req.query.month);
    }
    else month = 12
    if (studId) {
        sql = "select studentMaster.studId,studentMaster.name,count(isAttend) as presentDays from attendence,studentMaster  where studentMaster.studId=attendence.studId and attendence.isAttend='p' and studentMaster.studId='" + studId + "' group by attendence.studId ;";
    }
    else if (name) {
        sql = "select studentMaster.studId,studentMaster.name,count(isAttend) as presentDays from attendence,studentMaster  where studentMaster.studId=attendence.studId and attendence.isAttend='p'  and studentMaster.name like '%" + name + "%' group by attendence.studId;";
        
    }
    else if(days){
        sql = "select studentMaster.studId,studentMaster.name,count(isAttend) as presentDays from attendence,studentMaster  where studentMaster.studId=attendence.studId and attendence.isAttend='p'  group by attendence.studId having presentDays='"+ days+"';";
    }
    else if(startRange && endRange){
        sql = "select studentMaster.studId,studentMaster.name,count(isAttend) as presentDays, ((count(isAttend)/91)*100) as parcentage  from attendence,studentMaster  where studentMaster.studId=attendence.studId and attendence.isAttend='p' group by attendence.studId having parcentage between '"+ startRange+"' and  '"+ endRange +"' ;";
    }
    console.log(sql);
    conn.query(sql, (err, data) => {
        if (err) res.end('sql ERROR:' + err)
        // console.log(data);
        data = JSON.parse(JSON.stringify(data))
        var totalRecord = data.length;
        count = "Select count(*) as count from studentMaster";
        conn.query(count, (err, result) => {
            if (err) throw err
            // console.log("this"+result);

            total = JSON.stringify(result)
            // console.log("this2"+total);

            totalRecord = total[0].count;
        })
        res.render('studentDetails/attendence4march', { details: data, thisPage: page, totalRecord, month });
    })
})


router.get('/result', (req, res) => {

    var sql = "select r.studId,s.name,sum(r.obtainPrecticalMarks) as pp,sum(r.obtainTheoryMarks)pt from result r,studentMaster s where s.studId=r.studId and examId= ? group by r.studId";
    conn.query(sql, 2, (err, prelims) => {
        if (err) console.error("Error:" + err);
        
        conn.query(sql, 1, (err, terminalData) => {
            if (err) console.error("Error:" + err);
           
            conn.query(sql, 3, (err, final) => {
                if (err) console.error('ErrorF:' + err);
                res.render('studentDetails/result', { prelims, terminalData, final });
            })
        })
    })
})
router.get('/resultFind', (req, res) => {
    res.render('studentDetails/resultSearchView')
})
router.get('/resultSearch', (req, res) => {
    var studId = parseInt(req.query.studId);
    var name = req.query.name;
    console.log(studId)
    if (studId) {
        var sql = "select r.studId,s.name,sum(r.obtainPrecticalMarks) as pp,sum(r.obtainTheoryMarks)pt from result r,studentMaster s where s.studId=r.studId and examId= ? and r.studId= ? group by r.studId";
        conn.query(sql, [2, studId], (err, prelims) => {
            if (err) console.error("Error:" + err);
            prelims = JSON.parse(JSON.stringify(prelims));
            conn.query(sql, [1, studId], (err, terminalData) => {
                if (err) console.error("Error:" + err);
                terminalData = JSON.parse(JSON.stringify(terminalData));

                conn.query(sql, [3, studId], (err, final) => {
                    if (err) console.error('ErrorF:' + err);
                    console.log(final)
                    final = JSON.parse(JSON.stringify(final))
                    res.render('studentDetails/resultSearchView', { prelims, terminalData, final });
                })
            })
        })
    }
    else if (name) {
        var sql = "select r.studId,s.name,sum(r.obtainPrecticalMarks) as pp,sum(r.obtainTheoryMarks)pt from result r,studentMaster s where s.studId=r.studId and examId= ? and s.name like '%" + name + "%' group by r.studId";
        conn.query(sql, [2], (err, prelims) => {
            if (err) console.error("Error:" + err);
            
            conn.query(sql, [1], (err, terminalData) => {
                if (err) console.error("Error:" + err);
               
                conn.query(sql, [3], (err, final) => {
                    if (err) console.error('ErrorF:' + err);
                    console.log(final)
                    
                    res.render('studentDetails/resultSearchView', { prelims, terminalData, final });
                })
            })
            
        })
    }
})

router.get('/report', (req, res) => {
    var studId = req.query.studId;
    var StudentName;
    conn.query("select studId,name from studentMaster where studId=" + studId + ";", (err, name) => {
        StudentName = JSON.parse(JSON.stringify(name));
    });
    let sql = "select em.examType,s.name,sm.name,count(a.isAttend) as presentDays,r.obtainPrecticalMarks,r.obtainTheoryMarks from studentMaster s, subjectMaster sm, attendence a, examMaster em, result r where s.studId=r.studId and em.examId=r.examId and sm.subId=r.subId and  r.studId= ? and r.examId= ? and s.studId=a.studId and a.isAttend='p' group by r.studId,r.examId,r.subId,r.obtainPrecticalMarks,r.obtainTheoryMarks ;"
    conn.query(sql, [studId, 2], (err, prelims, fields) => {
        if (err) console.error("sqlP:" + err)
        console.log(fields);
        conn.query(sql, [studId, 1], (err, terminal) => {
            if (err) console.error("sqlP:" + err)
            conn.query(sql, [studId, 3], (err, final) => {
                if (err) console.error("sqlP:" + err)
                res.render('studentDetails/report', { prelims, terminal, final, StudentName })
            })
        })
    })
})

router.get('/functionalitySearch',(req,res)=>{
    var sql;
    sql="select s.studId,s.name,case when s.gender='F' then 'Female' when s.gender='m' or s.gender='M' then 'Male' end as gender,sum(r.obtainPrecticalMarks) as practical, sum(r.obtainTheoryMarks) as theory, sum(r.grandTotal) as total, round(sum(r.grandTotal)/12,2)  as percentage from studentMaster s,result r where s.studId=r.studId group by r.studId";
    conn.query(sql,(err,result)=>{
        if(err){
            console.log('dataError:'+sql);
        }
        console.log(result);
        res.render('studentDetails/search',{result});
    })
})

router.get('/search',(req,res)=>{
    var studId=req.query.id;
    var name=req.query.name;
    var gender=req.query.gender;
    var startPercentage=req.query.startPercentage;
    var endPercentage=req.query.endPercentage;
    var sql;
    if( name && gender){
        gender=gender.substring(0,1);

        sql="Select s.studId,s.name,case when s.gender='F' then 'Female' when s.gender='m' or s.gender= 'M' then 'Male' end as gender, sum(r.obtainPrecticalMarks) as practical,sum(r.obtainTheoryMarks) as theory,sum(r.grandTotal) as total,round((sum(r.grandTotal)/12),2) as percentage from studentMaster s ,result r where s.studId=r.studId and name like '%"+name +"%' and gender like '%"+ gender +"%' group by r.studId;"
    }
    else if(studId){
        sql="select s.studId,s.name,case when s.gender='F' then 'Female' when s.gender='m' or s.gender='M' then 'Male' end as gender,sum(r.obtainPrecticalMarks) as practical, sum(r.obtainTheoryMarks) as theory, sum(r.grandTotal) as total, round(sum(r.grandTotal)/12,2)  as percentage from studentMaster s,result r where s.studId=r.studId and r.studId IN ("+ studId +") group by r.studId;";
    }
    else if(name){
        sql="select s.studId,s.name,case when s.gender='F' then 'Female' when s.gender='m' or s.gender='M' then 'Male' end as gender,sum(r.obtainPrecticalMarks) as practical, sum(r.obtainTheoryMarks) as theory, sum(r.grandTotal) as total, round(sum(r.grandTotal)/12,2)  as percentage from studentMaster s,result r where s.studId=r.studId and s.name like '%"+ name +"%' group by r.studId;";
    }
    else if(gender){
        gender=gender.substring(0,1);
        sql="select s.studId,s.name,case when s.gender='F' then 'Female' when s.gender='m' or s.gender='M' then 'Male' end as gender,sum(r.obtainPrecticalMarks) as practical, sum(r.obtainTheoryMarks) as theory, sum(r.grandTotal) as total, round(sum(r.grandTotal)/12,2)  as percentage from studentMaster s,result r where s.studId=r.studId and s.gender like '%"+ gender +"%' group by r.studId;";
    }
    else if(endPercentage && startPercentage){
        sql="select s.studId,s.name,case when s.gender='F' then 'Female' when s.gender='m' or s.gender='M' then 'Male' end as gender,sum(r.obtainPrecticalMarks) as practical, sum(r.obtainTheoryMarks) as theory, sum(r.grandTotal) as total, round(sum(r.grandTotal)/12,2)  as percentage from studentMaster s,result r where s.studId=r.studId   group by r.studId having percentage between '"+startPercentage + "' and '" + endPercentage +"';";
    }
    else{
        sql="select s.studId,s.name,case when s.gender='F' then 'Female' when s.gender='m' or s.gender='M' then 'Male' end as gender,sum(r.obtainPrecticalMarks) as practical, sum(r.obtainTheoryMarks) as theory, sum(r.grandTotal) as total, round(sum(r.grandTotal)/12,2)  as percentage from studentMaster s,result r where s.studId=r.studId group by r.studId";
    }
    conn.query(sql,(err,result)=>{
        if(err){
            console.log("Search problem:"+err)
        }
        console.log(result);
        res.render('studentDetails/search',{result});
    })
})

module.exports=router