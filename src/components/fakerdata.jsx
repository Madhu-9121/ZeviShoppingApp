import React from 'react';
import {faker} from '@faker-js/faker';

const Product = ({ name, price, discountPrice }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>
        Price: ${price.toFixed(2)} | Discounted Price: ${discountPrice.toFixed(2)}
      </p>
    </div>
  );
};

const generateFakeProductData = () => {
  const name = faker.lorem.words();
  const originalPrice = parseFloat(faker.finance.amount());
  const discountPercentage = faker.datatype.number({ min: 20, max: 30 });
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = Math.round(originalPrice - discountAmount);

  const image = faker.image.urlLoremFlickr({ category: 'fashion' })

  return {
    name,
    price: originalPrice,
    image,
    discountPrice: discountedPrice,
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

export { Product, generateFakeProductData, sampleData };
