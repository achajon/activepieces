import {
    PieceAuth,
    Property
} from '@activepieces/pieces-framework';
import { getAuthToken } from './api';

export type BullseyeAuthType = {
    audience: string;
    client_id: string;
    client_secret: string;
    accessToken?: string;
};

export const bullseyeAuth = PieceAuth.OAuth2({
    authUrl: "https://api.bullseyelocations-staging.com/api/oauth/token",
    required: true,
    tokenUrl: "",
    scope: [""],
})

/*export const bullseyeAuth = PieceAuth.CustomAuth({
    description: 'Enter custom authentication details',
    props: {
        audience: Property.ShortText({
            displayName: 'Audience',
            description: 'Enter the audience for your call',
            required: true
        }),
        client_id: Property.ShortText({
            displayName: 'Client ID',
            description: 'Enter the base URL',
            required: true,
        }),
        client_secret: PieceAuth.SecretText({
            displayName: 'Client Secret',
            description: 'Enter Client Secret',
            required: true
        })
    },
    // Optional Validation
    validate: async ({ auth }) => {
        try {
            await validateAuth(auth);
            return {
                valid: true,
            };
        } catch (e) {
            return {
                valid: false,
                error: (e as Error)?.message,
            };
        }
    },
    required: true,
});*/

const validateAuth = async (auth: BullseyeAuthType) => {
    if (auth.client_id && auth.client_secret) {
        return;
    }

    const response = await getAuthToken(auth);

    if (!response.accessToken) {
        throw new Error(
            'Authentication failed. Please check your credentials and try again.'
        );
    }
};
