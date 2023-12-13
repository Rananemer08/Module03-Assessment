import express from 'express';

import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from '../controllers/usersController.js';

const router = Router();

router.get('/', getAllUsers); // Route to get all users
router.get('/:id', getUserById); // Route to get a user by ID
router.post('/', createUser); // Route to create a new user
router.put('/:id', updateUserById); // Route to update a user by ID
router.delete('/:id', deleteUserById); // Route to delete a user by ID

export default router;
