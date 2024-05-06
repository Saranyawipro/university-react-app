import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName, initialValue);
      parsedItem = initialValue;
    } else {
      parsedItem = localStorageItem;
      setItem(parsedItem);
    }
  }, []);

  const saveItem = (newItem) => {
    console.log("local",newItem)
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
  };
}

export { useLocalStorage };
