import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia
, SocialMediaWrapper, SocialIconLink, SocialLogo, SocialIcons, WebsiteRights} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleToTop = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/">How it works</FooterLink>
                                    <FooterLink to="/">Testimonials</FooterLink>
                                    <FooterLink to="/">Careers</FooterLink>
                                    <FooterLink to="/">Investors</FooterLink>
                                    <FooterLink to="/">Terms of Service</FooterLink>             
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLink to="/">Contact</FooterLink>
                                    <FooterLink to="/">Support</FooterLink>
                                    <FooterLink to="/">Destinations</FooterLink>
                                    <FooterLink to="/">Sponsorships</FooterLink>          
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                    <FooterLink to="/">Submit Video</FooterLink>
                                    <FooterLink to="/">Ambassadors</FooterLink>
                                    <FooterLink to="/">Agency</FooterLink>
                                    <FooterLink to="/">Influencer</FooterLink>         
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterLink to="/">Instagram</FooterLink>
                                    <FooterLink to="/">Facebook</FooterLink>
                                    <FooterLink to="/">Youtube</FooterLink>
                                    <FooterLink to="/">Twitter</FooterLink>           
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrapper>
                            <SocialLogo to="/" onClick={toggleToTop}>
                                PetMe
                            </SocialLogo>
                            <WebsiteRights>PetMe since {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink to="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink to="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink to="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink to="//www.twitter.com/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink to="/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrapper>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
