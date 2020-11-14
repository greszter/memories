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

export const getUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const dbUser = await User.findOne({ username: username });
    const dbPassword = dbUser ? dbUser.password : '';
    const passwordCheck = await bcrypt.compare(password, dbPassword);

    const errorMessage = {
      status: 0,
      message: '',
    };

    if (!dbUser) {
        errorMessage.status = 404;
        errorMessage.message = 'User does not exist.';
        return errorMessage;
    } else if (!passwordCheck) {
      errorMessage.status = 400;
      errorMessage.message = 'Incorrect password.';
      return errorMessage;
    } else if (!username.length && !password.length) {
      errorMessage.status = 400;
      errorMessage.message = 'Username and password cannot be empty.';
      return errorMessage;
    } else if (!username.length) {
      errorMessage.status = 400;
      errorMessage.message = 'Username cannot be empty.';
      return errorMessage;
    } else if (!password.length) {
      errorMessage.status = 400;
      errorMessage.message = 'Password cannot be empty.';
      return errorMessage;
    } else if (dbUser && passwordCheck) {
      return { status: 200, message: 'Successful login.' };
    }
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}