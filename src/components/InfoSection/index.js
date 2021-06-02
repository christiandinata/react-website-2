import React, { useContext, useEffect } from "react";
import { Button } from "../ButtonElement";
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from "./InfoElements";
import { useCount, UserContext } from "../../UserContext";

const InfoSection = ({
	id,
	lightBg,
	imgStart,
	topLine,
	lightText,
	headline,
	description,
	darkText,
	primary,
	dark,
	dark2,
	buttonLabel,
	img,
	alt,
	nominal,
	target,
}) => {
	// useEffect( () => {
	//       const countData = window.localStorage.getItem('count-key')
	//       setCount(JSON.parse(countData));
	//     }, [])

	//     useEffect( () => {
	//       window.localStorage.setItem('count-key', JSON.stringify(count))
	//     })

	// const [movies, setMovies] = useContext(MovieContext)

	// const addMovie = e => {
	//   e.preventDefault();
	//   setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
	// }

	const { user, count, toggleCount } = useContext(UserContext);
	function callConsole() {
		console.log(count, user);
	}

	return (
		callConsole(),
		(
			<>
				<InfoContainer id={id} lightBg={lightBg}>
					<InfoWrapper>
						<InfoRow imgStart={imgStart}>
							<Column1>
								<TextWrapper>
									<TopLine>{topLine}</TopLine>
									<Heading lightText={lightText}>
										{headline}
									</Heading>
									<Subtitle darkText={darkText}>
										{description}
									</Subtitle>
									<BtnWrap>
										<Button
											smooth={true}
											duration={500}
											spy={true}
											exact="true"
											offset={-80}
											primary={primary ? 1 : 0}
											dark={dark ? 1 : 0}
											dark2={dark2 ? 1 : 0}
											to={target}
											onDoubleClick={toggleCount}>
											{buttonLabel}
										</Button>
									</BtnWrap>
								</TextWrapper>
							</Column1>
							<Column2>
								<ImgWrap>
									<Img src={img} alt={alt} />
								</ImgWrap>
							</Column2>
							<h2 style={{ color: "pink" }}>
								Count with me: {count}
							</h2>
						</InfoRow>
					</InfoWrapper>
				</InfoContainer>
			</>
		)
	);
};

export default InfoSection;
