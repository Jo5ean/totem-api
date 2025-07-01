import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API Facultades - En desarrollo',
    data: []
  });
});

export default router; 