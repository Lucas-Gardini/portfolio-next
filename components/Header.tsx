import { Container, Card, Row, Button, Col, Switch } from "@nextui-org/react";
import { useSpring, animated } from "react-spring";
import { GiPenguin, FaSun, FaMoon } from "./_icons";
import useDarkMode from "use-dark-mode";

export default function App() {
	const darkMode = useDarkMode(false);
	const topdown = useSpring({ from: { top: -100 }, to: { top: 0 }, config: { bounce: 1 } });

	return (
		<animated.div style={{ position: "fixed", width: "100%", ...topdown }}>
			<Container style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "100%" }}>
				<Card style={{ borderWidth: 0, borderRadius: 0, width: "100%" }}>
					<Row justify="space-between">
						<Col style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
							<GiPenguin />
						</Col>

						<Col style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<Button.Group size="sm" color="success">
								<Button>One</Button>
								<Button>Two</Button>
								<Button>Three</Button>
							</Button.Group>
						</Col>

						<Col style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
							<Switch
								color={"success"}
								checked={darkMode.value}
								iconOn={<FaSun color={darkMode.value ? "#fff" : "#21222c"} />}
								iconOff={<FaMoon color={darkMode.value ? "#fff" : "#21222c"} />}
								onChange={(value) => {
									if (value.target.checked === true) {
										darkMode.enable();
									} else {
										darkMode.disable();
									}
								}}
							/>
						</Col>
					</Row>
				</Card>
			</Container>
		</animated.div>
	);
}
