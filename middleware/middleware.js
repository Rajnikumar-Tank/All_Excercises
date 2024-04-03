const jwt = require('jsonwebtoken');

function authoriseToken(req,res,next){
    let token = req.cookies.token;
    // console.log(token);
    // console.log(req.cookies.token);
    if(!token){
        res.redirect('/');
        return;
    }
    try {
        const data=jwt.verify(token,process.env.SECRET);
        req.email=data.email;
        next();                     
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
}
module.exports=authoriseToken;