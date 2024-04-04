const express = require('express');

const app = express()

const cookie = require('cookie-parser');
const dotenv = require('dotenv');
const router = require('./route.js')
dotenv.config();
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cookie())

app.use(router);

const conn = require('./connection.js')
// const applicationForm=require('./controller/applicationForm.controller.js')
// const paginationGrid=require('./controller/paginationGrid.controller.js')
// const studentDetails =require('./controller/StudentDetails.controller.js')
// const dynamicTable=require('./controller/DynamicTable.controller.js')
// const delemiterSearch=require('./controller/delemiterSearch.controller.js')
// const jsonPlaceHolder=require('./controller/jsonPlaceHolder.controller.js')
// const jobApplicationWithoutAjax=require('./controller/jobApplicationWithoutAjax.controller.js')
// const ApplicationFormWithAJAX=require('./controller/ApplicationFormWithAJAX.controller.js')
// app.use('/applicationForm',authoriseToken,applicationForm)
// app.use('/paginationGrid',authoriseToken,paginationGrid)
// app.use('/studentDetails',authoriseToken,studentDetails)
// app.use('/dynamicGrid',authoriseToken,dynamicTable)
// app.use('/delemiterSearch',authoriseToken,delemiterSearch)
// app.use('/jsonPlaceHolder',authoriseToken,jsonPlaceHolder)
// app.use('/jobApplicationWithoutAjax',authoriseToken,jobApplicationWithoutAjax)
// app.use('/ApplicationFormWithAJAX',authoriseToken,ApplicationFormWithAJAX)



app.listen(port, () => {
  console.log('Server is running on:' + port)
})