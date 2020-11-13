import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
  const user = req.body;

  try {
    const dbUser = await User.findOne({ username: user.username });

    const errorMessage = {
      status: 0,
      message: '',
    };

    if (dbUser !== null) {
      errorMessage.status = 409;
      errorMessage.message = 'Username is already taken.';
      return errorMessage;
    } else if (!user.username.length && !user.password.length) {
      errorMessage.status = 400;
      errorMessage.message = 'Username and password cannot be empty.';
      return errorMessage;
    } else if (!user.username.length) {
      errorMessage.status = 400;
      errorMessage.message = 'Username cannot be empty.';
      return errorMessage;
    } else if (!user.password.length) {
      errorMessage.status = 400;
      errorMessage.message = 'Password cannot be empty.';
      return errorMessage;
    } else {
      const password = await bcrypt.hash(user.password, 10);
      const newUser = new User({ username: user.username, password: password});

      await newUser.save()
      return { status: 201, message: 'Congratulations! You registered successfully.' };
    }
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}