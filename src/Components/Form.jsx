import { useState } from 'react';
import PersonalInfo from './PersonalInfo'

export default function Form() {
  
  return (
        <div className="form-section">
          <PersonalInfo />
            {/* Education Section */}
            <div className="card education-card">
              <div className="card-header">
                <h2 className="card-title">
                  <div className="icon-wrapper education-icon">
                    <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  Formação Acadêmica
                </h2>
                <button className="edit-btn education-edit">
                  <svg className="icon-small" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              
              <div className="form-fields">
                <div className="field-group">
                  <label className="field-label">Nome da Instituição</label>
                  <input 
                    type="text" 
                    placeholder="Universidade de São Paulo"
                    className="form-input education-input"
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">Tipo de Curso</label>
                  <input 
                    type="text" 
                    placeholder="Bacharelado em Ciência da Computação"
                    className="form-input education-input"
                  />
                </div>
                <div className="date-fields">
                  <div className="field-group">
                    <label className="field-label">Data de Início</label>
                    <input 
                      type="date" 
                      className="form-input education-input"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Data de Fim</label>
                    <input 
                      type="date" 
                      className="form-input education-input"
                    />
                  </div>
                </div>
              </div>
              
              <button className="submit-btn education-submit">
                Salvar Formação Acadêmica
              </button>
            </div>

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