const User = require('../models/User');

// Get User Profile
exports.getUserProfile = async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json(updatedUser);
};

// Delete User Account
exports.deleteUserAccount = async (req, res) => {
    await User.findByIdAndDelete(req.user.id);
    res.json({ message: 'User deleted' });
};

// Profile Update
exports.updateProfile = async (req, res) => {
    const { username, role } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.user.id, { username, role }, { new: true });
    res.json(updatedUser);
};

// Check User Role
exports.checkUserRole = (req, res) => {
    res.json({ role: req.user.role });
};
