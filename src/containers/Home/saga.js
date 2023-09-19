import { all, call, put, takeLatest } from "redux-saga/effects";

import request from "utils/request";

import { isArray } from "lodash";
import { getCustomers } from "./actions";

// Assume that the dataset is paginated...
export function* getCustomersRequest() {
  const BASE_URL = `https://reqres.in/api/users`;

  try {
    yield put(getCustomers.request());

    const { data, total_pages } = yield call(request, BASE_URL);

    // once we get the first dataset, request the rest of the pages concurrently...
    const theRestCalls = new Array(total_pages - 1);
    for (let i = 1; i < total_pages; i++) {
      theRestCalls[i] = call(request, `${BASE_URL}?page=${i + 1}`);
    }
    const theRestCustomersData = yield all(theRestCalls);

    // flatten the rest customers data
    const allCustomersData = [...data];
    theRestCustomersData.forEach(customersData => {
      if (customersData && isArray(customersData.data)) {
        allCustomersData.push(...customersData.data);
      }
    });

    yield put(getCustomers.success(allCustomersData));
  } catch (err) {
    yield put(getCustomers.failure(err));
  } finally {
    yield put(getCustomers.fulfill());
  }
}

export default function* dataCustomers() {
  yield takeLatest(getCustomers.TRIGGER, getCustomersRequest);
}
