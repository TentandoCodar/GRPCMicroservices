import User from './models/User';

export default {
    async getUserById(call, callback) {
        const { id } = call.request;
        console.log(id);
        
        const user = await User.findById(id);

        return callback(null, {user})
    },

    async registerUser(call, callback) {
        const { email, username, password } = call.request.user;
        const user = await User.create({
            email,
            username,
            password
        })

        return callback(null, {user});
    },

    async loginUser(call, callback) {
        console.log(call.request);
        const { user, password } = call.request;

        const findedUser = await User.findOne({
            $or: [
                {email: user},
                {username: user}
            ]
        })

        console.log("Finded one")
        
        if(!findedUser) {
            console.log("Finded one")
            return callback({error: 'User not found'});
        }

        

        if(!findedUser.compareHash(password)) {
            return callback({error: 'Invalid credentials'})
        }

        const token = findedUser.generateToken();

        return callback(null, {token})
    }
}