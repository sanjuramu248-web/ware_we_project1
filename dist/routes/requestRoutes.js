import { Router } from 'express';
import { makeRequest, getHistory } from '../controller/requestController';
const router = Router();
router.post('/request', makeRequest);
router.get('/history', getHistory);
export default router;
