import React, { useState } from "react";
import "./App.css";
import { requestAccounts } from "./utils/requestAccounts";
import { shortenAddress } from "./utils/shortenAddress";

function App() {
  const [account, setAccount] = useState([]);

  const handleConnect = () => {
    requestAccounts().then((accounts) => {
      setAccount(accounts);
    });
  };

  return (
    <div className="App">
      <header className="App-header" style={{ position: "relative" }}>
        <div
          id="gameContainer"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        >
          <canvas
            id="unity-canvas"
            style={{ width: "100%", height: "100%", position: "relative" }}
            data-pixel-art=""
          ></canvas>
        </div>
        <div style={{ position: "absolute", top: 20, right: 20 }}>
          <button
            className="App-link"
            onClick={handleConnect}
            style={{ height: "60px", fontSize: 20, padding: 10 }}
          >
            {account.length > 0
              ? `Connected (${shortenAddress(account[0], 5)})`
              : "Connect Pelagus Wallet"}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
