import fetch from 'node-fetch';
import { Request, Response } from 'express';

const cfControl = {
  getNotices: async (req: Request, res: Response) => {
    try {
      if (
        typeof req.query.from === 'string' &&
        typeof req.query.to === 'string'
      ) {
        const from = new Date(+req.query.from);
        const to = new Date(+req.query.to);
        const notices = await fetch(
          'https://www.contractsfinder.service.gov.uk/api/rest/2/search_notices/json',
          {
            method: 'post',
            body: JSON.stringify({
              searchCriteria: {
                types: ['Contract'],
                statuses: ['Open'],
                keyword: null,
                queryString: null,
                regions: null,
                postcode: null,
                radius: null,
                valueFrom: null,
                valueTo: null,
                lastNotifiableUpdateFrom: null,
                publishedFrom: from,
                publishedTo: to,
                deadlineFrom: null,
                deadlineTo: null,
                approachMarketFrom: null,
                approachMarketTo: null,
                awardedFrom: null,
                awardedTo: null,
                isSubcontract: null,
                suitableForSme: null,
                suitableForVco: null,
                awardedToSme: null,
                awardedToVcse: null,
                cpvCodes: null,
              },
              size: 1000,
            }),
            headers: { 'Content-Type': 'application/json' },
          }
        ).then((res) => res.json());
        res.status(200);
        res.send(notices.noticeList);
      } else {
        res.send([]);
      }
    } catch (err) {
      console.log('---> error getting notices from API', err);
      res.status(500);
      res.send(err);
    }
  },
};

export default cfControl;
