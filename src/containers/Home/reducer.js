import { produce } from "immer";

import { getCustomers } from "./actions";

export const initialState = {
  loading: false,
  fetched: false,
  error: null,
  customers: []
};

const customersReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case getCustomers.REQUEST:
        draft.loading = true;
        break;

      case getCustomers.SUCCESS:
        draft.loading = false;
        draft.fetched = true;
        draft.customers = payload;
        break;

      case getCustomers.FAILURE:
        draft.loading = false;
        draft.fetched = false;
        draft.error = payload;
        break;
    }
  });

export default customersReducer;
