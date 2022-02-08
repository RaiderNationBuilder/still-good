import dayJs from 'dayjs';

export function sortDate(itemArray) {
  const arrayToSort = [...itemArray];
  console.log('pre-sort', arrayToSort);

  arrayToSort.sort((a, b) => {
    if (a.useByDate < b.useByDate) {
      return -1;
    }
    if (a.useByDate > b.useByDate) {
      return 1;
    }

    return 0;
  });
  console.log('post-sort', arrayToSort);
  return arrayToSort;
}

export function colorCardByDate(useByDate) {
  // Color constants for dates
  const PAST_DATE = 'rgba(255,0,0,0.5)';
  const LAST_DATE = 'rgba(255,165,0,0.5)';
  const SOON_DATE = 'rgba(255,255,0,0.5)';
  const STILL_GOOD = 'rgba(0,128, 0,0.5)';
  // Soon date constant
  const SOON_VALUE = 3;

  const currentDate = dayJs().format('YYYY-MM-DD');
  const soonDate = dayJs().add(SOON_VALUE, 'day').format('YYYY-MM-DD');
  if (useByDate < currentDate) {
    return PAST_DATE;
  }
  if (useByDate === currentDate) {
    return LAST_DATE;
  }
  if (useByDate <= soonDate) {
    return SOON_DATE;
  }
  return STILL_GOOD;
}

export function validateEmail(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}
