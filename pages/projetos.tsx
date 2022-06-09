import Head from "next/head";
import { Card, Col, Row, Button, Text, Grid, Link, useTheme } from "@nextui-org/react";

export default function Projetos() {
	const { type, isDark } = useTheme();

	return (
		<div>
			<Head>
				<title>Lucas Gardini - Projetos</title>
				<meta name="description" content="Meus projetos!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div style={{ paddingTop: "75px" }}>
				<Grid.Container gap={2} justify={"center"}>
					<Grid xs={12} sm={6}>
						<Card css={{ w: "100%", h: "400px" }}>
							<Card.Header css={{ position: "absolute", zIndex: 1, top: 5, backgroundColor: isDark ? "#111111" : "white" }}>
								<Col>
									<Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
										React, NextJs, Vercel
									</Text>
									<Text h3>Next Load</Text>
								</Col>
							</Card.Header>
							<Card.Body css={{ p: 0 }}>
								<Card.Image src="images/projetos/next-load.png" objectFit="scale-down" width="100%" height="100%" alt="Next Load" />
							</Card.Body>
							<Card.Footer
								css={{
									position: "absolute",
									bgBlur: "#0f111466",
									bottom: 0,
									zIndex: 1,
									backgroundColor: isDark ? "#111111" : "white",
								}}
							>
								<Row>
									<Col>
										<Row>
											<Col>
												<Text size={12}>Download de músicas do youtube</Text>
											</Col>
										</Row>
									</Col>
									<Col>
										<Row justify="flex-end">
											<Button auto rounded color="success">
												<Link href="https://next-load.vercel.app/" target="_blank" css={{ color: "white" }}>
													Acessar
												</Link>
											</Button>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Grid>

					<Grid xs={12} sm={6}>
						<Card css={{ w: "100%", h: "400px" }}>
							<Card.Header css={{ position: "absolute", zIndex: 1, top: 5, backgroundColor: isDark ? "#111111" : "white" }}>
								<Col>
									<Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
										React, Vite
									</Text>
									<Text h3>Interface de Feedback</Text>
								</Col>
							</Card.Header>
							<Card.Body css={{ p: 0 }}>
								<Card.Image
									src="images/projetos/feedback.png"
									objectFit="scale-down"
									width="100%"
									height="100%"
									alt="Feedback Page"
								/>
							</Card.Body>
							<Card.Footer
								css={{
									position: "absolute",
									bgBlur: "#0f111466",
									bottom: 0,
									zIndex: 1,
									backgroundColor: isDark ? "#111111" : "white",
								}}
							>
								<Row>
									<Col>
										<Row>
											<Col>
												<Text size={12}>Cópia de uma das telas de uma nlw</Text>
											</Col>
										</Row>
									</Col>
									<Col>
										<Row justify="flex-end">
											<Button auto rounded color="success">
												<Link
													href="https://website-feedback-react-rocketseat.vercel.app/"
													target="_blank"
													css={{ color: "white" }}
												>
													Acessar
												</Link>
											</Button>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Grid>

					<Grid xs={12} sm={6}>
						<Card css={{ w: "100%", h: "400px" }}>
							<Card.Header css={{ position: "absolute", zIndex: 1, top: 5, backgroundColor: isDark ? "#111111" : "white" }}>
								<Col>
									<Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
										Typescript, Discord.js, ytdl-core
									</Text>
									<Text h3>AIO - Bot</Text>
								</Col>
							</Card.Header>
							<Card.Body css={{ p: 0 }}>
								<Card.Image
									src="images/projetos/discord-bot.png"
									objectFit="scale-down"
									width="100%"
									height="100%"
									alt="Discord Bot"
								/>
							</Card.Body>
							<Card.Footer
								css={{
									position: "absolute",
									bgBlur: "#0f111466",
									bottom: 0,
									zIndex: 1,
									backgroundColor: isDark ? "#111111" : "white",
								}}
							>
								<Row>
									<Col>
										<Row>
											<Col>
												<Text size={12}>Bot de várias funções para o discord</Text>
											</Col>
										</Row>
									</Col>
									<Col>
										<Row justify="flex-end">
											<Button auto rounded color="success">
												<Link
													href="https://github.com/Lucas-Gardini/aio-discord-bot"
													target="_blank"
													css={{ color: "white" }}
												>
													Acessar
												</Link>
											</Button>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Grid>

					<Grid xs={12} sm={6}>
						<Card css={{ w: "100%", h: "400px" }}>
							<Card.Header css={{ position: "absolute", zIndex: 1, top: 5, backgroundColor: isDark ? "#111111" : "white" }}>
								<Col>
									<Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
										Electron, Vue, MongoDB, React-Native
									</Text>
									<Text h3>Orderbyte - TCC 2021</Text>
								</Col>
							</Card.Header>
							<Card.Body css={{ p: 0 }}>
								<Card.Image
									src="images/projetos/orderbyte.jpg"
									objectFit="scale-down"
									width="100%"
									height="100%"
									alt="Orderbyte App"
								/>
							</Card.Body>
							<Card.Footer
								css={{
									position: "absolute",
									bgBlur: "#0f111466",
									bottom: 0,
									zIndex: 1,
									backgroundColor: isDark ? "#111111" : "white",
								}}
							>
								<Row>
									<Col>
										<Row>
											<Col>
												<Text size={12}>Aplicação completa para controle de restaurantes</Text>
											</Col>
										</Row>
									</Col>
									<Col>
										<Row justify="flex-end">
											<Button auto rounded color="success">
												<Link href="https://github.com/Lucas-Gardini/TCC-REDES-2021" target="_blank" css={{ color: "white" }}>
													Acessar
												</Link>
											</Button>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Grid>
				</Grid.Container>
			</div>
		</div>
	);
}
