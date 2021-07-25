import React from 'react';

function HealthCard(props) {
  const { title, calorie } = props;
  return (
    <div className='health-card'>
      <h1>{title}</h1>
      <p>{`You have consumed ${calorie} cals today.`}</p>
    </div>
  );
}

export default HealthCard;
