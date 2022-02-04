const db = require('./connection');
const { Item } = require('../models');

db.once('open', async () => {
  await Item.deleteMany();

  const item = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  process.exit();
});
