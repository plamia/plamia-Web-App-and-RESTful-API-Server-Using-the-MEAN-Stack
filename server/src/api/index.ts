import { Router } from 'express';
import { sampleRouter } from './sample/sample.router';
import { userRouter } from './user/user.router';

let router = Router();
router.use('/sample', sampleRouter);
router.use('/users', userRouter);
router.use('/test', sampleRouter);


export let apiRouter = router;

