import express from 'express';

import { create, get, update, deletePost, like } from '../controllers/postController.js';

const router = express.Router();

router.get('/', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deletePost);
router.put('/:id/like', like);

export default router;