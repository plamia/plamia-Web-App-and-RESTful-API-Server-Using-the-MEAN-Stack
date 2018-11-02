import { Router } from 'express';
import { userController } from './user.controller';

let router = Router();

router.route('/all').get(userController.get);
router.route('/:id').get(userController.getById).put(userController.put);
// router.route('/:id').put(userController.put);
    

export let userRouter = router;