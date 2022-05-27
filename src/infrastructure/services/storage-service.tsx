function getLocalStorage(key: string) {
  const entry = localStorage.getItem(key);
  if (entry) {
    return JSON.parse(entry);
  }

  return '';
}

function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, JSON.stringify(value));
}

function deleteLocalStorage(key: string) {
  if (getLocalStorage(key)) {
    localStorage.removeItem(key);
  }
}

export { setLocalStorage, getLocalStorage, deleteLocalStorage };
