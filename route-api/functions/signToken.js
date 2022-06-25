import 'dotenv/config';
import jwt from 'jsonwebtoken';

export default function signToken ({email, name}) {
  const token = jwt.sign({ email, name }, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: '1h',
  });
  
  return token;
};
