
import { createPiece } from "@activepieces/pieces-framework";
import { getNewLead } from "./lib/actions/get-new-lead"
import { newLeadCreated } from "./lib/triggers/new-lead-created";
import { bullseyeAuth } from "./lib/auth";
import { getLocation } from "./lib/actions/get-location";

export const bullseye = createPiece({
  displayName: "Bullseye Locations",
  description: "Test piece for bullseye locations lead integration",
  auth: bullseyeAuth,
  logoUrl: "https://app.bullseyelocations-staging.com/images/admin/global/Bullseye300x300.png",
  authors: ["Alejandro Chajon"],
  actions: [getNewLead, getLocation],
  triggers: [newLeadCreated],
});
