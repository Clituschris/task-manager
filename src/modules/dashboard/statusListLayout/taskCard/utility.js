const statuses = ["ToDo", "InProgress", "Review", "Completed"];

export const getPrevStatus = (status) => {
  const currentStatusIndex = statuses.findIndex((item) => item === status);
  if (currentStatusIndex === 0) {
    return null;
  } else {
    return statuses[currentStatusIndex - 1];
  }
};

export const getNextStatus = (status) => {
  const currentStatusIndex = statuses.findIndex((item) => item === status);
  if (currentStatusIndex === statuses.length - 1) {
    return null;
  } else {
    return statuses[currentStatusIndex + 1];
  }
};
