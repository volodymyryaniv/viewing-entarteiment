import 'dotenv/config';
import jwt from 'jsonwebtoken';
import User from '../../schemas/userSchema.js';

export default async function getCurrentUser({token}) {
  const user = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
  const {name, email, roles} = await User.findOne({email: user.email});
  return {user:{name, email, roles}, token};
}