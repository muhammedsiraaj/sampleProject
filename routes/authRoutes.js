const express = require('express');
const { signup, login, logout, resetPassword, authMiddleware, updateProfile, checkUserRole } = require('../controllers/authController');
const router = express.Router();

// Routes for signup, login, etc.
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/reset-password', resetPassword);
router.post('/profile-update', authMiddleware, updateProfile);
router.post('/check-user', authMiddleware, checkUserRole);

module.exports = router;
