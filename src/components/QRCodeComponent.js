import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = ({ url }) => {
  return (
    <div>
      <h2>QR Code per il Menu</h2>
      <QRCode value={url} />
    </div>
  );
};

export default QRCodeComponent;
