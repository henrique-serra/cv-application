import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import EducationInfo from './EducationInfo';

export default function Form() {
  
  return (
        <div className="form-section">
          <PersonalInfo />
          {/* Education Section */}
          <EducationInfo />

            {/* Experience Section */}
            <div className="card experience-card">
              <div className="card-header">
                <h2 className="card-title">
                  <div className="icon-wrapper experience-icon">
                    <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  Experiência Profissional
                </h2>
                <button className="edit-btn experience-edit">
                  <svg className="icon-small" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              
              <div className="form-fields">
                <div className="field-group">
                  <label className="field-label">Nome da Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Tech Solutions Ltda"
                    className="form-input experience-input"
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">Cargo</label>
                  <input 
                    type="text" 
                    placeholder="Desenvolvedor Frontend"
                    className="form-input experience-input"
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">Principais Responsabilidades</label>
                  <textarea 
                    rows="4"
                    placeholder="Desenvolvimento de interfaces web responsivas, colaboração com equipe de design, implementação de novas funcionalidades..."
                    className="form-textarea experience-input"
                  />
                </div>
                <div className="date-fields">
                  <div className="field-group">
                    <label className="field-label">Data de Início</label>
                    <input 
                      type="date" 
                      className="form-input experience-input"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Data de Fim</label>
                    <input 
                      type="date" 
                      className="form-input experience-input"
                    />
                  </div>
                </div>
              </div>
              
              <button className="submit-btn experience-submit">
                Salvar Experiência Profissional
              </button>
            </div>
          </div>
    )
}