export const setStorageItem = (itemKey, itemValue) => {
    localStorage.setItem(itemKey, itemValue);
}

export const getStorageItem = (itemKey, itemValue) => localStorage.getItem(itemKey);

