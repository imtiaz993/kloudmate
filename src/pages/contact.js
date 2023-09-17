import React from 'react';
import Navbar from '../Components/common/Navbar';
import Footer from '../Components/common/Footer';
import FirstSection from '../Components/contact_page/FirstSection';
import ComunityHelp from '../Components/contact_page/ComunityHelp';
import Container from '../Components/common/Container';
import DiffrentMails from '../Components/contact_page/DifferentMails';
import { Fade } from 'react-reveal';
import SEO from '../Components/common/SEO';

function contact() {
  return (
    <div>
      <Navbar />
      <Container sm={true}>
        <FirstSection />
        <Fade fraction={0.2} distance={'50%'} up>
          <ComunityHelp />
        </Fade>

        <Fade distance={'50%'} up>
          <DiffrentMails />
        </Fade>
      </Container>
      <Footer />
    </div>
  );
}

export const Head = () => <SEO title="Contact us - KloudMate" />;

export default contact;
