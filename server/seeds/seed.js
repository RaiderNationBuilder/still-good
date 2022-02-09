const db = require('../config/connection');
const { Item, User } = require('../models');
const { faker } = require('@faker-js/faker');
const fs = require('fs');
const foods = require('./foods.json').foods;
const bcrypt = require('bcrypt');
const dayjs = require('dayjs');
faker.seed(1123123123123123123123);
db.once('open', async () => {
  await Item.deleteMany({});
  await User.deleteMany({});

  const userData = [];
  const numberOfUsers = 50;

  for (let i = 0; i < numberOfUsers; i += 1) {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const hashedPassword = await bcrypt.hash(password, 10);
    userData.push({ email, password: hashedPassword });
  }

  const createdUsers = await User.collection.insertMany(userData);

  const userIDsArray = [];
  const userIDsObject = createdUsers.insertedIds;
  for (let key in userIDsObject) {
    userIDsArray.push(userIDsObject[key]);
  }

  const numberOfItems = foods.length;

  for (let i = 0; i < numberOfItems; i += 1) {
    const randomFoodIndex = Math.floor(Math.random() * (numberOfItems - 1));
    const randomUser = Math.floor(Math.random() * (numberOfUsers - 1));
    const itemName = foods[randomFoodIndex];
    const category = faker.word.noun();
    const storageLocationArray = ['', 'Fridge', 'Freezer', 'Pantry', 'Other'];
    const itemStorageLocation = storageLocationArray[Math.floor(Math.random() * storageLocationArray.length - 1)];
    const itemExpirationDate = faker.date.soon(15);
    const itemQuantity = Math.floor(Math.random() * 9) + 1;
    const dateNow = faker.date.recent(3);

    const item = {
      categories: category,
      storageLocation: itemStorageLocation,
      name: itemName,
      quantity: itemQuantity,
      addedDate: dayjs(dateNow).format('YYYY-MM-DD'),
      useByDate: dayjs(itemExpirationDate).format('YYYY-MM-DD'),
    };

    const createdItem = await Item.create(item);

    const updatedUser = await User.updateOne(
      { _id: userIDsArray[randomUser] },
      { $push: { savedItems: createdItem._id } }
    );
  }
  process.exit();
});
