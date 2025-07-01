import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'API Estudiantes - En desarrollo', data: [] });
});

export default router; 