import React from 'react';

const TeamMemberCard = ({ name, jobTitle }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '8px' }}>
      <h2>{name}</h2>
      <p>{jobTitle}</p>
    </div>
  );
};

export default TeamMemberCard;