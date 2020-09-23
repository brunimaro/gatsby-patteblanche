import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
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
          <div className="hop">
            <p>Dans un Monde en mutation</p>
            <p>Nous nous engageons à placer notre mission en premier</p>
          </div>
          <div className="hop">
            <p>A sélectionner les projets et clients avec lesquels nous souhaitons avancer</p>
            <p>A rechercher toujours l'impact positif</p>
          </div>
          <div className="hop">
            <p>A essayer du mieux que l'on peut de partager et soutenir les autres</p>
            <p>A être des militants du Pour</p>
          </div>
          <div className="hop">
            <p>Et toujours chercher à nous améliorer</p>
            <p>dans nos fonctionnements</p>
          </div>
          <div className="hop">
            <p>dans nos proportions</p>
            <p>dans qui nous sommes</p>
          </div>
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
          Plutôt qu'un filtre du contre, il s'agit résolument d'un filtre du pour! C'est notre ligne verte.</p>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="md:flex">
        <div className="m-auto text-center pb-4">
          <h2>une agence BCorp</h2>
        </div>
      </div>
      <div className="md:flex gsReveal">
        <div className="md:w-1/2  p-8">
          <p>La communauté B corp, fondée en 2006, aux Etats-Unis, réunit dans le monde les entreprises qui souhaitent (ré)affirmer leur Missoin Sociétale au coeur de leur raison d'être. Ce sont des entreprises à but lucratif (for profit) qui souhaitent progresser et démontrer leur impact positif (for purpose) en étant évaluées sur leur performance globale tos les 3 ans. Le entreprises labellisées à date sont de toutes tailles et tous secteurs, icônes historiques comme Patagonia, Natura, Alessi ou Ecover, "jeunes pousses" comme Fairphone, Triodos, change.org, ou Kickstarter...</p>
          <p>Elles cherchent, via leur modèle économique, non pas à être les meilleures AU monde mais bien les mmeilleures Pour le monde! Au-delà de leur propre démarche de progrès, elles développent le principe d'interdépendance: Les projets entre B Corps son privilégiés et les B Corps cherchent à pollinisier tout leur écosystème de fournisseurs, clients ou partenaires. Le réseau BCORP compte plus de 2500 entreprises dans le monde entier.</p>
          <p><strong>PatteBlanche fait donc partie du top 10% de sentreprises BCORP qui oeuvrent pour le bien-être des collaborateurs.</strong></p>
        </div>
        <div className="md:w-1/2 p-8">
          <p className="mt-6"><strong>PatteBlanche a reçu la certification BCORP en XXXX, et nous avons l'honneur d'avoir reçu le prix BEST FOR WORKERS ces 2 dernières années.</strong></p>
          <div className="pt-2 pb-6">
            <Img fluid={data.bcorp.childImageSharp.fluid} />
          </div>
          <p>PatteBlanche ets fière d'avoir été récompensée "Best for the world 2019" dans la catégorie "Best forWorkers" par la communauté BCorp après avoir obtenu le score élevé de "34" dans al catégorie "bien-être des collaborateurs" (moyenne de 18 dans cette catégorie).</p>
        </div>
      </div>
      <div className="md:flex">
        <div className="text-left pb-4 pl-8">
          <AniLink
            className="bouton d-inline-block"
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

    <section id="acteurs" className="max-w-3xl m-auto">
      <div className="md:flex mt-10 mb-10">
        <div className="m-auto text-center">
          <div className="gros-blanc gsReveal">restons</div>
          <div className="gros-bleu gsReveal">connectés</div>
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
    bcorp: file(relativePath: { eq: "illus-bcorp.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 337) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`;
