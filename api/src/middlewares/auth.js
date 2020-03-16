import HidraService from '../services/hidra';
class AuthMiddleware {
    attempt(req,res,next) {
        const {user, password} = req.body;
        /*const response = await promisify(HidraService.loginUser)(
            {user, password}
        );*/
        HidraService.loginUser({user, password}, (err, resp) => {
            if(err) {
                console.log(err)
            }
            else {
                return res.json(resp);
            }
        })
    }
}

export default new AuthMiddleware;