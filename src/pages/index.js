import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import cercleBesoin from "../images/cercle-besoins.svg";


const IndexPage = ({ data }) => (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="PatteBlanche, Accompagner les organisations vers une (r)évolution culturelle du monde qui vient"
      />
      <section className="mb-20">
        <div className="md:flex">
          <div className="m-auto text-center">
            <h1>
            <span>Accompagner les organisations</span>
            vers une (r)évolution <br/>culturelle du monde qui vient
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="md:flex">
          <div className="md:w-1/2">
          <Img
            fluid={data.nuage.childImageSharp.fluid}
          />
          </div>
          <div className="md:w-1/2 p-8">
          <p>Le monde change et évolue de plus en plus vite, se confrontant à ses limites et aux excès de notre société libérale, globale, qui a placé la consommation et la croissance au sommet de ses valeurs et objectifs. Face aux successions de crises passées et à venir, PatteBlanche se positionne comme un acteur militant des autres possibles, voulant s engager aux côtés de ceux qui font demain et en accompagnant les organisations dans leur transformation positive et à leur adaptabilité au monde post croissance qui s' annonce.</p>
          <AniLink
            className="bouton"
            cover
            bg="#fde2cd"
            key="Découvrir l'agence"
            to="/agence"
          >
            Découvrir l'Agence
          </AniLink>
          </div>
        </div>

        <div className="mot text-center animate-pulse">
        (r)évolution
        </div>

      </section>

      <section className="mb-20">
        <div className="md:flex mb-10">
          <div className="m-auto text-center">
            <h2>vos besoins</h2>
          </div>
        </div>
        <div className="md:flex cercle">
            <div className="md:w-1/5 p-2 text-center flex flex-col">
              <h3>Comprendre</h3>
              <h3>recommencer</h3>
              <h3>Essaimer</h3>
            </div>
            <div className="md:w-3/5 p-8 central flex">
            <div className="contenu-cercle">
              <p className="text-center">Notre modèle de société est en pleine évolution. Afin de s’adapter à ces changements, il est fondamental de bien appréhender les défis écologiques & sociétaux qui se présentent à nous  afin de les intégrer et agir en fonction. Cette étape est fondatrice d’un nouvel élan pour se projeter en conscience dans ces nouveaux paradigmes de société.</p>
              <AniLink
                className="bouton"
                cover
                bg="#fde2cd"
                key="Découvrir l'offre"
                to="/offres-accompagnement-besoins"
              >
                Découvrir l'offre
              </AniLink>
              </div>
              <figure className="cercle-bg">
                <img src={cercleBesoin} />
              </figure>
            </div>
            <div className="md:w-1/5 p-2 text-center  flex flex-col">
              <h3>Imaginer<br/>et raconter</h3>
              <h3>Faire</h3>
              <h3>Transformer</h3>
            </div>
          </div>
      </section>

      <section className="mb-20">
        <div className="md:flex">
          <div className="m-auto text-center">
            <h2>Quelques réalisations</h2>
          </div>
        </div>
      </section>

      <section className="mb-20">

        <div className="md:flex">
          <div className="m-auto text-center">
            <h2>Nos engagements</h2>
          </div>
        </div>

        <div className="md:flex mt-20">
          <div className="md:w-1/2 p-8">
          <p>Acteur des transitions depuis 2007, nous n’avons eu de cesse de grandir, autrement.</p>
          <p>Certifiés B Corp depuis 3 ans, nous avançons sur le chemin de l’amélioration continue.<br/>
          Best for workers deux ans de suite, nous continuons de viser mieux, pour chacun.</p>
          <p>Disciples d’une  Gouvernance partagée, nous apprenons, autant que nous sommes.</p>
          <p>Engagés aux côtés de ceux qui imaginent demain avec notre démarche probono. </p>
          <p>Citoyens d’une île que nous avons créé ensemble, pour mieux vivre le travail.</p>
          <p className="font-bold">Nous continuons de penser que nous pourrions faire mieux. Nous entendons le faire ensemble, à vos côtés </p>
          <AniLink
            className="bouton"
            cover
            bg="#fde2cd"
            key="Découvrir nos engagements"
            to="/engagements"
          >
            Découvrir
          </AniLink>
          </div>
          <div className="md:w-1/2">
            <Img
              fluid={data.bateau.childImageSharp.fluid}
            />
          </div>

        </div>

      </section>

    </Layout>
);

IndexPage.propTypes= {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    nuage: file(relativePath: { eq: "fond-nuage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bateau: file(relativePath: { eq: "illus-bateau.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
