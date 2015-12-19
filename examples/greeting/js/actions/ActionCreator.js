import { createAction } from 'redux-actions';

export const UPDATE_NAME = 'UPDATE_NAME';

export const updateName = createAction(UPDATE_NAME, (name) => name);
