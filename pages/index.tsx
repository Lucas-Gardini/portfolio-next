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

			<main className={styles.main}></main>
		</div>
	);
}
