import faker from "@faker-js/faker";

const images = [
  {
    id: 1,
    image: faker.image.image(),
    title: faker.commerce.productName(),
    desc: faker.commerce.productDescription(),
  },
  {
    id: 2,
    image: faker.image.image(),
    title: faker.commerce.productName(),
    desc: faker.commerce.productDescription(),
  },
  {
    id: 3,
    image: faker.image.image(),
    title: faker.commerce.productName(),
    desc: faker.commerce.productDescription(),
  },
];

export default images;
