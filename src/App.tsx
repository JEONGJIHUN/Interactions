import React from "react";
import * as S from "./style";
import { ThemeProvider } from "styled-components";
import { Button } from "./Components/Button";
import { BUTTON_COLOR } from "./constants";

function App() {
  return (
    <S.Container>
      <ThemeProvider theme={S.theme}>
        <S.GlobalStyle />
        <S.Normalize />
        <Button />
        <Button theme={BUTTON_COLOR.White} />
        <Button theme={BUTTON_COLOR.Grey} />
      </ThemeProvider>
    </S.Container>
  );
}

export default App;
