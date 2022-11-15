import { MDXProvider } from "@mdx-js/react";
import { inject } from "@vercel/analytics/*";
import React from "react";
import Footer from "./Footer";
import mdxComponent from "./mdx";
import Navigation from "./Navigation";
import Newsletter from "./Newsletter";

const Layout = ({ title, children, location, background = "" }) => {

  inject();

  return (
    <div className={`overflow-x-hidden ${background}`}>
      <Navigation title={title} location={location} />
      <MDXProvider components={mdxComponent}>
        <main>{children}</main>
      </MDXProvider>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
