import {Request, Response} from 'express';

import SegmentPageView from '../types/SegmentPageView';

import Analytics, { PageData } from 'analytics';
// import googleAnalytics from '@analytics/google-analytics';
const googleAnalytics = require('@analytics/google-analytics').default;


const analytics = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      trackingId: process.env.GA4_ID
    })
  ]
});

type ResponsePayload = {
    message: any | undefined;
    error: boolean | undefined;
    status: number;
}

const postGAPageView = async (req: Request, res: Response) => {
    let payload: ResponsePayload = {
        message: '',
        error: false,
        status: 200
    };

    try {
        const pgData: PageData<string> = req.body;
        console.log(pgData.);
        await analytics.page(pgData);
        // console.log(result);
        payload.message = 'PageData sent SUCCESS...';
    } catch (error) {
        // console.log(error);
        payload.message = error;
        payload.status = 400;
        payload.error = true;
    }

    console.log(payload);

    return res
            .status(payload.status)
            .json(payload);
}

const postGAIdentity = (req: Request, res: Response) => {

}

const postGATrack = (req: Request, res: Response) => {

}


export {
    postGAPageView,
    postGAIdentity,
    postGATrack
}
