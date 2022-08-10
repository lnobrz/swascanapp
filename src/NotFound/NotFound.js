import React from "react";
import { MainMenuContainer } from "../Home/HomeMainMenu/MainMenuStyles";

const NotFound = () => {
  return(
    <MainMenuContainer>
      <p style={{
        color: "white", 
        height: "55vh", 
        display: "flex", 
        alignItems: "center"}}
        >
          Error: 404 - Page Not Found
      </p>
    </MainMenuContainer>
  )
}

export default NotFound;