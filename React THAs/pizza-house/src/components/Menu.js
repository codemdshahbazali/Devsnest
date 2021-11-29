import React from 'react';
import styled from 'styled-components';
import { foods } from '../data/foodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

const MenuStyle = styled.div`
  height: 100vh;
  margin: 0px 100px 50px 20px;
`;

function Menu() {
  return (
    <MenuStyle>
      <h1>Menu</h1>
      <FoodGrid>
        {foods.map((food, index) => (
          <Food img={food.img} key={index}>
            <FoodLabel>{food.name}</FoodLabel>
          </Food>
        ))}
      </FoodGrid>
    </MenuStyle>
  );
}

export default Menu;
