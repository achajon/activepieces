import { createAction, Property } from '@activepieces/pieces-framework';
import { httpClient, HttpMethod } from '@activepieces/pieces-common';
import { bullseyeAuth } from '../..';

export const getNewLead = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'getNewLead',
  displayName: 'get new lead',
  auth: bullseyeAuth,
  description: 'Get recently created leads',
  props: {},
  async run(context) {
    const res = await httpClient.sendRequest<string[]>({
      method: HttpMethod.GET,
      url: "http://pending.com"
      //url: `http://ws.bullseyelocations.com/RestLead.svc/GetLeads?ClientId=${context.auth.username}&ApiKey=${context.auth.password}&CreatedAfter=12%2F24%2F2023`,
    });
    return res.body;
  },
});
