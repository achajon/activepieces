
import { createTrigger, TriggerStrategy, PiecePropValueSchema } from '@activepieces/pieces-framework';
import { DedupeStrategy, HttpMethod, HttpRequest, Polling, httpClient, pollingHelper } from '@activepieces/pieces-common';
import { bullseyeAuth } from '../..';
import { Lead } from "../common/models"
import dayjs from 'dayjs';

// replace auth with piece auth varible
const polling: Polling<PiecePropValueSchema<typeof bullseyeAuth>, Record<string, never>> = {
    strategy: DedupeStrategy.TIMEBASED,

    items: async ({ auth, propsValue, lastFetchEpochMS }) => {
        // implement the logic to fetch the items
        // const items = [ {id: 1, created_date: '2021-01-01T00:00:00Z'}, {id: 2, created_date: '2021-01-01T00:00:00Z'}];
        // return items.map((item) => ({
        //     epochMilliSeconds: dayjs(item.created_date).valueOf(),
        //     data: item,
        //     }));
        // }

        console.log({ lastFetchEpochMS })

        const request: HttpRequest = {
            method: HttpMethod.GET,
            url: `http://ws.bullseyelocations.com/RestLead.svc/GetLeads?ClientId=${auth.username}&ApiKey=${auth.password}&CreatedAfter=${lastFetchEpochMS === 0 ? "12/01/2023" : dayjs(lastFetchEpochMS).format("MM/DD/YYYY")}`, // 12%2F24%2F2024
        };
        console.log("My URL", request.url);
        const res = await httpClient.sendRequest(request);
        const leads: Lead[] = (res.body as Lead[]) ?? [];

        const transformDate = (stringDate: string): Date => {
            // Extract details  
            const parts = stringDate.match(/\/Date\((-?\d+)(.+?)\)/);

            if (parts !== null) {
                const millis = parts[1];
                const timezone = parts[2];

                // Parse timezone offset (in minutes)
                const timezoneOffset = Number(timezone) * 60 * 1000;

                // Create Date object with timezone offset
                return new Date(Number(millis) + timezoneOffset);
            }

            return new Date();
        }


        return leads.map((lead: Lead) => ({
            epochMilliSeconds: dayjs(transformDate(lead.DateCreated)).valueOf(),
            data: lead,
        })
        );
    }
}

export const newLeadCreated = createTrigger({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'newLeadCreated',
    auth: bullseyeAuth,
    displayName: 'new lead created',
    description: 'triggers when a new lead is created',
    props: {},
    sampleData: {},
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