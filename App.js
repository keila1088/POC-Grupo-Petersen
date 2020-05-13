import React, { useState } from "react";
import Routes from "../src/_components/Routes";

import { ThemeProvider } from "styled-components";
import {ThemeButtons,PrimaryTheme,Themes} from "./_layout/Theme";

import styled from "styled-components";

import {Button} from "../src/_layout";

/*class App extends Component {
  state = {
    themeId: undefined
  };

  handleOnClick = (event) => {
    this.setState({ themeId: event.target.value });
  };

  changeTheme = themeId => {
    let theme = undefined;
    switch (themeId) {
      case "secondary": {
        theme = SecondaryTheme;
        break;
      }
      default:
        theme = DefaultTheme;
    }
    return theme;
  };



  render() {
    return (
      <>
        <button value="primary" onClick={this.handleOnClick}>Default</button>
        <button value="secondary" onClick={this.handleOnClick}>Secondary</button>
        <ButtonsSelector/>
        <ThemeProvider theme={this.changeTheme(this.state.themeId)}>
          <LoginStep2 />
        </ThemeProvider>
      </>
    );
  }
}
*/


const ButtonWrapper = styled.div`
background: rgba(0, 0, 0, 0.8);

  position: absolute;
  display: flex;
  padding: .3rem;
  flex-direction: column;
  z-index: 199;
    right:0;
    top:12rem;
    border-radius: .5rem 0 0 .5rem;
`;


const ButtonStyled = styled(Button)`
  background: ${props => props.background}; 
  color: ${props => props.color}; 

  line-height: 0; 
`;


function App(){

  const [themeId, setThemeId]=useState(PrimaryTheme.id);
  
  const handleOnClick = (event) => {
    setThemeId(event.target.value);
  };

  const Buttons = () =>{
    return(
      ThemeButtons.map(element => <ButtonStyled small background={element.background} color={element.color} value={element.id} onClick={handleOnClick}>{element.banco}</ButtonStyled>)
    )
  };

  const ButtonsSelector = () =>{
    return(
      <ButtonWrapper><Buttons/></ButtonWrapper>
    )
  }

  const changeTheme = themeId => {
    return Themes.find(theme=>theme.id===themeId);
  };

    return (
      <>
        <ThemeProvider theme={changeTheme(themeId)}>
           <ButtonsSelector/>
          <Routes />
        </ThemeProvider>
      </>
    );
  }

export default App;
