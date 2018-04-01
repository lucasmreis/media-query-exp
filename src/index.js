import React from "react";
import { render } from "react-dom";
import MobileContentView from "./MobileContentView";
import DesktopContentView from "./DesktopContentView";
import Media from "react-media";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Media query="(max-width: 800px)">
      {matches => (matches ? <MobileContentView /> : <DesktopContentView />)}
    </Media>
  </div>
);

render(<App />, document.getElementById("root"));
