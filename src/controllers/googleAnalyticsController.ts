import {Request, Response} from 'express';

import Analytics from 'analytics';
// import googleAnalytics from '@analytics/google-analytics';
const googleAnalytics = require('@analytics/google-analytics');


const analytics = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      trackingId: process.env.GA4_ID
    })
  ]
});

const postGAPageView = (req: Request, res: Response) => {

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
