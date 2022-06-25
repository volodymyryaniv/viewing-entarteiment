import 'dotenv/config';
import bcrypt from 'bcrypt';
import User from '../../schemas/userSchema.js';
import Role from '../../schemas/userRoleSchema.js';
import signToken from './signToken.js';

export default async function singUpUser({ email, password, name, phone }) {
  console.log({ email, password, name, phone })
  const exist = await User.findOne({ email });
  if (exist) {
    throw new Error(`User with ${email} email already exists`);
  }
  const hashPasword = await bcrypt.hash(password, 5);
  const token = signToken({ email, name });
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
      roles: user.roles,
    },
    token: user.token
  }

  return userData;
}
