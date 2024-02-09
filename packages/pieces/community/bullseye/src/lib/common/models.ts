export type Leads = {
    status: number;
    isSuccess: boolean;
    message: null;
    data: Lead[];
    pageSize: number;
    pageNumber: number;
    total: number;
}

export type Lead = {
    id: number;
    clientId: number;
    firstName: string;
    lastName: string;
    companyName: string;
    emailAddress: string;
    phoneNumber: string;
    address1: string;
    address2: null;
    address3: null;
    address4: null;
    city: string;
    stateAbbr: string;
    countryName: string;
    internationalAddress: null;
    postalCode: string;
    comments: string;
    priorityName: string;
    leadSourceName: string;
    leadTypeName: string;
    dateCreated: Date;
    dateLastModified: Date;
    categories: any[];
    attributes: any[];
    assignments: any[];
}
