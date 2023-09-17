import React from 'react';
import Navbar from '../Components/common/Navbar';
import Footer from '../Components/common/Footer';
import HeroSection from '../Components/help_page/HeroSection';
import SEO from '../Components/common/SEO';
import Container from '../Components/common/Container';

function help() {
  return (
    <div>
      <Navbar />
      <Container sm={true}>
        <HeroSection />
      </Container>
      <Footer />
    </div>
  );
}

export const Head = () => <SEO title="Help - KloudMate" />;

export default help;
