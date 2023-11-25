import React, { useState } from 'react';

// Define the types for the grade and letter grade
type Grade = number;
type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'F';

const GradeCalculator: React.FC = () => {
  const [numericalGrade, setNumericalGrade] = useState<Grade | ''>('');
  const [letterGrade, setLetterGrade] = useState<LetterGrade | null>(null);

  const calculateLetterGrade = (grade: Grade): LetterGrade => {
    if (grade >= 90) {
      return 'A';
    } else if (grade >= 80) {
      return 'B';
    } else if (grade >= 70) {
      return 'C';
    } else if (grade >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  };

  const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputGrade = parseFloat(event.target.value);
    setNumericalGrade(isNaN(inputGrade) ? '' : inputGrade);
    setLetterGrade(isNaN(inputGrade) ? null : calculateLetterGrade(inputGrade));
  };

  return (
    <div>
      <h1>Grade Calculator</h1>
      <label>
        Enter Numerical Grade:
        <input
          type="text"
          value={numericalGrade}
          onChange={handleGradeChange}
        />
      </label>
      <div>
        {typeof letterGrade === 'string' && (
          <p>Letter Grade: {letterGrade}</p>
        )}
      </div>
    </div>
  );
};

export default GradeCalculator;
