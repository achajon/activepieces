import { createAction, Property } from '@activepieces/pieces-framework';

export const updateALocation = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'updateALocation',
  displayName: 'update a location',
  description: 'Update a location, in your account',
  props: {},
  async run() {
    // Action logic here
  },
});
