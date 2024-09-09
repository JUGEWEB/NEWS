import React, { useState } from 'react';
import './BinegeInfo.css'; // Importing the CSS file for styling
import binegeLogo from './assets/binege.png'; // Add Binege logo
import bngLogo from './assets/bngf.png'; // Add BNG logo

const BinegeInfo = () => {
  const [activeSection, setActiveSection] = useState(''); // Track which section is open
  const [language, setLanguage] = useState('en'); // Track the selected language

  // Toggle sections when clicked
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  // Toggle between English and French
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const content = {
    en: {
      binege: "Binege is a platform focused on providing users with comprehensive information and tracking tools for cryptocurrency tokens, particularly those on the Binance Smart Chain (BSC). The platform serves as a hub for discovering, listing, and analyzing tokens, making it a valuable resource for cryptocurrency enthusiasts and investors.",
      tokenListings: "Token Listings",
      applyToken: "How to Apply Your Token on Binege",
      bng: "BNG is the native token of Binege, providing utility across the platform, whether for participating in token presales or utilizing various platform services. It is integral to Binege's ecosystem, fostering growth and interaction between token creators and investors.",
      footer: "jugeWEB all rights reserved",
    },
    fr: {
      binege: "Binege est une plateforme axée sur la fourniture d'informations complètes et d'outils de suivi pour les jetons de cryptomonnaie, en particulier ceux de la Binance Smart Chain (BSC). La plateforme sert de centre pour découvrir, répertorier et analyser les jetons, ce qui en fait une ressource précieuse pour les passionnés et les investisseurs de cryptomonnaies.",
      tokenListings: "Liste des jetons",
      applyToken: "Comment inscrire votre jeton sur Binege",
      bng: "BNG est le jeton natif de Binege, offrant une utilité à travers la plateforme, que ce soit pour participer à des préventes de jetons ou utiliser divers services de la plateforme. Il est essentiel à l'écosystème de Binege, favorisant la croissance et l'interaction entre les créateurs de jetons et les investisseurs.",
      footer: "jugeWEB tous droits réservés",
    },
  };

  return (
    <div className="binege-info-container">
      {/* Language Selection */}
      <div className="language-switch">
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('fr')}>Français</button>
      </div>

      <div className="logo-container">
        <img src={binegeLogo} alt="Binege Logo" className="binege-logo" />
        <h1 className="title">Binege Platform</h1>
      </div>

      {/* Section: What is Binege? */}
      <div className="section">
        <h2 onClick={() => toggleSection('binege')} className="section-heading">
          What is Binege?
        </h2>
        {activeSection === 'binege' && (
          <p className="section-content">{content[language].binege}</p>
        )}
      </div>

      {/* Section: Token Listings */}
      <div className="section">
        <h2 onClick={() => toggleSection('listings')} className="section-heading">
          {content[language].tokenListings}
        </h2>
        {activeSection === 'listings' && (
          <ul className="section-content">
            <li>1.1. All Tokens: A broad overview of all available tokens on the platform.</li>
            <li>1.2. Listed Tokens: Tokens that have been officially listed and vetted by the platform.</li>
            <li>1.3. Non-listed Tokens: Tokens that are available but not officially listed, providing users with opportunities to discover new or emerging tokens.</li>
          </ul>
        )}
      </div>

      {/* Section: How to Apply Your Token on Binege */}
      <div className="section">
        <h2 onClick={() => toggleSection('applyToken')} className="section-heading">
          {content[language].applyToken}
        </h2>
        {activeSection === 'applyToken' && (
          <ol className="section-content">
            {/* Add steps here as per your requirement */}
            <li>Step 1: Prepare Your Token Information</li>
            <li>Step 2: Choose Your Plan</li>
            <li>Step 3: Connect Your Wallet</li>
            <li>Step 4: Submit Your Token</li>
            <li>Step 5: Wait for Approval</li>
            <li>Step 6: Monitor Your Listing</li>
          </ol>
        )}
      </div>

      {/* Section: What is BNG? */}
      <div className="section">
        <h2 onClick={() => toggleSection('bng')} className="section-heading">
          What is BNG?
        </h2>
        {activeSection === 'bng' && (
          <div className="section-content">
            <img src={bngLogo} alt="BNG Logo" className="bng-logo" />
            <p>{content[language].bng}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>{content[language].footer}</p>
      </footer>
    </div>
  );
};

export default BinegeInfo;
