import * as React from "react";

import { connect } from "react-redux";
import styledThemes from '../OtherScreen/components/styled-themes';
class Login extends React.Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          <Header>
            <HeaderText>Login</HeaderText>
          </Header>
          <Body>
            <Segment>
              <Icon
                source={{
                  uri: "https://img.icons8.com/dusk/50/000000/lock-2.png"
                }}
              />
            </Segment>

            <Segment>
              <Title>Login</Title>
              <Description>
                Please enter your username and password to continue
              </Description>
            </Segment>

            <Segment>
              <TextInputContainer>
                <TextInput>Username</TextInput>
              </TextInputContainer>
              <TextInputContainer>
                <TextInput>Password</TextInput>
              </TextInputContainer>
            </Segment>
          </Body>

          <Footer>
            <Button>
              <ButtonText>Login</ButtonText>
            </Button>
          </Footer>
        </Container>
      </ThemeProvider>
    );
  } 
}

const  state = useSelector(state => state.themes);

export default Login;