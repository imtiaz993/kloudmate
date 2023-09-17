import React from 'react';
import BackgroundImg from '../images/about_assets/background.svg';
import Navbar from '../Components/common/Navbar';
import Footer from '../Components/common/Footer';
import HeroSection from '../Components/about_page/HeroSection';
import InvestorsSection from '../Components/about_page/InvestorsSection';
import OurStorySection from '../Components/about_page/OurStorySection';
import JoinUsSection from '../Components/about_page/JoinUsSection';
import TeamSection from '../Components/about_page/TeamSection';
import Cardbg from '../images/looper_group.svg';
import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import SEO from '../Components/common/SEO';

function about({ data }) {
  return (
    <div className="h-full w-full">
      <div className="flex w-full flex-col items-center justify-center ">
        <Fade>
          <div
            className="mb-8 flex w-full flex-col items-center justify-center bg-cover bg-no-repeat lg:mb-12"
            style={{ backgroundImage: `url('${BackgroundImg}')` }}
          >
            <Navbar />
            <div className="mx-auto w-[90%] max-w-7xl">
              <HeroSection image={data.heroImg.childImageSharp} />
            </div>
          </div>
        </Fade>
        <Fade distance="50%" up>
          <div className="my-8 flex w-full flex-col items-center justify-center lg:my-12">
            <div className="mx-auto w-[90%] max-w-7xl md:w-[85%] ">
              <OurStorySection />
            </div>
          </div>
        </Fade>
        <div className="my-8 flex w-full flex-col items-center justify-center lg:my-12">
          <div className="mx-auto w-[90%] max-w-7xl md:w-[85%] ">
            <TeamSection />
          </div>
        </div>
        <div className="my-8 flex w-full flex-col items-center justify-center lg:my-12">
          <div className="mx-auto w-[90%] max-w-7xl md:w-[85%] ">
            <InvestorsSection />
          </div>
        </div>
        <div
          className="my-8 flex w-full flex-col items-center justify-center bg-primary bg-cover bg-no-repeat lg:my-12"
          style={{ backgroundImage: `url('${Cardbg}')` }}
        >
          <div className="mx-auto max-w-7xl md:w-[90%] ">
            <JoinUsSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const Head = () => <SEO title="About us - KloudMate" />;

export default about;

export const pageQuery = graphql`
  query {
    heroImg: file(relativePath: { eq: "about_assets/hero.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 750
          quality: 80
          formats: [AUTO, WEBP, AVIF]
          placeholder: BLURRED
        )
      }
    }
  }
`;
