import { createRoutine } from "redux-saga-routines";

import { GET_CUSTOMERS } from "./constants";

export const getCustomers = createRoutine(GET_CUSTOMERS);
