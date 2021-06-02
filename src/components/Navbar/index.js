import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink} from './NavbarElements.js'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {

    const [scrolled, setScrolled] = useState(false)

    const handleScrolled = () => {
        if (window.scrollY >= 80){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }

    useEffect( () => {
        handleScrolled();
    }, []);

    window.addEventListener('scroll', handleScrolled);

    const toggleToTop = () => {
        scroll.scrollToTop()
    }


    return (
        <>
            <Nav scrolled={scrolled}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleToTop}>
                        PetMe
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks smooth={true} duration={500} offset={-80} spy={true} exact="true" to="about">About</NavLinks>
                            <NavLinks smooth={true} duration={500} offset={-80} spy={true} exact="true" to="discover">Discover</NavLinks>
                            <NavLinks smooth={true} duration={500} offset={-80} spy={true} exact="true" to="services">Services</NavLinks>
                            <NavLinks smooth={true} duration={500} offset={-80} spy={true} exact="true" to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
