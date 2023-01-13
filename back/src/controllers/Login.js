
import jwt from 'jsonwebtoken'
import {CUSTOM_PRIVATE_KEY} from '../auth/private_key.js';
import User from '../models/User.js';

export const Login = {
    login: async (req, res) => {
      
        User.findOne({ where: { pseudo: req.body.username } })
            .then((user) => {
                if (!user) {
                    const message = "L'utilisateur demandé n'existe pas."
                    return res.status(404).json({ message })
                }
                console.log(user)
                if (req.body.password !== user.password) {
                    const message = 'Le mot de passe est incorrect'
                    return res.status(401).json({ message })

                }
    // JWT
                const token = jwt.sign(
                 { userId: user.id },
                 CUSTOM_PRIVATE_KEY,
                { expiresIn: '24h' }
                )
      
                const message = `L'utilisateur a été connecté avec succès`
                return res.json({ message, data: user, token })
            })
            .catch((error) => {
                const message =
                    "L'utilisateur n'as pas pu se connecter. Réessayez dans quelques instants."
                return res.json({ message, data: error })
            })
   
}
}
