import express from 'express';

import isAuthenticated from '../security/isAuthenticated.security'
import * as usersController from '../controllers/users.controller';

const router = express.Router();

router.use('/', isAuthenticated);
// Users
router.get('/users', usersController.index)
router.post('/users', usersController.create)
router.delete('/users', usersController.remove)
router.put('/users', usersController.update)

export default router



