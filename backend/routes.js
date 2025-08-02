
const express = require('express');
const router = express.Router();

const certificateController = require('./controllers/certificateController');
const blogController = require('./controllers/blogController');
const mentorController = require('./controllers/mentorController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const courseController = require('./controllers/courseController');
const paymentController = require('./controllers/paymentController');
const chatController = require('./controllers/chatController');
const analyticsController = require('./controllers/analyticsController');

// Certificate Verification
router.post('/api/certificate/verify', certificateController.verifyCertificate);
// Blogs
router.get('/api/blogs', blogController.getBlogs);
// Mentors
router.get('/api/mentors', mentorController.getMentors);
// Users
router.get('/api/users', userController.getUsers);

// Auth
router.post('/api/auth/login', authController.login);
router.post('/api/auth/signup', authController.signup);

// Courses
router.get('/api/courses', courseController.getCourses);

// Payment
router.post('/api/payment', paymentController.pay);

// Chat
router.get('/api/chat/messages', chatController.getMessages);
router.post('/api/chat/send', chatController.sendMessage);

// Analytics
router.get('/api/analytics', analyticsController.getStats);

module.exports = router;
