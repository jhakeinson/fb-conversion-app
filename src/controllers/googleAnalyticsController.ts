import {Request, Response} from 'express';

import GAPageData from '../types/GAPageData';
import GAIdentifyData from '../types/GAIdentifyData';

import Analytics, { PageData } from 'analytics';
// import googleAnalytics from '@analytics/google-analytics';
const googleAnalytics = require('@analytics/google-analytics').default;


const analytics = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      trackingId: process.env.UA_ID
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

    const pgData: GAPageData = req.body;

    try {
        console.log(pgData);
        await analytics.page({
            href: pgData.href,
            path: pgData.href,
            title: pgData.title,
            search: pgData.search_string,
            width: pgData.screen_width,
            height: pgData.screen_height
        });

        payload.message = 'PageData sent SUCCESS...';
    } catch (error) {
        // console.log(error);
        payload.message = error;
        payload.status = 400;
        payload.error = true;
    }

    return res
            .status(payload.status)
            .json(payload);
}

const postGAIdentify = async (req: Request, res: Response) => {
    let payload: ResponsePayload = {
        message: '',
        error: false,
        status: 200
    };

    console.log(req.body);

    const idData: GAIdentifyData = req.body;

    await analytics.identify(idData.userId, {
        email: idData.traits.em,
        first_name: idData.traits.fn,
        last_name: idData.traits.ln,
        phone: idData.traits.ph,
        public_ip: idData.traits.client_ip_address,
        user_agent: idData.traits.client_user_agent
    })
    .catch(error => {
        payload.message = error;
        payload.status = 400;
        payload.error = true;
    });

    if(!payload.error) {
        payload.message = "IdentifyData sent SUCCESS...";
    }

    return res
        .status(payload.status)
        .json(payload);
}

const postGATrack = (req: Request, res: Response) => {

}


export {
    postGAPageView,
    postGAIdentify,
    postGATrack
}
