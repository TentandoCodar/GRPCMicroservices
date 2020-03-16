import HidraService from '../services/hidra';
import { promisify } from 'util';


class SessionController {
    async store(req,res) {
        const {user, password} = req.body;
        /*const response = await promisify(HidraService.loginUser)(
            {user, password}
        );*/
        let response;
        HidraService.loginUser({user, password}, (err, resp) => {
            if(err) {
                console.log(err)
            }
            else {
                return res.json(resp);
            }
        } )

        
    }
}

export default new SessionController;