import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiNodedotjs,
	SiTypescript,
	SiNodemon,
	SiPm2,
	SiNestjs,
	SiReact,
	SiExpo,
	SiVuedotjs,
	SiVuetify,
	SiNuxtdotjs,
	SiNextdotjs,
	SiBootstrap,
	SiPython,
	SiElectron,
	SiAmazonaws,
	SiDocker,
	SiExpress,
	SiMysql,
	SiMongodb,
	SiGit,
	SiVisualstudio,
	SiUnity,
	SiPostman,
	SiInsomnia,
	SiPhotopea,
	SiAdobephotoshop,
	SiUbuntu,
	SiFirebase,
	SiDiscord,
	SiMicrosoftoffice,
	SiLibreoffice,
	SiVercel,
	SiMarkdown,
	SiMicrosoftedge,
	SiMicrosoftsqlserver,
	SiBrave,
} from "./Icons";
import { Button, Table, Text } from "@nextui-org/react";

export default function Technologies() {
	return (
		<div style={{ marginLeft: "5px", marginRight: "5px" }}>
			<p>Verde = boa</p> <p>Amarelo = mediana</p> <p>Vermelho = pouca</p>
			<Text
				css={{
					textGradient: "45deg, $green600 -50%, $purple600 100%",
				}}
				weight="bold"
			>
				Linguagens que não são de programação
			</Text>
			<Table
				aria-label="Tabela de conhecimentos de linguagens que não são de programação"
				css={{
					height: "auto",
					minWidth: "100%",
				}}
			>
				<Table.Header>
					<Table.Column>Linguagem</Table.Column>
					<Table.Column>Tempo de Experiência</Table.Column>
					<Table.Column>Habilidade</Table.Column>
				</Table.Header>
				<Table.Body>
					<Table.Row key="1">
						<Table.Cell>
							<SiHtml5 /> HTML
						</Table.Cell>
						<Table.Cell>3 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="2">
						<Table.Cell>
							<SiCss3 /> CSS
						</Table.Cell>
						<Table.Cell>3 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="3">
						<Table.Cell>
							<SiMarkdown /> MarkDown
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
			<Text
				css={{
					textGradient: "45deg, $green600 -50%, $purple600 100%",
				}}
				weight="bold"
			>
				Linguagens de Programação
			</Text>
			<Table
				aria-label="Tabela de conhecimentos de linguagens  de programação"
				css={{
					height: "auto",
					minWidth: "100%",
				}}
			>
				<Table.Header>
					<Table.Column>Linguagem</Table.Column>
					<Table.Column>Tempo de Experiência</Table.Column>
					<Table.Column>Habilidade</Table.Column>
				</Table.Header>
				<Table.Body>
					<Table.Row key="1">
						<Table.Cell>
							<SiJavascript /> <SiNodedotjs /> Javascript
						</Table.Cell>
						<Table.Cell>3 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="2">
						<Table.Cell>
							<SiTypescript /> Typescript
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="3">
						<Table.Cell>
							<SiPython /> Python
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
			<Text
				css={{
					textGradient: "45deg, $green600 -50%, $purple600 100%",
				}}
				weight="bold"
			>
				Frameworks e Bibliotecas
			</Text>
			<Table
				aria-label="Tabela de conhecimentos de Bibliotecas e Frameworks"
				css={{
					height: "auto",
					minWidth: "100%",
				}}
			>
				<Table.Header>
					<Table.Column>Framework ou Bilbioteca</Table.Column>
					<Table.Column>Tempo de Experiência</Table.Column>
					<Table.Column>Habilidade</Table.Column>
				</Table.Header>
				<Table.Body>
					<Table.Row key="1">
						<Table.Cell>
							<SiVuedotjs /> Vue.js
						</Table.Cell>
						<Table.Cell>3 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="2">
						<Table.Cell>
							<SiVuetify /> Vuetify
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="3">
						<Table.Cell>
							<SiNuxtdotjs /> Nuxt.js
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="4">
						<Table.Cell>
							<SiReact /> React e React-Native
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="5">
						<Table.Cell>
							<SiExpo /> Expo
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="6">
						<Table.Cell>
							<SiNextdotjs /> Next.js
						</Table.Cell>
						<Table.Cell>3 meses</Table.Cell>
						<Table.Cell>
							<Button auto color="error" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="7">
						<Table.Cell>
							<SiExpress /> Express
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="8">
						<Table.Cell>
							<SiNestjs /> Nest.js
						</Table.Cell>
						<Table.Cell>6 meses</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="9">
						<Table.Cell>
							<SiPm2 /> PM2
						</Table.Cell>
						<Table.Cell>6 meses</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="10">
						<Table.Cell>
							<SiNodemon /> Nodemon
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="11">
						<Table.Cell>
							<SiElectron /> Electron
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="12">
						<Table.Cell>
							<SiBootstrap /> Bootstrap
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
			<Text
				css={{
					textGradient: "45deg, $green600 -50%, $purple600 100%",
				}}
				weight="bold"
			>
				Bancos de dados
			</Text>
			<Table
				aria-label="Tabela de conhecimentos de bancos de dados"
				css={{
					height: "auto",
					minWidth: "100%",
				}}
			>
				<Table.Header>
					<Table.Column>Banco de Dados</Table.Column>
					<Table.Column>Tempo de Experiência</Table.Column>
					<Table.Column>Habilidade</Table.Column>
				</Table.Header>
				<Table.Body>
					<Table.Row key="1">
						<Table.Cell>
							<SiMysql /> MySql
						</Table.Cell>
						<Table.Cell>3 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="2">
						<Table.Cell>
							<SiMongodb /> MongoDB
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="3">
						<Table.Cell>
							<SiMicrosoftsqlserver /> MS Sql Server
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="4">
						<Table.Cell>
							<SiFirebase /> Firestore
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
			<Text
				css={{
					textGradient: "45deg, $green600 -50%, $purple600 100%",
				}}
				weight="bold"
			>
				Plataformas e Ferramentas
			</Text>
			<Table
				aria-label="Tabela de conhecimentos de plataformas e ferramentas"
				css={{
					height: "auto",
					minWidth: "100%",
				}}
			>
				<Table.Header>
					<Table.Column>Plataforma ou Ferramenta</Table.Column>
					<Table.Column>Tempo de Experiência</Table.Column>
					<Table.Column>Habilidade</Table.Column>
				</Table.Header>
				<Table.Body>
					<Table.Row key="1">
						<Table.Cell>
							<SiAmazonaws /> AWS
						</Table.Cell>
						<Table.Cell>3 meses</Table.Cell>
						<Table.Cell>
							<Button auto color="error" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="2">
						<Table.Cell>
							<SiDocker /> Docker
						</Table.Cell>
						<Table.Cell>1 mês</Table.Cell>
						<Table.Cell>
							<Button auto color="error" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="3">
						<Table.Cell>
							<SiGit /> Git
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="4">
						<Table.Cell>
							<SiVisualstudio /> Visual Studio Code
						</Table.Cell>
						<Table.Cell>3 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="5">
						<Table.Cell>
							<SiPostman /> Postman
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="6">
						<Table.Cell>
							<SiInsomnia /> Insomnia
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="7">
						<Table.Cell>
							<SiPhotopea /> Photopea
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="8">
						<Table.Cell>
							<SiAdobephotoshop /> Photoshop
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="9">
						<Table.Cell>
							<SiDiscord /> Discord
						</Table.Cell>
						<Table.Cell>6 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="10">
						<Table.Cell>
							<SiMicrosoftoffice /> Office
						</Table.Cell>
						<Table.Cell>6 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="11">
						<Table.Cell>
							<SiLibreoffice /> LibreOffice
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="warning" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="12">
						<Table.Cell>
							<SiMicrosoftedge /> <SiBrave /> Edge e Brave
						</Table.Cell>
						<Table.Cell>4 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="13">
						<Table.Cell>
							<SiVercel /> Vercel
						</Table.Cell>
						<Table.Cell>2 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="14">
						<Table.Cell>
							<SiUnity /> Unity
						</Table.Cell>
						<Table.Cell>3 anos</Table.Cell>
						<Table.Cell>
							<Button auto color="error" rounded />
						</Table.Cell>
					</Table.Row>
					<Table.Row key="15">
						<Table.Cell>
							<SiUbuntu /> Ubuntu
						</Table.Cell>
						<Table.Cell>1 ano</Table.Cell>
						<Table.Cell>
							<Button auto color="success" rounded />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	);
}
