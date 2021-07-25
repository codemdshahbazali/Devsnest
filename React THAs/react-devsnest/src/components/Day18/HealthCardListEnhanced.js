import React from 'react';
import HealthCard from './HealthCard';
import './HealthCardList.css';

const data = [
  {
    title: 'Pizza',
    calorie: 56,
  },
  {
    title: 'Burger',
    calorie: 130,
  },
  {
    title: 'Coke',
    calorie: 500,
  },
  {
    title: 'Browne',
    calorie: 180,
  },
  {
    title: 'Fried Rice',
    calorie: 90,
  },
  {
    title: 'Lassania',
    calorie: 120,
  },
  {
    title: 'Pani Puri',
    calorie: 10,
  },
  {
    title: 'Biryani',
    calorie: 256,
  },
  {
    title: 'Kabab',
    calorie: 156,
  },
];

const calorieClassification = {
  good: 100,
  normal: 150,
  high: 170,
};

function HealthCardListEnhanced() {
  return (
    <div className='health-main'>
      <div className='health-container'>
        {data.map((elementObj, index) => {
          let quality =
            elementObj.calorie <= calorieClassification.good
              ? 'Good'
              : elementObj.calorie <= calorieClassification.normal
              ? 'Normal'
              : 'High';
          return (
            <HealthCard
              title={elementObj.title}
              calorie={elementObj.calorie}
              quality={quality}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HealthCardListEnhanced;
