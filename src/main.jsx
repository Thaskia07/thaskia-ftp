import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ Tambahkan ini
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ⬅️ Bungkus App dengan ini */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
