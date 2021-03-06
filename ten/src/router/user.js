const loginhandler = require('../controller/user');
const { SuccessMedel, ErrorModel } = require('../model/resModel');

const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString();
} 

const handleUserRouter = (req, res) => {
  const method = req.method;

  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body;
    const result = loginhandler(username, password);
    return result.then(data => {
      if(data.username) {
        res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
        return new SuccessMedel()
      };
      return new ErrorModel('登陆失败')
    })
  }

  if(method === 'GET' && req.path === '/api/user/login-test'){
    if(req.cookie.username){
      return Promise.resolve(new SuccessMedel())
    }else{
      return Promise.resolve(new ErrorModel('尚未登陆'))
    }
  }
}

module.exports = handleUserRouter;