import HidraService from '../services/hidra';
import {promisify} from 'util';
class UserController {
    async show(req,res) {
        const {id} = req.params;
        console.log(id)

        HidraService.getUserById({id}, (err, request) => {
            if (err) {
                return res.json(err);
            }
            return res.json(request);
        })
    }

    async session(req,res) {

    }

    async store(req,res) {
        const {email, username, password} = req.body;
        HidraService.registerUser({user: {
            email,
            username,
            password
        }}, (err, request) => {
            if (err) {
                console.log(err)
            }
            else {
                return res.json(request);
            }
        })
    }
}

export default new UserController;