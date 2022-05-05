import { Container, Card, Row, Button, Col, Switch } from "@nextui-org/react";
import { useSpring, animated } from "react-spring";
import { GiPenguin, FaSun, FaMoon } from "./_icons";
import useDarkMode from "use-dark-mode";
import { useEffect, useState } from "react";

export default function Header() {
	const darkMode = useDarkMode(false);
	const topdown = useSpring({ from: { top: -100 }, to: { top: 0 }, config: { bounce: 1 } });

	const [scrolled, setScrolled] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrolled(position);
	};

	return (
		<animated.div style={{ position: "fixed", width: "100%", zIndex: 9, ...topdown }}>
			<Container style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "100%" }}>
				<Card
					className={"custom-navbar" + (scrolled > 100 ? " blured-navbar" : "")}
					style={{ borderWidth: 0, borderRadius: 0, width: "100%" }}
				>
					<Row justify="space-between">
						<Col style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
							<GiPenguin />
						</Col>

						<Col style={{ display: "flex", flexDirection: "column", alignItems: "center" }}></Col>

						<Col style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
							<Button
								style={{ backgroundColor: "transparent" }}
								onClick={() => {
									if (darkMode.value === false) {
										darkMode.enable();
									} else {
										darkMode.disable();
									}
								}}
								size="md"
								flat
								rounded
								ripple={false}
								auto
								color="error"
								icon={
									darkMode.value ? (
										<FaSun color={darkMode.value ? "#fff" : "#21222c"} />
									) : (
										<FaMoon color={darkMode.value ? "#fff" : "#21222c"} />
									)
								}
							/>
						</Col>
					</Row>
				</Card>
			</Container>
		</animated.div>
	);
}
