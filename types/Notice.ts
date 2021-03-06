export type notice = {
  score: number;
  item: {
    id: string;
    parentId: string | null;
    noticeIdentifier: string;
    title: string;
    description: string;
    cpvDescription: string;
    cpvDescriptionExpanded: string;
    publishedDate: Date;
    deadlineDate: Date;
    awardedDate: Date | null;
    awardedValue: number;
    awardedSupplier: string | null;
    approachMarketDate: Date | null;
    valueLow: number;
    valueHigh: number;
    postcode: string;
    coordinates: string;
    isSubNotice: boolean;
    noticeType: string;
    noticeStatus: string;
    isSuitableForSme: boolean;
    isSuitableForVco: boolean;
    awardedToSme?: boolean;
    awardedToVcse?: boolean;
    lastNotifableUpdate: Date | null;
    organisationName: string;
    sector: string;
    cpvCodes: string;
    cpvCodesExtended: string;
    region: string;
    regionText: string;
    start: Date;
    end: Date;
  };
};
