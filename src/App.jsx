
import React from 'react';
import TeamMemberCard from './components/TeamMemberCard';

const App = () => {
  const teamMembers = [
    { name: 'John cena', jobTitle: 'Software Engineer' },
    { name: 'Jane rathore', jobTitle: 'Product Manager' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} name={member.name} jobTitle={member.jobTitle} />
      ))}
    </div>
  );
};

export default App;