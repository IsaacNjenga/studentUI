// App.js
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import GradeViewer from './GradeViewer';
import FeeBalance from './FeeBalance';
import AssignmentViewer from './AssignmentViewer';

const App = () => {
  const [currentView, setCurrentView] = useState('registration');

  const renderView = () => {
    switch (currentView) {
      case 'registration':
        return <RegistrationForm />;
      case 'grades':
        return <GradeViewer />;
      case 'feeBalance':
        return <FeeBalance />;
      case 'assignments':
        return <AssignmentViewer />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header>
        <h1>EduHub School System</h1>
        <h1>Student Portal (logo here)</h1>
        <h2>(Image of student here) Student Name</h2>
        <p style={{ position: 'absolute', bottom: '0', left: '0', fontSize: '14px', color: 'yellow' }}>
         Major: Applied Computer Technology (APT)
        </p>
      </header>
      <nav>
        <ul>
          <li onClick={() => setCurrentView('registration')}>Class Registration</li>
          <li onClick={() => setCurrentView('grades')}>Grades</li>
          <li onClick={() => setCurrentView('feeBalance')}>Your Fee Balance</li>
          <li onClick={() => setCurrentView('assignments')}>Pending Assignments</li>
        </ul>
      </nav>
      <main>{renderView()}</main>
    </div>
  );
};

export default App;
