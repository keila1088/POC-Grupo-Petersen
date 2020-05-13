import React from 'react';
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile
  } from "react-device-detect";
import styled from 'styled-components';

import Banner from '../_images/banner.jpg';
import { BackgroundImage, OffLayout, Header, Center, Right, Content, Actions, Button, H2, Icon } from '../_layout';

const Image = styled.img`
  width:100%;
`;

export default function Dashboard() {
	return (
		<OffLayout flexStart={isBrowser}>
			<Content>
				<Image src={Banner}/>
            </Content>
			<Actions></Actions>
		</OffLayout>
	);
}
