
import { createTrigger, TriggerStrategy, PiecePropValueSchema  } from '@activepieces/pieces-framework';
import { DedupeStrategy, HttpMethod, HttpRequest, Polling, httpClient, pollingHelper } from '@activepieces/pieces-common';
import { gelatoAuth } from '../..';
import dayjs from 'dayjs';

// replace auth with piece auth varible
const polling: Polling< PiecePropValueSchema<typeof gelatoAuth>, Record<string, never> > = {
    strategy: DedupeStrategy.TIMEBASED,
    items: async ({ auth, propsValue, lastFetchEpochMS }) => {
        // implement the logic to fetch the items
        const request: HttpRequest = {
            method: HttpMethod.GET,
            url: 'https://cloud.activepieces.com/api/v1/webhooks/aHlEaNLc6vcF1nY2XJ2ed/sync',
            headers: {
                authorization: auth,
            }
        }
        const res = await httpClient.sendRequest(request);
        return res.body['flavors'].map((flavor: string) => ({
            epochMilliSeconds: dayjs().valueOf(),
            data: flavor
        }));
        /*const items = [ {id: 1, created_date: '2021-01-01T00:00:00Z'}, {id: 2, created_date: '2021-01-01T00:00:00Z'}];
        return items.map((item) => ({
            epochMilliSeconds: dayjs(item.created_date).valueOf(),
            data: item,
            }));
        }*/
    }
}

export const newFlavorCreated = createTrigger({
// auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
auth: gelatoAuth,
name: 'newFlavorCreated',
displayName: 'new flavor created',
description: 'triggers when a new icecream flavor is created',
props: {},
sampleData: {
    "flavors": [
        {
            "gelato": "Minty Marvel"
        },
        {
            "gelato": "Peanut Butter Party"
        },
        {
            "gelato": "Chai Tea Infusion"
        },
        {
            "gelato": "Cookie Dough Delight"
        }
    ]
},
type: TriggerStrategy.POLLING,
async test(context) {
    const { store, auth, propsValue } = context;
    return await pollingHelper.test(polling, { store, auth, propsValue });
},
async onEnable(context) {
    const { store, auth, propsValue } = context;
    await pollingHelper.onEnable(polling, { store, auth, propsValue });
},

async onDisable(context) {
    const { store, auth, propsValue } = context;
    await pollingHelper.onDisable(polling, { store, auth, propsValue });
},

async run(context) {
    const { store, auth, propsValue } = context;
    return await pollingHelper.poll(polling, { store, auth, propsValue });
},
});