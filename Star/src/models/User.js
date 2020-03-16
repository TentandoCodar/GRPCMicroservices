import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const UserSchema = mongoose.Schema({
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String,
        set: p => bcrypt.hashSync(p, 12),
        select: false
    }
})

UserSchema.methods = {
    compareHash(hash) {
        return bcrypt.compare(hash, this.password)
    },

    generateToken(user) {
        const token = jwt.sign({
            id: this.id,
            email: this.email,
            username: this.username
        }, "d0e06c3e943e4b109faa00810147a437", {
            expiresIn: 60 * 60
        })

        return token;
    }
}

export default mongoose.model('User', UserSchema)