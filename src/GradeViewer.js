// GradeViewer.js
import React from 'react';

const GradeViewer = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Grades</h1>
      <p>Select one to view grade</p>
      <form>
        <label style={{ display: 'inline-block', marginRight: '10px' }}>
          <input type="radio" name="semester" /> FALL 2024
        </label>
        <label style={{ display: 'inline-block', marginRight: '10px' }}>
          <input type="radio" name="semester" /> SPRING 2025
        </label>
        <label style={{ display: 'inline-block', marginRight: '10px' }}>
          <input type="radio" name="semester" /> FALL 2026
        </label>
        <label style={{ display: 'inline-block', marginRight: '10px' }}>
          <input type="radio" name="semester" /> SPRING 2090
        </label>
      </form>
    </div>
  );
};

export default GradeViewer;
