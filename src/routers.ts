import { Router } from "express";
import {postPageView, customEvent} from "./controllers/fbConversionController";

const router = Router();

router.post('/page-view', postPageView);
router.post('/custom-event', customEvent);

export default router;
