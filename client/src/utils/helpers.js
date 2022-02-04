import dayJs from 'dayjs';

export function sortDate(itemArray) {
  itemArray.sort((a, b) => {
    if (a.useByDate < b.useByDate) {
      return -1;
    }
    if (a.useByDate > b.useByDate) {
      return 1;
    }

    return 0;
  });
  return itemArray;
}

export function colorCardByDate(useByDate) {
  const pastDate = dayJs().format('YYYY-MM-DD');
  const soonDate = dayJs().add(3, 'day').format('YYYY-MM-DD');
  if (useByDate < pastDate) {
    return 'red';
  }
  if (useByDate === pastDate) {
    return 'orange';
  }
  if (useByDate <= soonDate) {
    return 'yellow';
  }
  return 'green';
}
