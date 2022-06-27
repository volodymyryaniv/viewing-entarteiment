import 'dotenv/config';
import bcrypt from 'bcrypt';
import User from '../../schemas/userSchema.js';
import signToken from './signToken.js';

export default async function singInUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error(`User ${email} not found`);
  }
  const matchPassword = await bcrypt.compare(password, user.password);
  const token = signToken({ email, name: user.name });
  await User.findByIdAndUpdate({ _id: user._id }, { token });

  if (matchPassword) {
    return {
      user: {
        email: user.email,
        name: user.name,
        roles: user.roles,
      },
      token: user.token,
    };
  }
  throw new Error(`Wrong password!`);
}
