import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UniversityContext = createContext();

export const UniversityProvider = ({ children }) => {
  // Save list items in local storage
  const { item: list, saveItem: saveList } = useLocalStorage("list", []);

  // University Detail · Open/Close
  const [isUniversityDetailOpen, setisUniversityDetailOpen] = useState(false);

  // University Detail · Show University
  const [universityToShow, setuniversityToShow] = useState({});





  // Get University
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Get University by title
  const [searchByTitle, setSearchByTitle] = useState("");

  //Get University by sort(A-Z/Z-A)
  const [sortState, setSortState] = useState([]);

  // sort(A-Z/Z-A) Order
  const [sortOrder, setSortOrder] = useState(true);

  useEffect(() => {
    fetch(
      "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates"
    )
      .then((response) => response.json())
      .then((data) => {
        // Generate unique IDs for list items
        const updatedItems = data.map((item) => ({
          id: crypto.randomUUID(),
          ...item,
        }));
        setItems(updatedItems);
      })
  }, []);

  //Here is the logic for Search by name
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.name.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  // Searching by keyword (setting the items)
  useEffect(() => {
    if (searchByTitle.length > 0) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    } else {
      setFilteredItems(items);
    }
  }, [items, searchByTitle]);

  // Sort
  useEffect(() => {
    setFilteredItems(sortState);
  }, [sortState]);

  // Alphabetical Sorting
  const alphaSort = () => {
    let sortArray = items;
    if (sortOrder) {
      sortArray.sort(function (a, b) {
        return a.name < b.name ? -1 : 1;
      });
    } else {
      sortArray.sort(function (a, b) {
        return a.name < b.name ? 1 : -1;
      });
    }
    setSortOrder(!sortOrder);
    setSortState(sortArray);
  };

  const deleteItem = (id) => {
    const objWithIdIndex = items.findIndex((item) => item.id === id);
    items.splice(objWithIdIndex, 1);
    setFilteredItems(items);
    setisUniversityDetailOpen(false);
  }

  return (
    <UniversityContext.Provider
      value={{
        isUniversityDetailOpen,
        setisUniversityDetailOpen,
        universityToShow,
        setuniversityToShow,
     
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        list,
        saveList,
        alphaSort,
        deleteItem
      }}
    >
      {children}
    </UniversityContext.Provider>
  );
};
