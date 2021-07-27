import React from 'react';

function HealthCard(props) {
  const { cardId, title, calorie, quality, deleteCard } = props;

  let txtColor =
    quality === 'Good'
      ? '#00A170'
      : quality === 'Normal'
      ? '#F5DF4D'
      : '#D2386C';

  return (
    <div className='health-card-delete'>
      <div className='health-card-header'>
        <h1 style={{ color: txtColor }}>
          {title} || {quality}
        </h1>
        <button
          onClick={() => {
            deleteCard(cardId);
          }}>
          Delete
        </button>
      </div>
      <p>{`You have consumed ${calorie} cals today.`}</p>
    </div>
  );
}

export default HealthCard;
