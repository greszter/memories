import { getPosts, createPost, updatePost, deleteSelectedPost, likePost } from '../services/postService.js';

export const get = async (req, res) => {
  const data = await getPosts(req, res);

  if (data.status === 400) {
    res.status(400).json(data);
  } else {
    res.status(201).json(data);
  }
}

export const create = async (req, res) => {
  const data = await createPost(req, res);

  if (data.status === 400) {
    res.status(400).json(data);
  } else if (data.status === 409) {
    res.status(409).json(data);
  } else if (data.status === 201) {
    res.status(201).json(data);
  } else {
    res.status(409);
  }
}

export const update = async (req, res) => {
  const data = await updatePost(req, res);

  if (data.status === 404) {
    res.status(409).json(data);
  } else {
    res.status(200).json(data);
  }
}

export const deletePost = async (req, res) => {
  const data = await deleteSelectedPost(req, res);

  if (data.status === 404) {
    res.status(404).json(data);
  } else {
    res.status(200).json(data);
  }
}

export const like = async (req, res) => {
  const data = await likePost(req, res);

  if (data.status === 404) {
    res.status(404).json(data);
  } else {
    res.status(200).json(data);
  }
}
