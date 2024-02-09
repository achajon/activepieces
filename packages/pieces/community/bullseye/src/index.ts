
import { createPiece, OAuth2AuthorizationMethod, PieceAuth, Property } from "@activepieces/pieces-framework";
import { getNewLead } from "./lib/actions/get-new-lead"
import { newLeadCreated } from "./lib/triggers/new-lead-created";

export const bullseyeAuth = PieceAuth.CustomAuth({

  description: 'Enter custom authentication details',
  props: {
    audience: Property.ShortText({
      displayName: 'Audience',
      description: 'Enter the audience for your call',
      required: false
    }),
    client_id: Property.ShortText({
      displayName: 'Client ID',
      description: 'Enter the base URL',
      required: false,
    }),
    client_secret: PieceAuth.SecretText({
      displayName: 'Client Secret',
      description: 'Enter Client Secret',
      required: false
    }),
    access_token: PieceAuth.SecretText({
      displayName: 'Access token',
      description: 'Enter your access token',
      required: true
    }),
  },
  // Optional Validation
  validate: async ({ auth }) => {
    if (auth) {
      return {
        valid: true,
      }
    }
    return {
      valid: false,
      error: 'Invalid Api Key'
    }
  },
  required: true
})
// export const bullseyeAuth = PieceAuth.BasicAuth({
//   username: { displayName: "Client ID", description: "User your Bullseye ClientID" },
//   password: { displayName: "Bullseye Api Key", description: "User your Bullseye admin Api Key" },
//   required: true,
//   description: 'Please use your Bullseye API and Client Id as value for API Key',
// })
// export const bullseyeAuth = PieceAuth.OAuth2({
//   grantType: OAuth2GrantType.CLIENT_CREDENTIALS,
//   authUrl: "",

//   authorizationMethod: OAuth2AuthorizationMethod.BODY,
//   description: 'Please use your Bullseye API and Client Id as value for API Key',
//   tokenUrl: "https://api.bullseyelocations-staging.com/api/oauth/token",
//   scope: ["read", "write"],
//   required: true,
//   props: {
//     audience: { displayName: "Audience", description: "Your audience" }
//   }
// })

export const bullseye = createPiece({
  displayName: "Bullseye Locations",
  description: "Test piece for bullseye locations lead integration",
  auth: bullseyeAuth,
  logoUrl: "https://app.bullseyelocations-staging.com/images/admin/global/Bullseye300x300.png",
  authors: ["Alejandro Chajon"],
  actions: [getNewLead],
  triggers: [newLeadCreated],
});
