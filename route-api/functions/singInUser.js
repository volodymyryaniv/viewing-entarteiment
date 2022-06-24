import 'dotenv/config';
import bcrypt from 'bcrypt';
import User from '../../schemas/userSchema.js';
import Role from '../../schemas/userRoleSchema.js';

export default async function singInUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error(`User ${email} not found`);
  }
  const matchPassword = await bcrypt.compare(password, user.password);
  if (matchPassword) {
    return {
      user: {
        email: user.email,
        name: user.name,
      },
      token: user.token,
    };
  }
  throw new Error(`Wrong password!`);
}
