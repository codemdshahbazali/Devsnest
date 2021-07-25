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
    calorie: 69,
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
    calorie: 200,
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

function HealthCardList() {
  return (
    <div className='health-main'>
      <div className='health-container'>
        {data.map((elementObj, index) => {
          return (
            <HealthCard
              title={elementObj.title}
              calorie={elementObj.calorie}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HealthCardList;
