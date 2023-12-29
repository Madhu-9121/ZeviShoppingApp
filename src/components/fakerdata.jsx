import React from 'react';
import { faker } from '@faker-js/faker';


const generateFakeProductData = () => {
  const name = faker.helpers.arrayElement(['T Shirts', 'Leather dresses',"Denim Jumpsuit","Satin Shirts","Shirts","Jeans"]);
  const originalPrice = parseFloat(faker.finance.amount({ min: 200, max: 3000 }));
  const discountPercentage = faker.datatype.number({ min: 20, max: 30 });
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = Math.floor(originalPrice - discountAmount);
  const brand = faker.helpers.arrayElement(['Mango', 'H&M']);
  const image = faker.image.urlLoremFlickr({ category: 'fashion' });
  const rating = faker.datatype.number({ min: 1, max: 5 });
  
  return {
    name,
    price: originalPrice,
    image,
    discountPrice: discountedPrice,
    brand,
    rating,
  };
};

const generateSampleData = () => {
  const sampleData = [];
  for (let i = 0; i < 20; i++) {
    sampleData.push(generateFakeProductData());
  }
  return sampleData;
};

const sampleData = generateSampleData();
console.log(sampleData);

export {  generateFakeProductData, sampleData };
