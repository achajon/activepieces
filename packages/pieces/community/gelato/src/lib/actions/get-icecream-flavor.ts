import { createAction, Property, PieceAuth } from '@activepieces/pieces-framework';
import { HttpMethod, httpClient } from '@activepieces/pieces-common';
import { gelatoAuth } from '../..';

export const getIcecreamFlavor = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'getIcecreamFlavor',
  auth: gelatoAuth,
  displayName: 'get icecream flavor',
  description: 'fetches random icecream flavor',
  props: {},
  async run(context) {
    const res = await httpClient.sendRequest<string[]>({
      method: HttpMethod.GET,
      url: 'https://cloud.activepieces.com/api/v1/webhooks/RGjv57ex3RAHOgs0YK6Ja/sync',
      headers: {
        Authorization: context.auth, // Pass API key in headers
      }
    });

    return res.body;
  },
});
