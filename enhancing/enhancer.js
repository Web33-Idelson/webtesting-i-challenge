module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const enhancedItem = {...item}

  if (enhancedItem.enhancement === 20){
    return enhancedItem;
  } else {
    enhancedItem.enhancement += 1
    return enhancedItem;
  }
}

function fail(item) {
  const failedItem = {...item}

  if(failedItem.enhancement >= 15){
    if(failedItem.enhancement > 16){
      failedItem.durability -= 10
      failedItem.enhancement -= 1
    } else {
      failedItem.durability -= 10
    }
  } else if (failedItem.enhancement < 15) {
      failedItem.durability -= 5
  }
    if(failedItem.durability < 0){
      failedItem.durability = 0
    }
    return failedItem;
}

function repair(item) {
  const restoredItem = {...item}
  restoredItem.durability = 100;

  return restoredItem;
}

function get(item) {
  return { ...item };
}
