import { Router } from "express";
import {postPageView, customEvent} from "./controllers/fbConversionController";
import {postGAPageView, postGAIdentify, postGATrack} from "./controllers/googleAnalyticsController";
import { userLogIn, userSignUp } from "./controllers/authController";
import { verifyToken } from "./middlewares/auth";


const router = Router();

router.post('/login', userLogIn);
router.post('/signup', userSignUp);

router.post('/fb/page-view', postPageView);
router.post('/fb/custom-event', customEvent);

router.post('/ga/identify', postGAIdentify);
router.post('/ga/page-view', [verifyToken], postGAPageView);
router.post('/ga/track', postGATrack);




export default router;
