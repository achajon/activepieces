
import { createPiece } from "@activepieces/pieces-framework";
import { getNewLead } from "./lib/actions/get-new-lead"
import { newLeadCreated } from "./lib/triggers/new-lead-created";
import { bullseyeAuth } from "./lib/auth";

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
