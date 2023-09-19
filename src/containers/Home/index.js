import PropTypes from "prop-types";
import { memo, useEffect } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { useInjectReducer } from "utils/inject-reducer";
import { useInjectSaga } from "utils/inject-saga";

import Customers from "components/Customers";
import Layout from "components/Layout";

import reducer from "./reducer";
import saga from "./saga";
import { selectCustomers } from "./selectors";

import { getCustomers } from "./actions";

export function Home({ getCustomers, customersData }) {
  useInjectSaga({ key: "customers", saga });
  useInjectReducer({ key: "customers", reducer });

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Layout>
      <Customers onGetCustomers={getCustomers} data={customersData} />
    </Layout>
  );
}

const mapStateToProps = createStructuredSelector({
  customersData: selectCustomers()
});

export function mapDispatchToProps(dispatch) {
  return { getCustomers: () => dispatch(getCustomers()) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Home.propTypes = {
  customersData: PropTypes.object,
  getCustomers: PropTypes.func
};

export default compose(withConnect, memo)(Home);
