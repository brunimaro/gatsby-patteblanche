import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
//import fondNuage from "../images/fond-nuage.jpg";

const EngagementsPage = ({ data }) => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="PatteBlanche - Nos engagements"
    />
    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h1>Engagements</h1>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="md:w-1/2">
          <Img fluid={data.nuage.childImageSharp.fluid} />
        </div>
        <div className="md:w-1/2 p-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <AniLink
            className="bouton"
            cover
            bg="#fde2cd"
            key="Découvrir l agence"
            to="/agence"
          >
            Découvrir l Agence
          </AniLink>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h2>Faire ensemble</h2>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h2>B-CORP</h2>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h2>Gouvernance partagée</h2>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h2>GO-NO GO éthique</h2>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h2>Probono</h2>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h2>the Island : ancrage territorial</h2>
        </div>
      </div>
    </section>
  </Layout>
);

EngagementsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EngagementsPage;

export const query = graphql`
  query {
    nuage: file(relativePath: { eq: "fond-nuage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650, maxHeight: 650) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
