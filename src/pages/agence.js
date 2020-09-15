import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Helmet from 'react-helmet';
//import gsap from "gsap";
//import fondNuage from "../images/fond-nuage.jpg";

const AgencePage = ({ data }) => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="PatteBlanche - Agence"
    />
    <section className="mb-20">
      <div className="flex">
        <div className="m-auto text-center">
          <h1>notre histoire</h1>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="flex">
        <div className="w-1/2">
          <Img fluid={data.livre.childImageSharp.fluid} />
        </div>
        <div className="w-1/2 p-8">
          <p>Faisant face en conscience aux maux de notre époque, nous avons décidé d'agir, à notre échelle, là où nous sommes:</p>
          <p>Depuis 13 ans, nous oeuvrons aux côtés de celles et ceux qui veulent faire mieux et qui se veulent utiles, partout où ils peuvent.</p>
          <p>Nouveaux Récits. Expériences. Valorisation. Informations.</p>
          <p>Nous accompagnons ceux qui dessinent le monde qui vient.</p>
          <p>Depuis 13 ans, c'est la sagesse collective qui guide nos pas : Evolution continue. Gouvernance partagée.<br/>
          Collaborations croisées.<br/>
          Chaque jour apprendre, se tromper, hybrider.</p>
        </div>
      </div>
      <div className="mot text-center animate-pulse">exploration</div>
    </section>

    <section className="mb-20">

      <div className="flex">
        <div className="m-auto text-center pb-10">
          <h2>... en quelques étapes ...</h2>
        </div>
      </div>

      <div className="flex timeline">
        <div className="entries">
          <div className="entry gsReveal gsRevealFromLeft">
            <div className="title">2007</div>
            <div className="body">
              <p>Création de PatteBlanche, claim: "Marquez les esprits, pas la planète"</p>
            </div>
          </div>
          <div className="entry gsReveal gsRevealFromRight">
            <div className="title">2009</div>
            <div className="body">
              <p>Lancement d'une offre dédiée à la préservation de la biodiversité avec ingénierie écologique et communication responsable</p>
            </div>
          </div>
          <div className="entry gsReveal gsRevealFromLeft">
            <div className="title">2014</div>
            <div className="body">
              <p>Début du projet "d'entreprise libérée"</p>
            </div>
          </div>
          <div className="entry gsReveal gsRevealFromRight">
            <div className="title">2015</div>
            <div className="body">
              <p>Début de l'aventure de création d'un tiers lieu, The Island, où sont aujourd'hui hébergés nos bureaux</p>
            </div>
          </div>
          <div className="entry gsReveal gsRevealFromLeft">
            <div className="title">2016</div>
            <div className="body">
              <p>Co-lancement de Konenga, plateforme dédiée au partage et "recyclage" de campagnes de communication</p>
            </div>
          </div>
          <div className="entry gsReveal gsRevealFromRight">
            <div className="title">2017</div>
            <div className="body">
              <p>PatteBlanche devient BCorp</p>
            </div>
          </div>
          <div className="entry gsReveal gsRevealFromLeft">
            <div className="title">2018</div>
            <div className="body">
              <p>PatteBlanche est Best For The World Workers pour la première fois</p>
            </div>
          </div>
          <div className="entry gsReveal gsRevealFromRight">
            <div className="title">2019</div>
            <div className="body">
              <p>Accompagnement de l'méergence du mouvement citoyen "La Bascule"</p>
            </div>
          </div>
          <div className="entry gsReveal gsRevealFromLeft">
            <div className="title">2019</div>
            <div className="body">
              <p>Passage en gouvernance partagée</p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section className="mb-20">
      <div className="flex gsReveal">
        <div className="m-auto text-center pb-10">
          <h2>une agence engagée</h2>
        </div>
      </div>
      <div className="flex gsReveal">
        <div className="w-1/2 p-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel lacus ac ipsum vestibulum consequat. Suspendisse auctor feugiat tellus, vel tempus orci laoreet non. In hac habitasse platea dictumst. Curabitur a sem nec ex sollicitudin fringilla ac eget est. Etiam tortor neque, accumsan sit amet ex eu, euismod imperdiet tortor. Curabitur sit amet rhoncus dolor, ac suscipit est. Curabitur pharetra sollicitudin nisi. Praesent vel efficitur mauris. Etiam iaculis libero sit amet egestas molestie. Phasellus ac luctus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Donec ornare sapien est, vel pellentesque mi ultrices eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce non mollis dolor. Praesent eu erat ex. Sed feugiat vestibulum tellus nec pulvinar. Etiam rutrum et est a facilisis. Duis quis lorem turpis.</p>
          <AniLink
            className="bouton"
            cover
            bg="#fde2cd"
            key="Découvrir nos engagements"
            to="/engagements"
          >
            Découvrir nos engagements
          </AniLink>
        </div>
        <div className="w-1/2 gsReveal">
          <Img fluid={data.poing.childImageSharp.fluid} />
        </div>
      </div>
      <div className="mot text-center animate-pulse">confiance</div>
    </section>


    <section className="mb-20">

      <div className="flex gsReveal">
        <div className="m-auto text-center">
          <h2>Ils font PatteBlanche</h2>
        </div>
      </div>

      <div className="flex">
        <div className="m-auto text-center">
          <h3 className="bleu">L'équipe</h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 membre gsReveal">
          <Img fluid={data.equipe1.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal mt-8">
          <Img fluid={data.equipe2.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal">
          <Img fluid={data.equipe3.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal mt-8">
          <Img fluid={data.equipe4.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal">
          <Img fluid={data.equipe5.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal mt-8">
          <Img fluid={data.equipe6.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal">
          <Img fluid={data.equipe7.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal mt-8">
          <Img fluid={data.equipe8.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>

      </div>

      <div className="flex">
        <div className="m-auto text-center">
          <h3 className="bleu">Ils ont aussi fait PatteBlanche et sont partis vers de nouvelles aventures</h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 membre gsReveal">
          <Img fluid={data.equipe13.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal mt-8">
          <Img fluid={data.equipe_14.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal">
          <Img fluid={data.equipe15.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
        <div className="p-4 membre gsReveal mt-8">
          <Img fluid={data.equipe16.childImageSharp.fluid} />
          <div className="nom">Céline Martin</div>
          <div className="fonction">Web Designeuse</div>
        </div>
      </div>

      <div className="flex gsReveal">
        <div className="m-auto text-center">
          <h3 className="bleu">PatteBlanche, une agance " élargie "</h3>
        </div>
      </div>

      <div className="flex gsReveal">
        <div className="m-auto">
          <p>
          Connecter les points, assembler les meilleurs savoir-faire, trouver les bones synergies, PatteBlanche conduit les projets comme un architecte d'intelligence et de compétences. Mutualisant les forces et talent d'un réseau d'amis partenaires de longue date, PatteBlanche est une agence "élargie", ouverte et perméable, qui place la collaboration au centre de son fonctionnement.
          </p>
          <AniLink
            className="bouton"
            cover
            bg="#fde2cd"
            key="En savoir plus"
            to="/"
          >
            En savoir plus
          </AniLink>
        </div>
      </div>

    </section>

    <section className="mb-20">

      <div className="flex gsReveal">
        <div className="m-auto text-center">
          <h2>nos bureaux,<br/>réinventer la manière de travailler</h2>
        </div>
      </div>

      <div className="flex gsReveal">
        <div className="m-auto text-center">
          <h3 className="bleu">par l'ancrage territorial</h3>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <Img fluid={data.theisland.childImageSharp.fluid} />
        </div>
        <div className="w-1/2 p-8">
          <p>Plutôt que des simples bureaux, nous avons choisi de bâtir un lieu de vie en Occitanie :<br/>
          The Island, éco-lieu urbain, baigné de nature, au coeur de la ville de Montpellier.<br/>
          Patio, potager, hamacs, balançoires, jardin, joie et plus de 200 espèces végétales.<br/>
          Un antidote au bitume et à l'effervescence urbaine.<br/>
          Un espace d'apaisement & de création du monde de demain.</p>
          <p>Et plutôt que de le faire seul, nous nous sommes entourés : acteurs associatifs, praticiens du mieux être, entrepreneurs sociaux, artistes, botanistes.<br/>
          Au point que notre île est peu à peu devenue un catalyseur des change-makers locaux, un petit hub d'opportunités engagées & de rencontres inspirantes, au coeur du territoire.</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 p-8">
          <p><strong>Nous aurions pu cultiver l'entre-nous, nous avons fait l'inverse.<br/>
          Nous proposons à tous les publics locaux des événements sensibles & accessibles :</strong></p>
          <p>Projections documentaires | Retraites Mieux Être | Rencontres inspirantes | Expériences Immersives | Réceptif Responsable | Votre futur événement de sens</p>
          <p>Vous êtes les bienvenus !</p>
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
            className="bouton d-inline-block"
            cover
            bg="#fde2cd"
            key="Site web du lieu"
            to="/"
          >
            Site web du lieu
          </AniLink>
        </div>
        <div className="w-1/2">
          <Img fluid={data.theisland_bureau.childImageSharp.fluid} />
        </div>
      </div>
      <div className="mot text-center animate-pulse">partage</div>
    </section>

    <section className="mb-20">
      <div className="flex gsReveal">
        <div className="m-auto text-center">
          <h2>ils parlent de nous</h2>
        </div>
      </div>
    </section>
    <Helmet>
    <script>

    </script>
    </Helmet>
  </Layout>
);

AgencePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AgencePage;

export const query = graphql`
  query {
    livre: file(relativePath: { eq: "illus-livre.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650, maxHeight: 650) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    poing: file(relativePath: { eq: "illus-poing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650, maxHeight: 650) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe1: file(relativePath: { eq: "equipe-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe2: file(relativePath: { eq: "equipe-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe3: file(relativePath: { eq: "equipe-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe4: file(relativePath: { eq: "equipe-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe5: file(relativePath: { eq: "equipe-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe6: file(relativePath: { eq: "equipe-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe7: file(relativePath: { eq: "equipe-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe8: file(relativePath: { eq: "equipe-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe9: file(relativePath: { eq: "equipe-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe10: file(relativePath: { eq: "equipe-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe11: file(relativePath: { eq: "equipe-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe12: file(relativePath: { eq: "equipe-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe13: file(relativePath: { eq: "equipe-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe_14: file(relativePath: { eq: "equipe-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe15: file(relativePath: { eq: "equipe-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipe16: file(relativePath: { eq: "equipe-16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 238, maxHeight: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    theisland: file(relativePath: { eq: "illus-the-island.png" }) {
      childImageSharp {
        fluid(maxWidth: 580, maxHeight: 595) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    theisland_bureau: file(relativePath: { eq: "illus-theisland-bureau.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 574, maxHeight: 557) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`;
