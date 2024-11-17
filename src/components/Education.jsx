import React, { useState } from 'react';
import '../styles/Education.css';

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isEditing ? (
        <form>
          <input
            name="school"
            value={education.school}
            onChange={handleChange}
            placeholder="School Name"
          />
          <input
            name="titleOfStudy"
            value={education.titleOfStudy}
            onChange={handleChange}
            placeholder="Title of Study"
          />
          <input
            name="dateOfStudy"
            value={education.dateOfStudy}
            onChange={handleChange}
            placeholder="Date of Study"
          />
          <button type="button" onClick={() => setIsEditing(false)}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>{education.school}</p>
          <p>{education.titleOfStudy}</p>
          <p>{education.dateOfStudy}</p>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Education;
