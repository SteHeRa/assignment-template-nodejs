export type searchCriteria = {
  searchCriteria: {
    types: ('Contract' | 'Pipeline' | 'PreProcurement')[];
    statuses: ('Open' | 'Closed' | 'Withdrawn' | 'Awarded' | 'Draft')[];
    keyword: string | null;
    queryString: string | null;
    regions: string | null;
    postcode: string | null;
    radius: number | null;
    valueFrom: number | null;
    valueTo: number | null;
    lastNotifiableUpdateFrom: Date | null;
    publishedFrom: Date | null;
    publishedTo: Date | null;
    deadlineFrom: Date | null;
    deadlineTo: Date | null;
    approachMarketFrom: Date | null;
    approachMarketTo: Date | null;
    awardedFrom: Date | null;
    awardedTo: Date | null;
    isSubcontract: boolean | null;
    suitableForSme: boolean | null;
    suitableForVco: boolean | null;
    awardedToSme: boolean | null;
    awardedToVcse: boolean | null;
    cpvCodes: string[] | null;
  };
  size: number;
};
