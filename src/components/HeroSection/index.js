import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroHeading, HeroText, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => setHover(!hover);

    return (
        <>
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBg>
                <HeroContent>
                    <HeroHeading>Virtual Pet Made Great Company</HeroHeading>
                    <HeroText>Sign up for a new account today and receive the rare pet headband New Year Special!</HeroText>
                    <HeroBtnWrapper>
                        <Button 
                        smooth={true}
                        offset={-80}
                        spy={true}
                        to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        >
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
