import React, { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isEditing ? (
        <form>
          <input
            name="companyName"
            value={experience.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            name="positionTitle"
            value={experience.positionTitle}
            onChange={handleChange}
            placeholder="Position Title"
          />
          <textarea
            name="mainResponsibilities"
            value={experience.mainResponsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
          ></textarea>
          <input
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            placeholder="Start Date"
          />
          <input
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            placeholder="End Date"
          />
          <button type="button" onClick={() => setIsEditing(false)}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>{experience.companyName}</p>
          <p>{experience.positionTitle}</p>
          <p>{experience.mainResponsibilities}</p>
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Experience;
