import { useState } from "react";

function Preview({ experienceInfo }) {
    const { company, job, responsabilities, start, end } = experienceInfo;
    const [startYear, startMonth, startDay] = start.split('-');
    const startFormatted = `${startDay}/${startMonth}/${startYear}`;
    const [endYear, endMonth, endDay] = end.split('-');
    const endFormatted = `${endDay}/${endMonth}/${endYear}`;

    return (
        <div className="cv-section">
            <h2 className="cv-section-title experience-border">
                Experiência Profissional
            </h2>
            <div className="cv-item">
                <h3 className="cv-item-title">{job}</h3>
                <p className="cv-item-company">{company}</p>
                <p className="cv-item-date">{startFormatted} - {endFormatted}</p>
                <p className="cv-item-description">
                {responsabilities}
                </p>
            </div>
        </div>
    )
}

export default function ExperienceInfo() {
    const [statusExperienceInfo, setStatusExperienceInfo] = useState('editing');
    const [experienceInfo, setExperienceInfo] = useState({ company: '', job: '', responsabilities: '', start: '', end: '' });
    const { company, job, responsabilities, start, end } = experienceInfo;

    function handleInputChange(e, info) {
        setExperienceInfo({ ...experienceInfo, [info]: e.target.value });
    }

    function handleSaveClick(e) {
        e.preventDefault();
        const inputs = e.target.parentNode.querySelectorAll('input');
        for (const input of inputs) {
            if (input.value.length === 0) {
                alert('Fields required!');
                return;
            }
        }
        console.log(experienceInfo);
        setStatusExperienceInfo('submited');
    }

    function handleEditClick() {
        setStatusExperienceInfo('editing');
    }

    function CardHeader() {
        return (
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
                <button className="edit-btn experience-edit" onClick={handleEditClick}>
                    <svg className="icon-small" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
            </div>
        )
    }

    return (
    <div className="card experience-card">
        <CardHeader />
        {(statusExperienceInfo === 'submited') ? 
        <Preview experienceInfo={experienceInfo} /> :
        <div className="form-fields">
            <div className="field-group">
                <label className="field-label">Nome da Empresa</label>
                <input 
                type="text" 
                placeholder="Tech Solutions Ltda"
                className="form-input experience-input"
                value={company}
                onChange={(e) => handleInputChange(e, 'company')}
                />
            </div>
            <div className="field-group">
                <label className="field-label">Cargo</label>
                <input 
                type="text" 
                placeholder="Desenvolvedor Frontend"
                className="form-input experience-input"
                value={job}
                onChange={(e) => handleInputChange(e, 'job')}
                />
            </div>
            <div className="field-group">
                <label className="field-label">Principais Responsabilidades</label>
                <textarea 
                rows="4"
                placeholder="Desenvolvimento de interfaces web responsivas, colaboração com equipe de design, implementação de novas funcionalidades..."
                className="form-textarea experience-input"
                value={responsabilities}
                onChange={(e) => handleInputChange(e, 'responsabilities')}
                />
            </div>
            <div className="date-fields">
                <div className="field-group">
                <label className="field-label">Data de Início</label>
                <input 
                    type="date" 
                    className="form-input experience-input"
                    value={start}
                    onChange={(e) => handleInputChange(e, 'start')}
                />
                </div>
                <div className="field-group">
                <label className="field-label">Data de Fim</label>
                <input 
                    type="date" 
                    className="form-input experience-input"
                    value={end}
                    onChange={(e) => handleInputChange(e, 'end')}
                />
                </div>
            </div>
            <button className="submit-btn experience-submit" onClick={(e) => handleSaveClick(e)}>
            Salvar Experiência Profissional
            </button>
        </div>
    }
    </div>
        )
    }