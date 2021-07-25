import React from 'react';

function HealthCard(props) {
  const { title, calorie, quality } = props;

  let txtColor =
    quality === 'Good'
      ? '#00A170'
      : quality === 'Normal'
      ? '#F5DF4D'
      : '#D2386C';
  return (
    <div className='health-card-enhanced'>
      <h1 style={{ color: txtColor }}>
        {title} || {quality}
      </h1>
      <p>{`You have consumed ${calorie} cals today.`}</p>
    </div>
  );
}

export default HealthCard;
