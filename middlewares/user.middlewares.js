function usermiddleware(req,res,next){
    const token = req.headers.token;
}

module.exports={
    usermiddleware: usermiddleware
}