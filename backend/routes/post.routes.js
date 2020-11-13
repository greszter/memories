import express from 'express';

import { create, get, update, deletePost, like } from '../controllers/postController.js';

const router = express.Router();

router.get('/', get);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', deletePost);
router.patch('/:id/like', like);

export default router;