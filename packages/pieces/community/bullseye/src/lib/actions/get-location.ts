import { createAction, Property } from '@activepieces/pieces-framework';
import { httpClient, HttpMethod } from '@activepieces/pieces-common';
import { bullseyeAuth } from '../auth';

const baseurl = "https://ws.bullseyelocations-staging.com"

export const getLocation = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'getLocation',
  displayName: 'Get location',
  auth: bullseyeAuth,
  description: 'Get location information by id or thirdparty id',
  props: {
    locationId: Property.Number({
      displayName: 'Location Id',
      defaultValue: 5224023,
      description:
        "The location id you want to get",
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const res = await httpClient.sendRequest<string[]>({
      method: HttpMethod.GET,
      url: `${baseurl}/RestLocation.svc/GetLocation?ClientId=${auth.access_token}&ApiKey=${auth.access_token}&locationid=${propsValue.locationId}`,
    });
    return res.body;
  },
});
