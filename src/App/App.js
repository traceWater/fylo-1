import React from 'react';
// import React, { useState } from 'react';
import './App.scss';
import {Nav} from '../Nav/Nav';
import {Footer} from '../Footer/Footer';
import {DivPctTxtForm} from '../DivPctTxtForm/DivPctTxtForm';
import {DivAttr} from '../DivAttr/DivAttr';
import {DivQuotes} from '../DivAttr/DivQuotes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.propsNav = {
      imgSrc: "./images/logo-white.svg",
      items: [{
                name: 'Features',
                link: "#features"
              },
              {
                name: 'Team',
                link: '#team'
              },
              {
                name: 'Sign In',
                link: '#signIn'
              }]
    };

    this.propsDivIntro = {
      name: 'divIntro',
      isBtnOrFormOrLnk: 'button',
      imgSrc: './images/illustration-intro.png',
      h1Txt: 'All your files in one secure location, accessible anywhere.',
      pTxt: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collabroate with friends family, and co-workers.',
      btnLnkTxt: 'Get Started',
      linkTxtImg: ''
    };

    this.propsDivFeatures = {
      name: "divAttr",
      imgSrc: './images/bg-curvy-desktop.svg',
      nav: "features"
    };

    this.propsDivFeaturesSingle = [
      {
        name: 'divAttrSingle',
        imgSrc: './images/icon-access-anywhere.svg',
        h1Txt: 'Access your Files, anywhere',
        pTxt: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
      },
      {
        name: 'divAttrSingle',
        imgSrc: './images/icon-security.svg',
        h1Txt: 'Security you can trust',
        pTxt: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
      },
      {
        name: 'divAttrSingle',
        imgSrc: './images/icon-collaboration.svg',
        h1Txt: 'Real-time collaboration',
        pTxt: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
      },
      {
        name: 'divAttrSingle',
        imgSrc: './images/icon-any-file.svg',
        h1Txt: 'Store any type of file',
        pTxt: 'Whether youre sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
      }
    ];

    this.propsDivProd = {
      name: 'divProd',
      isBtnOrFormOrLnk: 'link_W_Img',
      imgSrc: './images/illustration-stay-productive.png',
      h1Txt: 'Stay productive, wherever you are.',
      pTxt: 'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. Securely share files and folders with friends, family and colleagues for live collaboration. No email attachements required.',
      btnLnkTxt: 'See how Fylo works',
      linkTxtImg: './images/icon-arrow.svg'
    };

    this.propsDivQuotes = {
      name: 'divQuotes',
      name2: 'divQuotesSingleBody',
      imgSrc: './images/bg-quotes.png',
      nav: "team"
    };

    this.propsDivQuotesSingle = [
      {
        name: 'divQuotesSingle',
        imgSrc: '',
        h1Txt: '',
        pTxt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        imgSrcSm: './images/profile-1.jpg',
        h1Sm: 'Satish Patel',
        h2Sm: 'Founder & CEO, Huddle'
      },
      {
        name: 'divQuotesSingle',
        imgSrc: '',
        h1Txt: '',
        pTxt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        imgSrcSm: './images/profile-2.jpg',
        h1Sm: 'Bruce McKenzie',
        h2Sm: 'Founder & CEO, Huddle'
      },
      {
        name: 'divQuotesSingle',
        imgSrc: '',
        h1Txt: '',
        pTxt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        imgSrcSm: './images/profile-3.jpg',
        h1Sm: 'Iva Boyd',
        h2Sm: 'Founder & CEO, Huddle'
      }
    ];

    this.propsDivEarlyAccess = {
      name: 'divEarlyAccess',
      nav: 'signIn',
      isBtnOrFormOrLnk: 'form',
      imgSrc: '',
      h1Txt: 'Get early access today',
      pTxt: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.',
      formPlaceholder: 'email@example.com',
      btnLnkTxt: 'Get Started For Free',
      linkTxtImg: ''
    };

    this.handleGetStarted = this.handleGetStarted.bind(this);
  }

  handleGetStarted(event) {
    alert('Letz get started');
  }

  render() {
    return (
      <div className="App">
        <Nav propsDiv={this.propsNav} />
        <DivPctTxtForm propsDiv={this.propsDivIntro} startEvent={this.handleGetStarted} />
        <DivAttr propsDiv={this.propsDivFeatures} propsDivSingle={this.propsDivFeaturesSingle}/>
        <DivPctTxtForm propsDiv={this.propsDivProd} startEvent={this.handleGetStarted} />
        <DivQuotes propsDiv={this.propsDivQuotes} propsDivSingle={this.propsDivQuotesSingle} />
        <DivPctTxtForm propsDiv={this.propsDivEarlyAccess} startEvent={this.handleGetStarted} />
        <Footer />
      </div>
    );
  }
}

export default App;
