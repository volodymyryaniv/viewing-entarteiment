import 'dotenv/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../schemas/userSchema.js';
import Role from '../../schemas/userRoleSchema.js';

export default async function singUpUser({ email, password, name, phone }) {
  console.log({ email, password, name, phone })
  const exist = await User.findOne({ email });
  if (exist) {
    throw new Error(`User with ${email} email already exists`);
  }
  const hashPasword = await bcrypt.hash(password, 5);
  const token = jwt.sign({ email, name }, process.env.JWT_ACCESS_TOKEN_SECRET, {expiresIn: '5h'});
  const role = await Role.findOne({ value: 'USER' });
  const user = await new User({
    email,
    name,
    phone,
    token,
    roles: role._id,
    password: hashPasword,
  }).save();

  const userData = {
    user: {
      email: user.email,
      name: user.name,
    },
    token: user.token
  }

  return userData;
}
