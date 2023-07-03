import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ result: 'Hello World' });
});

export default router;
