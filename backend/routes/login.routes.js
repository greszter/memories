import express from 'express';

import { get } from '../controllers/userController.js';

const router = express.Router();

router.get('/', get);

export default router;