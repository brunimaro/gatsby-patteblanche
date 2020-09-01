import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

// React Component
import Burger from '@animated-burgers/burger-slip'
// don't forget the styles
import '@animated-burgers/burger-slip/dist/styles.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"


function Header() {
  const [isOpen, toggleBurger] = useState(true);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="dark">
      <div className="flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8">
        <AniLink
          cover
          bg="#fde2cd"
          key="Agence PatteBlanche"
          to="/"
        >
          <h1 className="flex items-center nom-site no-underline">
            <span className="name-branding">
              {site.siteMetadata.title}
            </span>
          </h1>
        </AniLink>
        <nav
          className={`${
            isOpen ? `cache` : `actif`
          }`}
        >
          {[
            {
              route: `/`,
              title: `Accueil`,
            },
            {
              route: `/agence`,
              title: `L'Agence`,
            },
            {
              route: `/engagements`,
              title: `Nos engagements`,
            },
            {
              route: `/offres-accompagnement-besoins`,
              title: `Nos offres d'accompagnement / Vos besoins`,
            },
            {
              route: `/realisations`,
              title: `Réalisations`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <AniLink
              className="block text-white no-underline"
              cover
              bg="#fde2cd"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </AniLink>
          ))}
        </nav>
        <Burger
          className={`${
            isOpen ? false : 'open'
          }`}
          onClick={() => toggleBurger(!isOpen)} />
      </div>
    </header>
  );
}

export default Header;
