import { Router } from "express";
import {postPageView, customEvent} from "./controllers/fbConversionController";
import {postGAPageView, postGAIdentity, postGATrack} from "./controllers/googleAnalyticsController";


const router = Router();

router.post('/fb/page-view', postPageView);
router.post('/fb/custom-event', customEvent);

router.post('/ga/identify', postGAIdentity);
router.post('/ga/page-view', postGAPageView);
router.post('/ga/track', postGATrack);


export default router;
