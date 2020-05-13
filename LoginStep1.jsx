import React from 'react';
import { BackgroundImage, OffLayout, Header, Center, Right, Content, Actions, Button, H2, Icon } from '../_layout';
import { Link } from 'react-router-dom';
import Logo from './BankLogo';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


export default function LoginStep1() {
	return (
		<BackgroundImage>
			<OffLayout center={isBrowser} backgroundOpacity loginWrapper>
				<Header />
				<Content center>
					<Logo />
				</Content>
				<Actions center>
					<Button>Continuar</Button>
					<Button>Continuar</Button>
				</Actions>
			</OffLayout>
		</BackgroundImage>
	);
}
