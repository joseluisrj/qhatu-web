const sum = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = items[i]['quantity'] + total;
  }
  return total;
};

const ArrayUtils = {
  sum: sum,
};

export default ArrayUtils;
