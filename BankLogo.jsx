import React from "react";
import { withTheme } from "styled-components";
import { Icon } from '../_layout';

function Logo({theme}) {
  return <Icon shape="logo" source={theme.logoSrc} />;
}
export default withTheme(Logo);
