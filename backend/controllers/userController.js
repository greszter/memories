import { createUser } from '../services/userService.js';

export const create = async (req, res) => {
  const data = await createUser(req, res);

  if (data.status === 400) {
    res.status(400).json(data);
  } else if (data.status === 409) {
    res.status(409).json(data);
  } else if (data.status === 201) {
    res.status(201).json(data);
  } else {
    res.status(500);
  }
}
