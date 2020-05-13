import React from 'react';
import { BackgroundImage, OffLayout, Header, Content, Actions, Button, H2, Icon } from '../_layout';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import TextField from '../_components/TextField';

export default function LoginStep2() {
	return (
		<BackgroundImage>
			<OffLayout center={isBrowser} backgroundOpacity loginWrapper>
				<Header>
					<H2>Bienvenido</H2>
					{isMobile && <Icon shape="close" />}
				</Header>
				<Content center>
					<TextField label="CORREO ELECTRONICO" placeholder="juanperez@gmail.com" />
					<TextField label="PIN" placeholder="Ej: 1234" />
				</Content>
				<Actions center>
					<Button>Continuar</Button>
				</Actions>
			</OffLayout>
		</BackgroundImage>
	);
}
