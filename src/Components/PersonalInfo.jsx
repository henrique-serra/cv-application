import { useState } from "react";

function FieldGroup({ label, type, placeholder, value, onChange }) {
    return (
        <div className="field-group">
            <label className="field-label">{label}</label>
            <input 
            type={type} 
            placeholder={placeholder}
            className="form-input personal-input"
            value={value}
            onChange={onChange}
            required
            />
        </div>
    )
}

function Preview({ personalInfo }) {
    const { name, email, tel } = personalInfo;

    return (
        <div className="cv-header">
            <h1 className="cv-name">{name}</h1>
            <div className="cv-contact">
                <p>{email}</p>
                <p>{tel}</p>
            </div>
        </div>
    )
}

export default function PersonalInfo() {
    const [statusPersonalInfo, setStatusPersonalInfo] = useState('editing');
    const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', tel: '' });

    function handleInputChange(e, info) {
        setPersonalInfo({ ...personalInfo, [info]: e.target.value });
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
        console.log(personalInfo);
        setStatusPersonalInfo('submited');
    }

    function handleEditClick() {
        setStatusPersonalInfo('editing');
    }

    function CardHeader() {
        return (
            <div className="card-header">
                <h2 className="card-title">
                  <div className="icon-wrapper personal-icon">
                    <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Informações Pessoais
                </h2>
                <button className="edit-btn personal-edit" onClick={handleEditClick}>
                  <svg className="icon-small" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
        )
    }
    
    return (
        <div className="card personal-card">
            <CardHeader />
            {(statusPersonalInfo === 'submited') ? <Preview personalInfo={personalInfo} /> : 
                <>
                <div className="form-fields">
                    <FieldGroup 
                    label='Nome Completo' 
                    type='text' 
                    placeholder='João Silva' 
                    value={personalInfo.name} 
                    onChange={(e) => handleInputChange(e, 'name')} 
                    />
                    <FieldGroup 
                    label='Email' 
                    type='email' 
                    placeholder='joao.silva@email.com' 
                    value={personalInfo.email} 
                    onChange={(e) => handleInputChange(e, 'email')} 
                    />
                    <FieldGroup 
                    label='Telefone' 
                    type='tel' 
                    placeholder='(11) 99999-9999' 
                    value={personalInfo.tel} 
                    onChange={(e) => handleInputChange(e, 'tel')} 
                    />
                </div>
                <button className="submit-btn personal-submit" onClick={(e) => handleSaveClick(e)}>
                Salvar Informações Pessoais
                </button>
                </>
            }
        </div>
    )
}