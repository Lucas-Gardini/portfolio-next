import { Image } from "@nextui-org/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lucas Gardini - Portfólio</title>
				<meta name="description" content="Meu portfólio feito com muito carinho e cheio de informações pra você que quer me conhecer mais!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<Image
					containerCss={{ width: "50%", marginRight: "auto" }}
					style={{ marginRight: "auto" }}
					width={256}
					height={512}
					src="/Lucas Gardini.jpg"
					alt="Imagem do criador"
					objectFit="cover"
				/>
			</main>
		</div>
	);
}
