import { createAction, Property } from '@activepieces/pieces-framework';

export const addNewLocation = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'addNewLocation',
  displayName: 'add new location',
  description: 'Add a new location, to your account',
  props: {},
  async run() {
    // Action logic here
  },
});
