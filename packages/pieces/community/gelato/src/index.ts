
    import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { getIcecreamFlavor } from "./lib/actions/get-icecream-flavor";
import { newFlavorCreated } from "./lib/triggers/new-flavor-created";
    
    export const gelatoAuth = PieceAuth.SecretText({
      displayName: 'Bullseye Api Key',
      required: true,
      description: 'Please use **test-key** as value for API Key',
    })

    export const gelato = createPiece({
      displayName: "Gelato",
      logoUrl: "https://cdn.activepieces.com/pieces/gelato.png",
      authors: [],
      auth: gelatoAuth,
      // minimumSupportedRelease: '0.9.0',
      actions: [getIcecreamFlavor],
      triggers: [newFlavorCreated],
    });
    