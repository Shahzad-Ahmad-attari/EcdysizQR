import React, { useState } from 'react';
import QRCode from 'react-qr-code';
// import QRCode from 'react-qr-code';
import './App.css'

function App() {
  const [url, setUrl] = useState(' ');

  const handleInputChange = (e) => {
    setUrl(e.target.value)
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">QR Code Generator</h1>
        <p className="subtitle">Transform your links into shareable QR codes</p>
      </header>

      <main className="main-content">
        <div className="input-section">
          <label htmlFor="urlInput" className="input-label">Enter URL: </label>
          <input
            id="urlInput"
            type="text"
            value={url}
            onChange={handleInputChange}
            className="input-box"
            placeholder="https://ecdysiz.com"
          />
        </div>

        {url && (
          <div className="qr-section">
            <QRCode
            value={url}
            size={256}
            bgColor="#21222c"
            fgColor="#ffffff"
            />
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p> {new Date().getFullYear()} Ecdysiz. All rights Reserved. </p>
      </footer>
    </div>
  );
}


export default App;
