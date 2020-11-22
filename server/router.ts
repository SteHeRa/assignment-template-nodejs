import express from 'express';
import cfControl from './controllers/cfApi';

const router = express.Router();

router.get('/notices', cfControl.getNotices);
export default router;
