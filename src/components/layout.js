import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import AniLink from "gatsby-plugin-transition-link/AniLink";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-5xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="">
        <nav className="flex justify-between max-w-5xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white uppercase">
            {` `}
            <a
              className="no-underline nom-site-footer"
              href="https://patte-blanche.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PatteBlanche
            </a>
          </p>
          <AniLink
            className="text-white text-xs"
            cover
            bg="#fde2cd"
            key="Mentions légales"
            to="/mentions-legales"
          >
            Mentions légales
          </AniLink>
          <p className="text-white text-xs">© 2020 PatteBlanche</p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
