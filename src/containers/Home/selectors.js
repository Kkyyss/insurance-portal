import { createSelector } from "reselect";

import { initialState } from "./reducer";

const selectCustomersDomain = state => state.customers || initialState;

const selectCustomers = () =>
  createSelector(selectCustomersDomain, subState => subState);

export { selectCustomers, selectCustomersDomain };
