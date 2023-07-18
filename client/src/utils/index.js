export const daysLeft = (deadline) => {
  const difference =
    new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

export const calculateBarPercentage = (
  goal,
  raisedAmount
) => {
  const percentage = Math.round(
    (raisedAmount * 100) / goal
  );

  return percentage;
};

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};

// GENERATE RANDOM STRING FOR ID OF LENGTH 32
export const generateRandomString = () => {
  const randomString = Math.random()
    .toString(36)
    .substring(2, 15);

  return randomString + randomString;
};

// GENERATE RANDOM NUMBER FOR ID OF LENGTH 32
export const generateId = () => {
  const randomNumber = Math.random()
    .toString(10)
    .substring(2, 15);
  const timestamp = Date.now()
    .toString(10)
    .substring(6, 13);

  return randomNumber + timestamp;
};
