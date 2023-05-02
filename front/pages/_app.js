import React from "react";
import propTypes from "prop-types";
import Head from 'next/head';
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>Node Bird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
