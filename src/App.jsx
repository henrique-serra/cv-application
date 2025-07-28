import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Preview from './Components/Preview';

function App() {
  const [statusPersonalInfo, setStatusPersonalInfo] = useState('editing');
  const [personalInfo, setPersonalInfo] = useState(null);

  function handleNameInput(e) {
    setPersonalInfo({ ...personalInfo, name: e.target.value });
  }

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1 className="main-title">Gerador de Currículo</h1>
          <p className="subtitle">Crie seu currículo profissional de forma simples e elegante</p>
        </div>

        <div className="main-content">
          {/* Left Column - Form */}
          <Form onChangeName={handleNameInput} />
          
          {/* Right Column - Preview */}
          {/* <Preview personalInfo={personalInfo} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;