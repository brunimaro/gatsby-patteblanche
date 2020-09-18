import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import cercleBesoin from "../images/cercle-besoins.svg";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      keywords={[`PatteBlanche`, `agence`, `communication`, `rse`]}
      title="PatteBlanche, Accompagner les organisations vers une (r)évolution culturelle du monde qui vient"
    />
    <section className="mb-20 gsReveal">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h1>
            <span>Accompagner les organisations</span>
            vers une (r)évolution <br />
            culturelle du monde qui vient
          </h1>
        </div>
      </div>
    </section>

    <section id="agence">
      <div className="md:flex gsReveal">
        <div className="md:w-1/2">
          <Img fluid={data.nuage.childImageSharp.fluid} />
        </div>
        <div className="md:w-1/2 p-8">
          <p>
            Le monde change et évolue de plus en plus vite, se confrontant à ses
            limites et aux excès de notre société libérale, globale, qui a placé
            la consommation et la croissance au sommet de ses valeurs et
            objectifs. Face aux successions de crises passées et à venir,
            PatteBlanche se positionne comme un acteur militant des autres
            possibles, voulant s engager aux côtés de ceux qui font demain et en
            accompagnant les organisations dans leur transformation positive et
            à leur adaptabilité au monde post croissance qui s' annonce.
          </p>
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

      <div className="mot text-center animate-pulse">(r)évolution</div>
    </section>

    <section id="besoins" className="mb-20 gsReveal">
      <div className="md:flex mb-10">
        <div className="m-auto text-center">
          <h2>vos besoins</h2>
        </div>
      </div>
      <div className="md:flex cercle">
        <div className="md:w-1/5 p-2 text-center flex flex-col">
          <div className="besoin besoin-1 text-right">
            <h3 className="pale-teal">Comprendre</h3>
            <span className="uppercase">
              Aujourd'hui pour <br /> inventer demain
            </span>
          </div>

          <div className="besoin besoin-2 text-right">
            <h3>recommencer</h3>
            <span>Aujourd'hui est déjà hier</span>
          </div>

          <div className="besoin besoin-3 text-right">
            <h3>Essaimer</h3>
            <span className="uppercase">
              Inspirer lorem
              <br />
              lorem lipsum
            </span>
          </div>
        </div>
        <div className="md:w-3/5 p-8 central flex">
          <div className="contenu-cercle">
            <p className="text-center">
              Notre modèle de société est en pleine évolution. Afin de s’adapter
              à ces changements, il est fondamental de bien appréhender les
              défis écologiques & sociétaux qui se présentent à nous afin de les
              intégrer et agir en fonction. Cette étape est fondatrice d’un
              nouvel élan pour se projeter en conscience dans ces nouveaux
              paradigmes de société.
            </p>
            <AniLink
              className="bouton vert"
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
          <div className="besoin besoin-4 text-left">
            <h3>
              Imaginer
              <br />
              et raconter
            </h3>
            <span className="uppercase">
              L'entreprise
              <br />
              ou la marque
            </span>
          </div>

          <div className="besoin besoin-5 text-left">
            <h3>Faire</h3>
            <span className="uppercase">
              sa (r)évolution
              <br />
              culturelle
            </span>
          </div>

          <div className="besoin besoin-6 text-left">
            <h3>Transformer</h3>
            <span className="uppercase">
              ses convictions
              <br />
              en actions
            </span>
          </div>
        </div>
      </div>
    </section>

    <section id="realisations" className="mb-20">

      <div className="md:flex">
        <div className="m-auto text-center">
          <h2>Quelques réalisations</h2>
        </div>
      </div>

      <div className="md:flex mt-20">

        <div className="md:w-1/2 gsReveal">
            <div className="max-w-xs overflow-hidden shadow-lg my-2">
            <Img fluid={data.ref_fondation.childImageSharp.fluid} />
            <div className="px-0 py-4">
              <div className="font-bold text-sm uppercase mb-2 tracking-wider">Fondation Chanel</div>
              <p className="text-sm my-0">
              Le monde change et évolue de plus en plus vite, se confrontant à ses limites et aux excès.
              </p>
            </div>
            <div className="px-0">
              <span className="inline-block font-lora px-0 py-1 text-sm font-semibold text-white text-opacity-50 mr-2">\\ Site web - Illustration</span>
            </div>
            </div>
        </div>

        <div className="md:w-1/2 gsReveal">
            <div className="max-w-xs overflow-hidden shadow-lg mt-20">
            <Img fluid={data.ref_biocoop.childImageSharp.fluid} />
            <div className="px-0 py-4">
              <div className="font-bold text-sm uppercase mb-2 tracking-wider">Biocoop</div>
              <p className="text-sm my-0">
              Le monde change et évolue de plus en plus vite, se confrontant à ses limites et aux excès.
              </p>
            </div>
            <div className="px-0">
              <span className="inline-block font-lora px-0 py-1 text-sm font-semibold text-white text-opacity-50 mr-2">\\ Site web - Illustration</span>
            </div>
            </div>
        </div>

      </div>


      <div className="md:flex">

        <div className="md:w-1/2 gsReveal">
            <div className="max-w-xs overflow-hidden shadow-lg my-2 ml-20">
            <Img fluid={data.ref_sephora.childImageSharp.fluid} />
            <div className="px-0 py-4">
              <div className="font-bold text-sm uppercase mb-2 tracking-wider">Sephora</div>
              <p className="text-sm my-0">
              Le monde change et évolue de plus en plus vite, se confrontant à ses limites et aux excès.
              </p>
            </div>
            <div className="px-0">
              <span className="inline-block font-lora px-0 py-1 text-sm font-semibold text-white text-opacity-50 mr-2">\\ Site web - Illustration</span>
            </div>
            </div>
        </div>

        <div className="md:w-1/2 gsReveal">
            <div className="max-w-xs overflow-hidden shadow-lg mt-20 ml-20">
            <Img fluid={data.ref_quietude.childImageSharp.fluid} />
            <div className="pl-0 py-4">
              <div className="font-bold text-sm uppercase mb-2 tracking-wider">quiétude attitude</div>
              <p className="text-sm my-0">
              Le monde change et évolue de plus en plus vite, se confrontant à ses limites et aux excès.
              </p>
            </div>
            <div className="px-0">
              <span className="inline-block font-lora px-0 py-1 text-sm font-semibold text-white text-opacity-50 mr-2">\\ Site web - Illustration</span>
            </div>
            </div>
        </div>

      </div>



      <div className="md:flex">

        <div className="md:w-1/2 gsReveal">
            <div className="max-w-xs overflow-hidden shadow-lg my-2">
            <Img fluid={data.ref_pf.childImageSharp.fluid} />
            <div className="px-0 py-4">
              <div className="font-bold text-sm uppercase mb-2 tracking-wider">Pierre Fabre</div>
              <p className="text-sm my-0">
              Le monde change et évolue de plus en plus vite, se confrontant à ses limites et aux excès.
              </p>
            </div>
            <div className="px-0">
              <span className="inline-block font-lora px-0 py-1 text-sm font-semibold text-white text-opacity-50 mr-2">\\ Site web - Illustration</span>
            </div>
            </div>
        </div>

        <div className="md:w-1/2 gsReveal">
            <div className="max-w-xs overflow-hidden shadow-lg mt-20">
            <Img fluid={data.ref_co2solidaire.childImageSharp.fluid} />
            <div className="px-0 py-4">
              <div className="font-bold text-sm uppercase mb-2 tracking-wider">CO2 solidaire</div>
              <p className="text-sm my-0">
              Le monde change et évolue de plus en plus vite, se confrontant à ses limites et aux excès.
              </p>
            </div>
            <div className="px-0">
              <span className="inline-block font-lora px-0 py-1 text-sm font-semibold text-white text-opacity-50 mr-2">\\ Site web - Illustration</span>
            </div>
            </div>
        </div>

      </div>



    </section>

    <section id="engagements" className="mb-20">
      <div className="md:flex gsReveal">
        <div className="m-auto text-center">
          <h2>Nos engagements</h2>
        </div>
      </div>

      <div className="md:flex mt-20 gsReveal">
        <div className="md:w-1/2 p-8">
          <p>
            Acteur des transitions depuis 2007, nous n’avons eu de cesse de
            grandir, autrement.
          </p>
          <p>
            Certifiés B Corp depuis 3 ans, nous avançons sur le chemin de
            l’amélioration continue.
            <br />
            Best for workers deux ans de suite, nous continuons de viser mieux,
            pour chacun.
          </p>
          <p>
            Disciples d’une Gouvernance partagée, nous apprenons, autant que
            nous sommes.
          </p>
          <p>
            Engagés aux côtés de ceux qui imaginent demain avec notre démarche
            probono.{" "}
          </p>
          <p>
            Citoyens d’une île que nous avons créé ensemble, pour mieux vivre le
            travail.
          </p>
          <p className="font-bold">
            Nous continuons de penser que nous pourrions faire mieux. Nous
            entendons le faire ensemble, à vos côtés{" "}
          </p>
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
          <Img fluid={data.bateau.childImageSharp.fluid} />
        </div>
      </div>
    </section>

    <section id="faire-ensemble">
      <div className="md:flex mt-10 mb-10 gsReveal">
        <div className="m-auto text-center">
          <h2>Faire ensemble</h2>
        </div>
      </div>

      <div className="md:flex">
        <div className="md:w-1/2 gsReveal">
          <Img fluid={data.main.childImageSharp.fluid} />
        </div>
        <div className="md:w-1/2 p-8 gsReveal">
          <p>
            Ensemble on va plus loin… Et aussi, on crée plus, on apprend plus,
            on évolue plus;... Cette croyance s'est traduite au fil du temps en
            expérience et en conviction pour PatteBlanche. Définition de la
            stratégie avec un “conseil des sages”, gouvernance partagée avec
            l’équipe, travail en “hub” avec amis et partenaires, implication
            dans des communautés d’action, rapprochement des mondes (ONG,
            entreprises, Citoyens, Territoires),.. l’expression du “faire
            ensemble” se traduit dans toutes les actions de PatteBlanche.
          </p>
          <p>
            <strong>
              Aussi parce que nous sommes convaincus que le Monde de Demain ne
              pourra exister que par la collaboration, l’échange et le partage,
              pour le plus grand nombre.
            </strong>
          </p>
          <AniLink
            className="bouton"
            cover
            bg="#fde2cd"
            key="Découvrir"
            to="/agence"
          >
            Découvrir
          </AniLink>
        </div>
      </div>
    </section>

    <section id="acteurs" className="max-w-3xl m-auto">
      <div className="md:flex mt-10 mb-10">
        <div className="m-auto text-center">
          <div className="gros-blanc gsReveal">soyez</div>
          <div className="gros-bleu gsReveal">acteur</div>
        </div>
      </div>

      <div className="md:flex">
        <div className="md:w-3/5 gsReveal">
          <p>
            Vous souhaitez collaborer avec nous, rejoindre l'équipe ou
            simplement nous écrire un mot
          </p>
        </div>
        <div className="md:w-2/5 text-center gsReveal">
          <AniLink
            className="bouton"
            cover
            bg="#fde2cd"
            key="Contactez-nous"
            to="/contact"
          >
            Contactez-nous
          </AniLink>
        </div>
      </div>
    </section>
  </Layout>
);

IndexPage.propTypes = {
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
    main: file(
      relativePath: { eq: "ricardo-gomez-angel-d-9-k-on-c-1-a-hw-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ref_fondation: file(relativePath: { eq: "ref-fondation.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ref_biocoop: file(relativePath: { eq: "ref-uniscite.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ref_sephora: file(relativePath: { eq: "ref-sephora.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ref_quietude: file(relativePath: { eq: "ref-quietudeattitude.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ref_pf: file(relativePath: { eq: "ref-pf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ref_co2solidaire: file(relativePath: { eq: "ref-co2solidaire.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
