export default function Preview() {
    return (
        <div className="preview-section">
            <div className="preview-card">
              <div className="preview-header">
                <h3 className="preview-title">Preview do Currículo</h3>
                <p className="preview-subtitle">Visualize como seu currículo ficará</p>
              </div>
              
              {/* CV Preview Content */}
              <div className="cv-preview">
                <div className="cv-header">
                  <h1 className="cv-name">João Silva</h1>
                  <div className="cv-contact">
                    <p>joao.silva@email.com</p>
                    <p>(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="cv-sections">
                  <div className="cv-section">
                    <h2 className="cv-section-title education-border">
                      Formação Acadêmica
                    </h2>
                    <div className="cv-item">
                      <h3 className="cv-item-title">Bacharelado em Ciência da Computação</h3>
                      <p className="cv-item-company">Universidade de São Paulo</p>
                      <p className="cv-item-date">2020 - 2024</p>
                    </div>
                  </div>
                  
                  <div className="cv-section">
                    <h2 className="cv-section-title experience-border">
                      Experiência Profissional
                    </h2>
                    <div className="cv-item">
                      <h3 className="cv-item-title">Desenvolvedor Frontend</h3>
                      <p className="cv-item-company">Tech Solutions Ltda</p>
                      <p className="cv-item-date">2022 - Presente</p>
                      <p className="cv-item-description">
                        Desenvolvimento de interfaces web responsivas, colaboração com equipe de design, 
                        implementação de novas funcionalidades...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="preview-actions">
                <button className="generate-btn">
                  Gerar PDF
                </button>
                <button className="download-btn">
                  <svg className="icon-small" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
    )
}