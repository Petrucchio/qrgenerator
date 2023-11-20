import { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {
const [qrCode, setQrCode] = useState('');
const [qrCodeLink, setQrCodeLink] = useState(''); 

function handleDownload() {
  const link = document.createElement('a');
  link.href = qrCodeLink;
  link.download = 'qrcode.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

  return (
    <div className='container'>
      <QRCode value={qrCode} /> 
      <input className='input' 
      value={qrCode}
       onChange={(e) => setQrCode(e.target.value)}
        placeholder='Digite seu link...' />
        <a href={qrCodeLink} className='button' onClick={handleDownload}>
  Baixar QRC
</a>

    </div>
  );
}

export default App;
