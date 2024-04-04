
const dotenv = require('dotenv');
dotenv.config();
// router.get('/',(req,res)=>{
const jsonPlaceHolderHome = (req, res) => {
	api = process.env.API_URL;
	// console.log(api);
	res.render("jsonPlaceHolder/index.ejs")
}
// router.get('/posts/:id',(req,res)=>{
const jsonPlaceHolderPosts = (req, res) => {
	res.render("jsonPlaceHolder/comment.ejs")
}

module.exports = { jsonPlaceHolderHome, jsonPlaceHolderPosts }