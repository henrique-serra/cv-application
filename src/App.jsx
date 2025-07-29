import { useState } from 'react';
import './App.css';
import Form from './Components/Form';

function App() {

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1 className="main-title">Gerador de Currículo</h1>
          <p className="subtitle">Crie seu currículo profissional de forma simples e elegante</p>
        </div>

        <div className="main-content">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;