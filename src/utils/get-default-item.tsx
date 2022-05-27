export const getDefaultItem = (id: any, arr: any, key: any) => {
  if (arr) {
    let entry = arr.find((e: any) => e.id === +id);

    if (entry) {
      return entry[key];
    }
  }
  return '';
};
