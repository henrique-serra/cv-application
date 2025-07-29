import { useState } from "react";

function Preview({ educationInfo }) {
    const { institution, course, start, end } = educationInfo;
    const [startYear, startMonth, startDay] = start.split('-');
    const startFormatted = `${startDay}/${startMonth}/${startYear}`;
    const [endYear, endMonth, endDay] = end.split('-');
    const endFormatted = `${endDay}/${endMonth}/${endYear}`;

    return (
        <div className="cv-section">
            <div className="cv-item">
                <h3 className="cv-item-title">{course}</h3>
                <p className="cv-item-company">{institution}</p>
                <p className="cv-item-date">{startFormatted} - {endFormatted}</p>
            </div>
        </div>
    )
}

export default function EducationInfo() {
    const [statusEducationInfo, setStatusEducationInfo] = useState('editing');
    const [educationInfo, setEducationInfo] = useState({ institution: '', course: '', start: '', end: '' });
    
    function CardHeader() {
        return (
            <div className="card-header">
                <h2 className="card-title">
                    <div className="icon-wrapper education-icon">
                    <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    </div>
                    Formação Acadêmica
                </h2>
                <button className="edit-btn education-edit" onClick={() => setStatusEducationInfo('editing')}>
                    <svg className="icon-small" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
            </div>
        )
    }

    function handleInputChange(e, info) {
        setEducationInfo({ ...educationInfo, [info]: e.target.value });
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
        console.log(educationInfo);
        setStatusEducationInfo('submited');
    }
    
    return (
        <div className="card education-card">
            <CardHeader />
            {(statusEducationInfo === 'submited') ? 
            <Preview educationInfo={educationInfo} /> :   
            <div className="form-fields">
                <div className="field-group">
                    <label className="field-label">Nome da Instituição</label>
                    <input 
                    type="text" 
                    placeholder="Universidade de São Paulo"
                    className="form-input education-input"
                    value={educationInfo.institution}
                    onChange={(e) => handleInputChange(e, 'institution')}
                    />
                </div>
                <div className="field-group">
                    <label className="field-label">Tipo de Curso</label>
                    <input 
                    type="text" 
                    placeholder="Bacharelado em Ciência da Computação"
                    className="form-input education-input"
                    value={educationInfo.course}
                    onChange={(e) => handleInputChange(e, 'course')}
                    />
                </div>
                <div className="date-fields">
                    <div className="field-group">
                    <label className="field-label">Data de Início</label>
                    <input 
                        type="date" 
                        className="form-input education-input"
                        value={educationInfo.start}
                        onChange={(e) => handleInputChange(e, 'start')}
                    />
                    </div>
                    <div className="field-group">
                    <label className="field-label">Data de Fim</label>
                    <input 
                        type="date" 
                        className="form-input education-input"
                        value={educationInfo.end}
                        onChange={(e) => handleInputChange(e, 'end')}
                    />
                    </div>
                </div>
                <button className="submit-btn education-submit" onClick={(e) => handleSaveClick(e)}>
                Salvar Formação Acadêmica
                </button>
            </div>
            }
            
        </div>
    )
}