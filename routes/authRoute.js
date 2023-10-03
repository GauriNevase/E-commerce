import express from 'express';
import {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
} from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Register Route (POST)
router.post('/register', registerController);

// Login Route (POST)
router.post('/login', loginController);

//forgot password
router.post('/forgot-password',forgotPasswordController)

// Test Route (GET)
router.get('/test', requireSignIn, isAdmin, testController);

// Protected Route (GET)
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).json({ ok: true });
});

export default router;
