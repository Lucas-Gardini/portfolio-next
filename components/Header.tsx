import { Card, Link, Text, useTheme } from "@nextui-org/react";
import { BsLinkedin, FaGithub, BsFacebook, BsMoonFill, BsSunFill } from "./Icons";
import useDarkMode from "use-dark-mode";
import { useEffect, useMemo, useState } from "react";

export default function Header() {
	const darkMode = useDarkMode(false);
	const { type, isDark } = useTheme();
	const [activePageIndex, setActivePageIndex] = useState(0);

	const routes = useMemo(
		() => [
			{ name: "Início", href: "/" },
			{ name: "Sobre", href: "/#sobre" },
			{ name: "Projetos", href: "/projetos" },
			{ name: "Currículo", href: "/curriculo" },
			{ name: "Contato", href: "/contato" },
		],
		[]
	);

	const openInNewTab = (url) => {
		window.open(url, "_blank").focus();
	};

	useEffect(() => {
		const path = window.location.pathname;

		for (const route of routes) {
			if (path === route.href) {
				setActivePageIndex(routes.indexOf(route));
				break;
			}
		}
	}, [routes]);

	return (
		<div>
			<Card css={{ position: "fixed", mw: "100vw", borderRadius: 0, zIndex: 9999999 }} borderWeight="light">
				<Card.Body style={{ display: "flex", flexDirection: "row" }}>
					<Text b={true} style={{ marginRight: "auto" }}>
						Lucas Gardini
					</Text>

					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginLeft: "auto",
							marginRight: "auto",
						}}
					>
						{routes.map((route, index) => (
							<Link
								// color={index === activePageIndex ? "success" : "text"}
								href={route.href}
								style={{ marginRight: "5px", marginLeft: "5px" }}
								key={index}
								css={
									activePageIndex === index
										? {
												textGradient: "45deg, $green600 -20%, $green800 100%",
										  }
										: {
												color: isDark ? "white" : "black",
										  }
								}
							>
								{route.name}
							</Link>
						))}
					</div>

					<div style={{ marginLeft: "auto", marginTop: "2.5px", marginBottom: "auto" }}>
						<BsLinkedin
							onClick={() => {
								openInNewTab("https://www.linkedin.com/in/lucasgardini/");
							}}
							className="social-nav-icon linkedin"
						/>
						<BsFacebook
							onClick={() => {
								openInNewTab("https://www.facebook.com/lucasgardini.dias");
							}}
							className="social-nav-icon facebook"
						/>
						<FaGithub
							onClick={() => {
								openInNewTab("https://github.com/Lucas-Gardini");
							}}
							className="social-nav-icon"
						/>
						{isDark ? (
							<BsSunFill
								className="social-nav-icon sun"
								onClick={() => {
									darkMode.toggle();
								}}
							/>
						) : (
							<BsMoonFill
								className="social-nav-icon"
								onClick={() => {
									darkMode.toggle();
								}}
							/>
						)}
					</div>
				</Card.Body>
			</Card>

			<Text css={{ position: "fixed", bottom: 0, width: "100vw", textAlign: "center", color: isDark ? "white" : "black" }}>
				Copyright © {new Date().getFullYear()}- Lucas Gardini Dias
			</Text>
		</div>
	);
}
