export const getDefaultItem = (id: any, arr: any, key: any) => {
  if (arr) {
    let entry = arr.find((e: any) => e.id === id || e.label === id);
    if (entry) {
      return key ? entry[key] : entry;
    }
  }
  return '';
};
