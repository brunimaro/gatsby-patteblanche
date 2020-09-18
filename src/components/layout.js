import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import Header from "./header";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useGsapReveal } from "./useGsapReveal";
import { animManifeste } from "./animManifeste";

//import gsap from 'gsap';

function Layout({ children }) {
  useGsapReveal();
  animManifeste();
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-5xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="">

      <div className="max-w-5xl p-4 mx-auto text-sm infos grid grid-cols-8 gap-4">
        <div className="md:col-span-3">
          <strong>Restons connectés</strong>
          <div className="rs-footer">
           <Link to="#">Facebook</Link>
           <Link to="#">Instagram</Link>
           <Link to="#">Twitter</Link>
           </div>
        </div>
        <div className="md:col-span-3">
          <strong>Se voir en vrai</strong>
          <p className="mb-0">
          The Island - 19 Av de Toulouse<br/>
          34070 Montpellier
          </p>
          <AniLink
            className="bouton d-inline-block"
            cover
            bg="#fde2cd"
            key="Itinéraire"
            to="/"
          >
            Itinéraire
          </AniLink>
          <AniLink
            className="bouton d-inline-block ml-4"
            cover
            bg="#fde2cd"
            key="Site web du lieu"
            to="/"
          >
            Site web du lieu
          </AniLink>
        </div>
        <div className="md:col-span-2">
          <strong>Newsletter</strong>
          <div>
          <AniLink
            className="bouton d-inline-block"
            cover
            bg="#fde2cd"
            key="S'inscrire"
            to="/"
          >
            S'inscrire
          </AniLink>
          </div>
        </div>
      </div>

        <nav className="flex justify-between max-w-5xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white uppercase">
            {` `}
            <a
              className="no-underline nom-site-footer gsReveal"
              href="https://patte-blanche.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PatteBlanche
            </a>
          </p>

          <p className="text-white text-xs">
          <AniLink
            className="text-white text-xs mr-2"
            cover
            bg="#fde2cd"
            key="Mentions légales"
            to="/mentions-legales"
          >
            Mentions légales
          </AniLink>
           © 2020 PatteBlanche
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
