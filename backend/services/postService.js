import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  const postMessages = await PostMessage.find();

  if (!postMessages.length) {
    return { status: 400, message: 'There are no posts yet'}
  } else {
    return postMessages;
  }
}

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save()
    return { newPost, status: 201 };
  } catch (error) {
    return { status: 409, message: error };
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return { status: 404, message: 'No post with that id' };
  } else {
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    return updatedPost;
  }
}

export const deleteSelectedPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { status: 404, message: 'No post with that id' };
  } else {
    await PostMessage.findByIdAndRemove(id);
    return { message: 'Post deleted' };
  }

}

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { status: 404, message: 'No post with that id' };
  } else {
    const post = await PostMessage.findById(id);
    const likedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    return likedPost;
  }
}