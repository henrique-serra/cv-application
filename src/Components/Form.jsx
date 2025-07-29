import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';

export default function Form() {
  
  return (
        <div className="form-section">
          <PersonalInfo />
          <EducationInfo />
          <ExperienceInfo />
          </div>
    )
}