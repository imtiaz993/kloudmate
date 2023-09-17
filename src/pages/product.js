import React from 'react';
import HeroSection from '../Components/product-page/HeroSection';
import Navbar from '../Components/common/Navbar';
import BackgroundImgNew from '../images/product_assets/bg_new.svg';
import Footer from '../Components/common/Footer';
import DebugFaster from '../Components/product-page/DebugFaster';
import OpenStandard from '../Components/product-page/OpenStandard';
import ApplicationHealth from '../Components/product-page/ApplicationHealth';
import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import SEO from '../Components/common/SEO';
import GuideVideo from '../Components/product-page/GuideVideo';
import ConfigureAlertSection from '../Components/product-page/ConfigureAlertSection';
import MetricsTracesEventLogs from '../Components/product-page/MetricsTracesEventLogs';

function product() {
  return (
    <>
      <div className="h-full w-full">
        <div className="z-index-2 absolute top-0 flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="relative w-full xl:pb-14">
              <div
                className="absolute -z-10 hidden h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat md:block"
                style={{ backgroundImage: `url('${BackgroundImgNew}')` }}
              />
              <div className="absolute -z-10 hidden h-full w-full bg-gradient-to-b from-transparent to-dark-900 md:block"></div>

              <div className="relative w-full pb-7 ">
                <div
                  className="absolute -z-10 h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat md:hidden"
                  style={{ backgroundImage: `url('${BackgroundImgNew}')` }}
                />
                <div className="absolute -z-10 h-full w-full bg-gradient-to-b from-transparent to-dark-900 md:hidden"></div>
                <Navbar />
                <div className="mx-auto w-[90%] max-w-7xl ">
                  <HeroSection />
                </div>
              </div>
              <div className="mx-auto w-[90%] max-w-7xl ">
                <GuideVideo />
              </div>
            </div>
            <div className="mx-auto w-[90%] max-w-7xl ">
              <Fade distance="50%" fraction={0.4} up>
                <ApplicationHealth />
              </Fade>
              <Fade distance="50%" fraction={0.4} up>
                <DebugFaster />
              </Fade>
              <Fade distance="50%" fraction={0.4} up>
                <OpenStandard />
              </Fade>
              <Fade distance="50%" fraction={0.4} up>
                <ConfigureAlertSection />
              </Fade>
              <Fade distance="50%" fraction={0.4} up>
                <MetricsTracesEventLogs />
              </Fade>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export const Head = () => <SEO title="Learn about KloudMate platform" />;

export default product;

export const pageQuery = graphql`
  query {
    heroImg: file(relativePath: { eq: "product_assets/hero_section.png" }) {
      childImageSharp {
        gatsbyImageData(width: 900)
      }
    }
    learnMore: file(relativePath: { eq: "product_assets/learn_more.png" }) {
      childImageSharp {
        gatsbyImageData(width: 900)
      }
    }
    scale: file(relativePath: { eq: "product_assets/system_health.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    dashboard: file(relativePath: { eq: "product_assets/dashboard.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    inventory: file(
      relativePath: { eq: "product_assets/aws_lambda_function.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    lambda: file(relativePath: { eq: "product_assets/lambda.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    logSearch: file(relativePath: { eq: "product_assets/log_search.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    alarm: file(relativePath: { eq: "product_assets/alarm.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    issues: file(relativePath: { eq: "product_assets/error_tracking.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    tab1: file(
      relativePath: { eq: "product_assets/smart_insight/security.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    tab2: file(
      relativePath: { eq: "product_assets/smart_insight/reliability.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    tab3: file(
      relativePath: {
        eq: "product_assets/smart_insight/performance_efficiency.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    tab4: file(
      relativePath: { eq: "product_assets/smart_insight/cost_optimization.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    tab5: file(
      relativePath: { eq: "product_assets/smart_insight/sustainability.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    tab6: file(
      relativePath: {
        eq: "product_assets/smart_insight/operational_excellence.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    projects: file(relativePath: { eq: "product_assets/projects.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    billings: file(relativePath: { eq: "product_assets/billing.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    metric_dashboard: file(
      relativePath: { eq: "product_assets/metric-dashboard.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
  }
`;
