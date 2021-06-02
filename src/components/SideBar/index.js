import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SideBarElements'
import {FaTimes} from 'react-icons/fa'

const SideBar = ({isOpen, toggle}) => {

    if (isOpen === true){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    } else{
        window.onscroll=function(){};
    }

    return (
        <SideBarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon>
                    <FaTimes />
                </CloseIcon>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="discover" onClick={toggle}>
                        Discover
                    </SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/signin" onClick={toggle}>
                        Sign In
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
