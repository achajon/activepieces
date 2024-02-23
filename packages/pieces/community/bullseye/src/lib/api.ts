import {
    httpClient,
    HttpMethod,
    HttpRequest,
} from '@activepieces/pieces-common';
import { BullseyeAuthType } from './auth';

export const getAuthToken = async (auth: BullseyeAuthType) => {
    const request: HttpRequest = {
        method: HttpMethod.POST,
        url: "https://api.bullseyelocations-staging.com/api/oauth/token",
        headers: {
            'Content-Type': 'application/json',
        },
        body: { ...auth, ... { grant_Type: "client_credentials" } },
    };

    const response = await httpClient.sendRequest(request);

    if (response.body['errors']) {
        throw new Error(response.body['errors'][0]['message']);
    }

    auth.accessToken = response.body['data'].accessToken;

    return response.body['data'] as BullseyeAuthType;
};
