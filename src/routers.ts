import { Router } from "express";
import {postPageView, customEvent123} from "./controllers/fbConversionController";

const router = Router();

router.post('/page-view', postPageView);
router.post('/custom-event', customEvent123);

export default router;
