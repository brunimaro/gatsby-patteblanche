import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
//import AniLink from "gatsby-plugin-transition-link/AniLink";
//import fondNuage from "../images/fond-nuage.jpg";
//import { animManifeste } from "../components/animManifeste";

const EngagementsPage = ({ data }) => (
  <Layout>
    <SEO
      keywords={[`PatteBlanche`, `agence`, `communication`, `rse`]}
      title="PatteBlanche - Nos engagements"
    />
    <section className="mb-20">
      <div className="md:flex gsReveal">
        <div className="m-auto text-center">
          <h1>notre vision du monde (d'après)</h1>
        </div>
      </div>
      <div className="flex gsReveal">
        <div className="m-auto text-center">
          <h3 className="bleu">Le développement durable is dead</h3>
        </div>
      </div>
      <div className="flex gsReveal m-auto text-center">
        <p>En 2007, à l'heure des premiers as de PatteBlanche, nous tentions d'encourager les organisations à s'inscrire dans des démarches de Développement Durable. Avec un accueil souvent mitigé: "Ah le développement durable... c'est un effet de mode, je n'y crois pas". Phrase entendues maintes fois... bien que peu encourageant pour des débuts, nous n'avons pas abandonnés tant notre conviction que "quelque chose ne tournait pas rond" était forte.</p>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex gsReveal">
        <div className="md:w-1/2 p-8">
          <p>
            13 ans plus tard, et qulques crisés passées, le monde a bien changé. Citoyens actifs et engagés, actions collectives, organisations en mouvement, responsabilité sociétale de l'entreprise, de la marque, transitions démocratiques, sociales, environnementales,... les preuves de la prise de consicence sont partout.
          </p>
          <p>
          Mais en 13 ans, nos convictions, ont elles aussi bien évoluées. Et nous pensons qu'il est désormais nécessaire d'aller plus loin et e transformer ses prises de conscience en actions directes, concrètes et remarquables.
          </p>
          <p><strong>Nous pensons qu'il est l'heure du switch, du pivot de notre modèle de société vers un modèle véritablement résilient</strong></p>
        </div>
        <div className="md:w-1/2">
          <Img fluid={data.route.childImageSharp.fluid} />
        </div>
      </div>
      <div className="md:flex mt-10 gsReveal">
      <div className="md:w-1/2">
        <Img fluid={data.rando.childImageSharp.fluid} />
      </div>
        <div className="md:w-1/2 p-8">
          <p>
            Une (r)évolution culturelle nous attend pour renverser nos anciennes croyances et valeurs, dépasser le mythe d'une croissance infinie et du développement durable, sortir du business as usual, dépasser l'unique logique de réduction des impacts négatifs.
          </p>
          <p>
          Changer de paradigme, faire de l'économie une force régénératrice, sortir de la société de consommation, aller vers la joie du moins, mais mieux, penser circulaire, usage avant propriété et éco avant égo.
          </p>
          <p><strong>Il nous faut "changer de logiciel", raconter des nouveaux récits et entraîner les autres dans son sillon, pour faire émerger dès maintenant le Monde d'Après.</strong></p>
        </div>
      </div>
    </section>

    <section className="mb-20">

      <div className="md:flex gsReveal">
        <div className="m-auto text-center pb-10">
          <h2>Notre raison d'être</h2>
        </div>
      </div>

      <div className="md:flex gsReveal">
        <div className="md:w-1/2">
          <div className="gros-claim">
            <h3>Accompagner <br/>ceux qui <br/>dessinent <span className="animate-pulse">maintenant</span> <br/>le monde d'après</h3>
          </div>
        </div>
        <div className="md:w-1/2  p-8">
          <p>Le monde change et évolue de plus en plus vite, se confrontant à ses limites et aux excès de notre société globalisée, qui a placé la consommation et la croissance au sommet de ses valeurs. Face aux successions de crises passées et à venir, PatteBlanche se positionne comme un acteur militant des autres possibles, voulant s'engager aux côtés de "ceux qui font" aujourd'hui le monde de demain et en accompagnant les organisationset territoires dans leur transformation positive et leur adaptabilité au monde post croissance qui s'annonce.</p>
          <p><strong>La communication agit comme un puissant outil de transformation. En valorisant les autres possibles, en mettant en action, en accompagnant les changements culturels, en apportant les éclairages nécessaires à la compréhension, PatteBlanche contribue au Monde qui vient.</strong></p>
        </div>
      </div>

    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center pb-10">
          <h2>Manifeste</h2>
        </div>
      </div>
      <div className="md:flex">
        <div className="m-auto text-center text-xl manifeste">
          <p>Dans un Monde en mutation</p>
          <p>Nous nous engageons à placer notre mission en premier</p>
          <p>A sélectionner les projets et clients avec lesquels nous souhaitons avancer</p>
          <p>A rechercher toujours l'impact positif</p>
          <p>A essayer du mieux que l'on peut de partager et soutenir les autres</p>
          <p>A être des militants du Pour</p>
          <p></p>
          <p>Et toujours chercher à nous améliorer</p>
          <p>dans nos fonctionnements</p>
          <p>dans nos proportions</p>
          <p>dans qui nous sommes</p>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h2>la ligne <span className="verte">verte</span></h2>
        </div>
      </div>
      <div className="flex gsReveal">
        <div className="m-auto text-center">
          <h3 className="verte">Le GO.NO.GO éthique</h3>
        </div>
      </div>
      <div className="md:flex gsReveal">
        <div className="md:w-1/2">
          <Img fluid={data.cieletoile.childImageSharp.fluid} />
        </div>
        <div className="md:w-1/2  p-8">
          <p>PatteBlanche a mis en place un filtre éthique, par lequel passe toute demande de collaboration que nous recevons. Nous ne nous en cachons pas: il est des acteurs et des projets sur lesquels nous ne souhaitons pas collaborer.<br/>
          C'est le cas des projets teintés de green-washing, de social-washing, purpose-washing, woke-washing, ou de motivations uniquement opportunistes, dénuées d'authenticité. Notre métier consiste précisément à éviter les travers d'une communication de façade, décorrélée des faits<br/>
          Nous avons fait le choix d'accompagner les acteurs et projets auxquels nous croyons, afin d'en augmenter l'efficacité, la beauté et l'impact positif. Nous souhaitons apporter nos savoirs faire et notre énergie aux acteurs qui se projettent avec authenticité dans le monde post-croissance qui se dessine et souhaitent y contribuer.<br/>
          Plutôt qu'un filtre du contre, il s'agit résolument d'un filtre du pour! C'est ntre ligne verte.</p>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center">
          <h2>une agence BCorp</h2>
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
    route: file(relativePath: { eq: "illus-route.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 470, maxHeight: 528) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    rando: file(relativePath: { eq: "illus-rando.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 549) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    cieletoile: file(relativePath: { eq: "illus-cieletoile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 475, maxHeight: 614) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`;
