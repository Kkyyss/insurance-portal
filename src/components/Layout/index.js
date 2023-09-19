import PropTypes from "prop-types";

import Footer from "components/Footer";
import Header from "components/Header";

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
