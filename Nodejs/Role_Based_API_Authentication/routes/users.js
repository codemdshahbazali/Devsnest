const router = require('express').Router();
//Bring in registeration function
const {
  userRegister,
  userLogin,
  authenticateJWT,
  serializeUser,
  checkRole,
} = require('./../utils/Auth');

// User Registration Route
router.post('/register-user', async (req, res) => {
  await userRegister(req.body, 'user', res);
});

// Admin Registration Route
router.post('/register-admin', async (req, res) => {
  await userRegister(req.body, 'admin', res);
});

// Super Admin Regsitration Route
router.post('/register-super-admin', async (req, res) => {
  await userRegister(req.body, 'superadmin', res);
});

// Users Login Route
router.post('/login-user', async (req, res) => {
  await userLogin(req.body, 'user', res);
});

// Admin Login Route
router.post('/login-admin', async (req, res) => {
  await userLogin(req.body, 'admin', res);
});

// Super Admin Login Route
router.post('/login-super-admin', async (req, res) => {
  await userLogin(req.body, 'superadmin', res);
});

// Profile Route
router.get('/profile', authenticateJWT, async (req, res) => {
  res.status(200).json(serializeUser(req.user));
  // res.status(200).json(req.user);
});

// Users Protected Route
router.get(
  '/user-protected',
  authenticateJWT,
  checkRole(['user']),
  async (req, res) => {
    res.json({
      message: 'Hello User',
    });
  }
);

// Admin Protected Route
router.get(
  '/admin-protected',
  authenticateJWT,
  checkRole(['admin']),
  async (req, res) => {
    res.json({
      message: 'Hello Admin',
    });
  }
);

// Super Admin Protected Route
router.get(
  '/super-admin-protected',
  authenticateJWT,
  checkRole(['superadmin']),
  async (req, res) => {
    res.json({
      message: 'Hello Super Admin',
    });
  }
);

// Admi and Super Admin Protected Route
router.get(
  '/admin-super-admin-protected',
  authenticateJWT,
  checkRole(['superadmin', 'admin']),
  async (req, res) => {
    res.json({
      message: 'Hello Admin and Super Admin',
    });
  }
);

module.exports = router;
