import { Avatar, Button, Text } from "@nextui-org/react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, MdFacebook } from "../components/_icons";

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
				<div className="content">
					<div className="container">
						<motion.div
							animate={{
								transition: { duration: 1.2 },
								scale: [1.25, 1],
								borderRadius: ["20%", "100%"],
							}}
							transition={{ duration: 0.5 }}
							className="faded-border"
						>
							<Avatar style={{ opacity: 1 }} className="me" size="lg" src="images/me.jpg" color="success" bordered />
						</motion.div>
						<div className="contact">
							<Text className="impact">LUCAS GARDINI DIAS</Text>
							<Text>Desenvolvedor Web e Mobile</Text>

							<div className="social">
								<Avatar squared icon={<MdFacebook />} />
								<Avatar squared icon={<FaGithub />} />
								<Avatar squared icon={<FaLinkedin />} />
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
