import React, { useState } from 'react';
import HealthCard from './HealthCard';
import './HealthCardList.css';

const healthCardData = [
  {
    id: 1,
    title: 'Pizza',
    calorie: 56,
  },
  {
    id: 2,
    title: 'Burger',
    calorie: 130,
  },
  {
    id: 3,
    title: 'Coke',
    calorie: 500,
  },
  {
    id: 4,
    title: 'Browne',
    calorie: 180,
  },
  {
    id: 5,
    title: 'Fried Rice',
    calorie: 90,
  },
  {
    id: 6,
    title: 'Lassania',
    calorie: 120,
  },
  {
    id: 7,
    title: 'Pani Puri',
    calorie: 10,
  },
  {
    id: 8,
    title: 'Biryani',
    calorie: 256,
  },
  {
    id: 9,
    title: 'Kabab',
    calorie: 156,
  },
];

const calorieClassification = {
  good: 100,
  normal: 150,
  high: 170,
};

function HealthCardListWIthDelete() {
  const [data, setData] = useState(healthCardData);

  const qualityDecider = (elementObj) => {
    return elementObj.calorie <= calorieClassification.good
      ? 'Good'
      : elementObj.calorie <= calorieClassification.normal
      ? 'Normal'
      : 'High';
  };

  const deleteCard = (cardId) => {
    let filteredData = data.filter((elementObj) => {
      return elementObj.id !== cardId;
    });

    setData(filteredData);
  };

  return (
    <div className='health-main'>
      <div className='health-container'>
        {data.map((elementObj, index) => {
          let quality = qualityDecider(elementObj);
          return (
            <HealthCard
              cardId={elementObj.id}
              title={elementObj.title}
              calorie={elementObj.calorie}
              quality={quality}
              deleteCard={deleteCard}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HealthCardListWIthDelete;
