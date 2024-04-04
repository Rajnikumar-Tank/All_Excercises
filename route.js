const express = require('express')

const router = express.Router();
const authoriseToken = require('./middleware/middleware.js')
const { applicationFormHome, applicationFormGetData, applicationFormOneUser, applicationFormAllUser } = require('./controller/applicationForm.controller.js')
router.get('/applicationForm', authoriseToken, applicationFormHome);
router.post('/applicationForm/getData', authoriseToken, applicationFormGetData);
router.get('/applicationForm/alluser', authoriseToken, applicationFormAllUser);
router.get('/applicationForm/oneUser', authoriseToken, applicationFormOneUser);

const { ApplicationFormWithAJAXHome, ApplicationFormWithAJAXDelete, ApplicationFormWithAJAXDisplay, ApplicationFormWithAJAXGetState, ApplicationFormWithAJAXInsert, ApplicationFormWithAJAXPostInsert, ApplicationFormWithAJAXGetCity, ApplicationFormWithAJAXUpdate, ApplicationFormWithAJAXRecord } = require('./controller/ApplicationFormWithAJAX.controller.js')

router.get('/ApplicationFormWithAJAX', authoriseToken, ApplicationFormWithAJAXHome);
router.get('/ApplicationFormWithAJAX/insert', authoriseToken, ApplicationFormWithAJAXInsert);
router.get('/ApplicationFormWithAJAX/record', authoriseToken, ApplicationFormWithAJAXRecord);
router.get('/ApplicationFormWithAJAX/display', authoriseToken, ApplicationFormWithAJAXDisplay);
router.get('/ApplicationFormWithAJAX/update', authoriseToken, ApplicationFormWithAJAXUpdate);
router.get('/ApplicationFormWithAJAX/delete', authoriseToken, ApplicationFormWithAJAXDelete);
router.post('/ApplicationFormWithAJAX/insert', authoriseToken, ApplicationFormWithAJAXPostInsert);
router.get('/ApplicationFormWithAJAX/getState', authoriseToken, ApplicationFormWithAJAXGetState);
router.get('/ApplicationFormWithAJAX/getCity/:state', authoriseToken, ApplicationFormWithAJAXGetCity);


const { delemiterSearchHome, delemiterSearchSearch } = require('./controller/delemiterSearch.controller.js')
router.get('/delemiterSearch', authoriseToken, delemiterSearchHome);
router.get('/delemiterSearch/search', authoriseToken, delemiterSearchSearch);

const { dynamicGridHome, dynamicGridQueryPost, dynamicGridQueryGet } = require('./controller/DynamicTable.controller.js')
router.get('/dynamicGrid', authoriseToken, dynamicGridHome);
router.get('/dynamicGrid/query', authoriseToken, dynamicGridQueryGet);
router.post('/dynamicGrid/query', authoriseToken, dynamicGridQueryPost);


const { jobApplicationWithoutAjaxDisplay, jobApplicationWithoutAjaxHome, jobApplicationWithoutAjaxInsert, jobApplicationWithoutAjaxInsertPost, jobApplicationWithoutAjaxUpdate, jobApplicationWithoutAjaxRecord } = require('./controller/jobApplicationWithoutAjax.controller.js')

router.get('/jobApplicationWithoutAjax/update', authoriseToken, jobApplicationWithoutAjaxUpdate);
router.get('/jobApplicationWithoutAjax/display', authoriseToken, jobApplicationWithoutAjaxDisplay);
router.get('/jobApplicationWithoutAjax/record', authoriseToken, jobApplicationWithoutAjaxRecord);
router.post('/jobApplicationWithoutAjax/insert', authoriseToken, jobApplicationWithoutAjaxInsertPost);
router.get('/jobApplicationWithoutAjax/insert', authoriseToken, jobApplicationWithoutAjaxInsert);
router.get('/jobApplicationWithoutAjax', authoriseToken, jobApplicationWithoutAjaxHome);

const { jsonPlaceHolderHome, jsonPlaceHolderPosts } = require('./controller/jsonPlaceHolder.controller.js')
router.get('/jsonPlaceHolder', authoriseToken, jsonPlaceHolderHome);
router.get('/jsonPlaceHolder/posts/:id', authoriseToken, jsonPlaceHolderPosts);

const { paginationGridHome } = require('./controller/paginationGrid.controller.js')
router.get('/paginationGrid', authoriseToken, paginationGridHome)

const { studentDetailsAttendence4march, studentDetailsClickForSearch, studentDetailsFunctionalitySearch, studentDetailsHome, studentDetailsReport, studentDetailsResult, studentDetailsResultFind, studentDetailsResultSearch, studentDetailsSearch } = require('./controller/StudentDetails.controller.js')

router.get('/studentDetails', authoriseToken, studentDetailsHome);
router.get('/studentDetails/clickForSearch', authoriseToken, studentDetailsClickForSearch);
router.get('/studentDetails/attendence4march', authoriseToken, studentDetailsAttendence4march);
router.get('/studentDetails/result', authoriseToken, studentDetailsResult);
router.get('/studentDetails/resultFind', authoriseToken, studentDetailsResultFind);
router.get('/studentDetails/resultSearch', authoriseToken, studentDetailsResultSearch);
router.get('/studentDetails/report', authoriseToken, studentDetailsReport);
router.get('/studentDetails/functionalitySearch', authoriseToken, studentDetailsFunctionalitySearch);
router.get('/studentDetails/search', authoriseToken, studentDetailsSearch);

const { authModualUpdatePassword, authModuleActivate, authModuleActive, authModuleActiveLink, authModuleCheckEmail, authModuleForgot, authModuleHome, authModuleHomePage, authModuleLoginPost, authModuleSignup, authModuleSignupPost, authModulepasswordForm } = require('./controller/authModule.controller.js')
router.get('/', authModuleHome);
router.get('/signup', authModuleSignup);
router.post('/signup', authModuleSignupPost);
router.get('/activeLink', authModuleActiveLink);
router.post('/active', authModuleActive);
router.get('/forgot', authModuleForgot);
router.post('/checkEmail', authModuleCheckEmail);
router.get('/passwordForm', authModulepasswordForm);
router.post('/updatePassword', authModualUpdatePassword);
router.get('/activate', authModuleActivate);
router.post('/login', authModuleLoginPost);
router.get('/home', authoriseToken, authModuleHomePage);

router.get('/dynamicTable', authoriseToken, (req, res) => {
  res.render('dynamicTable/dynamicTable')
})

router.get('/kukukube', authoriseToken, (req, res) => {
  res.render('kukukube/kukukube')
})

router.get('/htmlTemplate1', authoriseToken, (req, res) => {
  res.sendFile(__dirname + '/htmlTemplate/ehya/ehya.html')
})
router.get('/htmlTemplate2', authoriseToken, (req, res) => {
  res.sendFile(__dirname + '/htmlTemplate/awanHoster/awanHoster.html')
})
router.get('/htmlTemplate3', authoriseToken, (req, res) => {
  res.sendFile(__dirname + '/htmlTemplate/hirex/hirex.html')
})

router.get('/tictactoe', authoriseToken, (req, res) => {
  res.render('tictactoe/tictactoe')
})

router.get('/tableOfEvents', authoriseToken, (req, res) => {
  res.render('tableOfEvents/tableOfEvent')
})


module.exports = router