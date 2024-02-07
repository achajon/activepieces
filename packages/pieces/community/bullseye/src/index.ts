
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { getNewLead } from "./lib/actions/get-new-lead"
import { newLeadCreated } from "./lib/triggers/new-lead-created";

export const bullseyeAuth = PieceAuth.BasicAuth({
  username: { displayName: "Client ID", description: "User your Bullseye ClientID" },
  password: { displayName: "Bullseye Api Key", description: "User your Bullseye admin Api Key" },
  required: true,
  description: 'Please use your Bullseye API and Client Id as value for API Key',
})

export const bullseye = createPiece({
  displayName: "Bullseye Locations",
  description: "Test piece for bullseye locations lead integration",
  auth: bullseyeAuth,
  logoUrl: "https://app.bullseyelocations-staging.com/images/admin/global/Bullseye300x300.png",
  authors: ["Alejandro Chajon"],
  actions: [getNewLead],
  triggers: [newLeadCreated],
});
