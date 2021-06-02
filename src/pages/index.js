import React, { useState, useContext } from "react";
import AxiosTest from "../components/AxiosTest";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
	homeObjOne,
	homeObjThree,
	homeObjTwo,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import SideBar from "../components/SideBar";
import { login } from "../login";
import { UserContext, UserProvider } from "../UserContext";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<UserProvider>
			<SideBar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<Services />
			{/* <div style={{ color: "#fff" }}>
				<pre style={{ color: "#fff" }}>
					{JSON.stringify(user, null, 2)}
				</pre>
				{user ? (
					<button
						onClick={ () => {
							setUser(null);
						}}>
						Logout
					</button>
				) : (
					<button
						onClick={() => {
							const newUser = login();
							setUser(newUser);
						}}>
						Login
					</button>
				)}
			</div> */}
			<InfoSection {...homeObjThree} />
		</UserProvider>
	);
};

export default Home;
