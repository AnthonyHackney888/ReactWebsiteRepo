import React from 'react'
import {FaTwitter,FaLinkedin} from'react-icons/fa';
import {BsGithub} from'react-icons/bs';



import {FooterContainter,
    FooterSubHeading,
    FooterLink,FooterLinkTitle,
FooterLinkItems,FooterLinksContainer,FooterLinksWrapper,
SocialMedia,
SocialMediaWrapper,
SocialLogo,
SocialIcon,
SocialIcons,
WebsiteRights,
SocialIconLink,
FooterA


} from './Footer.elements'
function Footer() {
  return (
    <FooterContainter>
        
        <FooterSubHeading>
            A downloadable version of my resume in PDF format is included down below
        </FooterSubHeading>
        
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About</FooterLinkTitle>
                    <FooterLink to='/About'> About me </FooterLink>
                    <FooterLink to='/Contact'>Contact</FooterLink>
                    <FooterA href={require("../Resume/Anthony-Hackney_Resume_VGedits(4).pdf")} download='AnthonyHackneyResume'>Resume</FooterA>

                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterA target="_blank" href="https://www.linkedin.com/in/anthony-hackney-6349b4168/">LinkedIn</FooterA>
                    <FooterA target="_blank" href="https://www.Twitter.com">Twitter</FooterA>
                    <FooterA target="_blank" href="https://github.com/AnthonyHackney888">Github</FooterA>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrapper>
                <SocialLogo to="/">
                    <SocialIcon/>
                    AHBCODE
                </SocialLogo>
                <WebsiteRights>AHBCODE © 2022 ahbcode@gmail.com</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='https://www.linkedin.com/in/anthony-hackney-6349b4168/' target="_blank" aria-label="linkedin">
                        <FaLinkedin/>
                    </SocialIconLink>
                    <SocialIconLink href='https://www.Twitter.com' target="_blank" aria-label='Twitter'>
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href="https://github.com/AnthonyHackney888" target="_blank" aria-label='GitHub'>
                        <BsGithub/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrapper>
        </SocialMedia>
    </FooterContainter>
  );
};

export default Footer;