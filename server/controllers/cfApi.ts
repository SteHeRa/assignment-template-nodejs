import fetch from 'node-fetch';
import { Request, Response } from 'express';

const cfControl = {
  getNotices: async (req: Request, res: Response) => {
    const { from, to } = req.query; //range of dates we want to find notices for
    try {
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
      res.send(notices.noticeList);
    } catch (err) {
      console.log('---> error getting notices from API', err);
      res.status(500);
      res.send(err);
    }
  },
};

export default cfControl;
