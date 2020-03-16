import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import PurchaseController from './controllers/PurchaseController';
const router = Router();

router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);
router.get('/users/purchases/:id', PurchaseController.showByUser);

router.get('/purchases/:id', PurchaseController.show);
router.post('/purchases', PurchaseController.store);


export default router;