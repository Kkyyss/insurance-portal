import { isArray } from "lodash";
export function filterByCustomerFirstNameAndLastName(
  customers = [],
  firstNameFilter = null,
  lastNameFilter = null
) {
  if (!isArray(customers)) return [];

  if (!firstNameFilter && !lastNameFilter) return customers;

  return customers.filter(
    customer =>
      customer?.first_name[0].toUpperCase() === firstNameFilter.toUpperCase() ||
      customer?.last_name[0].toUpperCase() === lastNameFilter?.toUpperCase()
  );
}
