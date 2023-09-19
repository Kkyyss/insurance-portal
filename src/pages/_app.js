import React from "react";

import { SessionProvider } from "next-auth/react";
import App from "next/app";
import Head from "next/head";
import { Provider as ReduxProvider } from "react-redux";

import withReduxStore from "utils/with-redux-store";

import "@typefaces-pack/typeface-inter";
import "fontsource-metropolis";

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>Insurance Portal</title>
        </Head>

        <ReduxProvider store={reduxStore}>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ReduxProvider>
      </React.StrictMode>
    );
  }
}

export default withReduxStore(Srr);
