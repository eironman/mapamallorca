export function arrayContains(a, item) {
  const array = a || [];
  let i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }

  return false;
}

export function removeFromArray(a, item) {
  const index = a.indexOf(item);
  a.splice(index, 1);
  return a;
}
