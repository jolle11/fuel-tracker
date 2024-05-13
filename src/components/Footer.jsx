import { Container, Group, Flex, Button } from "@mantine/core";
import { Github, Instagram, Linkedin, Twitter } from "iconoir-react";
import { Link } from "react-router-dom";

export function Footer() {
	return (
		<footer>
			<Container size={"lg"}>
				<Flex justify={"space-between"} wrap={"wrap"}>
					<Link to="https://www.jordi-olle.com">
						<Button
							my={12}
							radius={"xl"}
							variant="gradient"
							gradient={{ from: "indigo", to: "teal", deg: 135 }}
						>
							jordi0lle
						</Button>
					</Link>
					<Group gap={0} wrap="nowrap">
						<Link to="https://github.com/jolle11">
							<Button size="sm" color="indigo.9" variant="subtle" m={3} p={5}>
								<Github />
							</Button>
						</Link>
						<Link to="https://www.linkedin.com/in/jordi-oll%C3%A9-ballest%C3%A9-8398b181/">
							<Button size="sm" color="indigo.9" variant="subtle" m={3} p={5}>
								<Linkedin />
							</Button>
						</Link>
						<Link to="https://twitter.com/jordi0lle">
							<Button size="sm" color="indigo.9" variant="subtle" m={3} p={5}>
								<Twitter />
							</Button>
						</Link>
						<Link to="https://www.instagram.com/jordi0lle/">
							<Button size="sm" color="indigo.9" variant="subtle" m={3} p={5}>
								<Instagram />
							</Button>
						</Link>
					</Group>
				</Flex>
			</Container>
		</footer>
	);
}
