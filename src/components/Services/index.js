import React, { useState, useEffect } from "react";
import {
	ServicesContainer,
	ServicesHeading,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesText,
	ServicesDesc,
	BSTest,
	BadgeHover,
} from "./ServicesElements";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Tooltip } from "reactstrap";
import "./index.css";
import { AnimatePresence, motion } from "framer-motion";
import { Progress } from "reactstrap";
import axios from "axios";

const Services = ({ msg }) => {
	const [modal, setModal] = useState(false);
	const [display, setDisplay] = useState("A");
	const [progressVal, setProgressVal] = useState(0);
	const handleProgress = (inc) => {
		if (progressVal === 100) {
			inc > 0 ? setProgressVal(100) : setProgressVal(progressVal + inc);
		} else if (progressVal === 0) {
			inc < 0 ? setProgressVal(0) : setProgressVal(progressVal + inc);
		} else {
			setProgressVal(progressVal + inc);
		}
	};

	const [tooltipOpen, setTooltipOpen] = useState(false);
	const tagVariants = {
		show: {
			opacity: 1,
			transition: {
				delay: 1,
				duration: 0.5,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const toggle = () => {
		setModal(!modal);
	};

	useEffect(() => {
		setModal(!modal);
	}, []);

	const [akun, setAkun] = useState([]);

	return (
		<div>
			<ServicesContainer id="services" className="servicescontainer">
				<ServicesHeading>Our Services</ServicesHeading>
				<ServicesWrapper>
					<div className="row ml-2 mr-2">
						<div class="col-lg-4 h-100 mb-4 d-flex justify-content-center">
							<ServicesCard>
								<ServicesIcon src={Icon1} />
								<ServicesText>Reduce expenses</ServicesText>
								<ServicesDesc>
									We help reduce your fees and increase your
									overall revenue.
								</ServicesDesc>
							</ServicesCard>
						</div>
						<div class="col-lg-4 h-100 mb-4 d-flex justify-content-center">
							<ServicesCard>
								<ServicesIcon src={Icon2} />
								<ServicesText>Virtual Offices</ServicesText>
								<ServicesDesc>
									You can access our platform online anywhere
									in the world.
								</ServicesDesc>
							</ServicesCard>
						</div>
						<div class="col-lg-4 h-100 d-flex justify-content-center">
							<ServicesCard>
								<ServicesIcon src={Icon3} />
								<ServicesText>Premium Benefits</ServicesText>
								<ServicesDesc>
									Unlock our special membership card that
									returns 5% cash back.
								</ServicesDesc>
							</ServicesCard>
						</div>
					</div>
				</ServicesWrapper>
				<BSTest className="p-4 mb-5 rounded-lg" onClick={toggle}>
					perfection
				</BSTest>
				<button onClick={() => setDisplay("A")}>Display A</button>
				<AnimatePresence>
					{display === "A" ? (
						<motion.h1
							style={{ color: "white" }}
							layout
							key="a"
							variants={tagVariants}
							initial="hidden"
							animate="show"
							exit="hidden">
							This is Display A
						</motion.h1>
					) : null}
				</AnimatePresence>
				<AnimatePresence>
					<button onClick={() => setDisplay("B")}>Display B</button>
					{display === "B" ? (
						<motion.h1
							style={{ color: "white" }}
							layout
							key="b"
							variants={tagVariants}
							initial="hidden"
							animate="show"
							exit="hidden">
							This is Display B
						</motion.h1>
					) : null}
				</AnimatePresence>
				<button onClick={() => setDisplay("C")}>Display C</button>
				{display === "C" ? (
					<h1 style={{ color: "white" }}>This is Display C</h1>
				) : null}
				<br />
				<div>
					<p style={{ color: "#fff" }}>
						Somewhere in here is a{" "}
						<span
							style={{ color: "hotpink", cursor: "pointer" }}
							id="TooltipExample">
							tooltip
						</span>
						.
					</p>
					<Tooltip
						placement="bottom"
						isOpen={tooltipOpen}
						target="TooltipExample"
						toggle={() => setTooltipOpen(!tooltipOpen)}>
						Hello world!
					</Tooltip>
				</div>
				<div>
					<Progress value={progressVal} style={{ color: "#000" }}>
						{progressVal}%
					</Progress>
					<button
						onClick={() => {
							handleProgress(10);
						}}>
						increase progress
					</button>
					<button
						onClick={() => {
							handleProgress(-10);
						}}>
						decrease progress
					</button>
				</div>

				<div>
					<Modal isOpen={modal} toggle={toggle} centered={true}>
						<ModalHeader toggle={toggle}>Modal title</ModalHeader>
						<ModalBody>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</ModalBody>
						<ModalFooter>
							<Button color="primary" onClick={toggle}>
								Do Something
							</Button>{" "}
							<Button color="secondary" onClick={toggle}>
								Cancel
							</Button>
						</ModalFooter>
					</Modal>
				</div>
			</ServicesContainer>
		</div>
	);
};

export default Services;
