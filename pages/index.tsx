import { Avatar, Card, Link, Text, useTheme } from "@nextui-org/react";

import Head from "next/head";
import { useRef } from "react";
import Technologies from "../components/Technologies";
import styles from "../styles/Home.module.css";

export default function Home() {
	const aboutRef = useRef(null);

	return (
		<div className={styles.container}>
			<Head>
				<title>Lucas Gardini - Portfólio</title>
				<meta name="description" content="Meu portfólio feito com muito carinho e cheio de informações pra você que quer me conhecer mais!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<div className="sides" style={{ marginTop: "60px", width: "100%" }}>
					<div className="left-side">
						<div style={{ margin: "auto" }}>
							<Text h1 size={60}>
								Lucas Gardini Dias
							</Text>
							<Text
								h2
								size={60}
								css={{
									textGradient: "45deg, $green600 -20%, $green800 100%",
								}}
								weight="bold"
							>
								Programador Fullstack
							</Text>
						</div>
					</div>
					<div className="right-side">
						<Avatar style={{ margin: "auto", zIndex: 1 }} css={{ size: "$80" }} size="xl" src="images/me.png" />
					</div>

					<a
						onClick={() => {
							aboutRef.current.scrollIntoView({ behavior: "smooth" });
						}}
					>
						<span className="scroll"></span>
					</a>
				</div>
			</main>

			<div style={{ paddingTop: "50px" }} id="sobre" ref={aboutRef}>
				<div>
					<Text
						className="title-section"
						css={{
							textGradient: "45deg, $green600 -20%, $green800 100%",
						}}
						weight="bold"
					>
						Sobre mim
					</Text>
					<Text css={{ textAlign: "justify", textJustify: "inter-word" }}>
						Formado em Redes de Computadores pelo{" "}
						<Link href="https://www.ctd.ifsp.edu.br/" target="_blank" rel="noreferrer">
							Instituto Federal de São Paulo Câmpus Catanduva
						</Link>
						. <br />
						Comecei a programar em 2019 no inicio do curso e desde então estou aprendendo mais a cada dia. Comecei com Python e depois
						PHP. Mas acabei me encontrando no Javascript. Desde então meu foco é aprimorar minhas habilidades tanto no front-end quanto no
						back-end.
						<br />
						Tenho experiência na criação de aplicações web, mobile, desktop e APIs.
						<br />
						Também tnho um pouco de conhecimento em computação em nuvem com{" "}
						<Link href="https://aws.amazon.com/pt/" target="_blank" rel="noreferrer">
							AWS
						</Link>
						, automatização de tarefas com python e web scraping.
						<br />
						Quer saber mais sobre meus projetos? Acesse a aba{" "}
						<Link href="/projetos" rel="noreferrer">
							Projetos
						</Link>{" "}
						ou dê uma conferida no meu{" "}
						<Link href="https://github.com/Lucas-Gardini" target="_blank" rel="noreferrer">
							GitHub
						</Link>
						.
						<hr />
						<br />
						Gosta de música? Dê uma olhada na minha playlist ao lado! (ou abaixo se estiver no celular)
					</Text>
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Text
						css={{
							textGradient: "45deg, $green600 -20%, $green800 100%",
						}}
						weight="bold"
						className="title-section"
					>
						A melhor playlist que você vai ouvir
					</Text>
					<iframe
						className="spotify"
						style={{ margin: "auto" }}
						src="https://open.spotify.com/embed/playlist/1HOkicCnoebesus1oiHE91?utm_source=generator"
						frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				</div>
			</div>
			<div style={{ marginLeft: "5px", marginRight: "5px" }}>
				<Text
					className="title-section"
					css={{
						textGradient: "45deg, $green600 -20%, $green800 100%",
						marginTop: "50px",
					}}
					weight="bold"
				>
					Tecnologias
				</Text>
				<Technologies />
			</div>
		</div>
	);
}
