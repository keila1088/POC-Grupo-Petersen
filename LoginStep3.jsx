import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import {
	BackgroundImage,
	OffLayout,
	Header,
	Content,
	Actions,
	Button,
	H2,
	H1,
	Icon,
	P,
	LinkStyled,
	Footer
} from '../_layout';
import TextField from '../_components/TextField';

export default function LoginStep3() {
	return (
		<BackgroundImage>
			<OffLayout center={isBrowser} backgroundOpacity loginWrapper>
				<Header>
					<H2>TechBank</H2>
					<Icon shape="close" />
				</Header>
				<Content left>
					<P>
						Verifica que esta sea tu imagen de seguridad, si no lo es comunicate con el centro de atención
						del banco
					</P>
					<TextField NoMarginBottom label="Contraseña" placeholder="contraseña" />
					<LinkStyled flexStart to="/loginStep1">
						Recuperar contraseña
					</LinkStyled>
				</Content>
				<Actions center>
					<Button>Continuar</Button>
				</Actions>
				{isBrowser && (
					<Footer>
						<LinkStyled flexStart to="/">
							Politicas de privacidad
						</LinkStyled>
						<LinkStyled flexStart to="/">
							Terminos y condiciones
						</LinkStyled>
						<LinkStyled flexStart to="/">
							Soporte
						</LinkStyled>
					</Footer>
				)}
			</OffLayout>
		</BackgroundImage>
	);
}
