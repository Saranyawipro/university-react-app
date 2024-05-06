import { useContext } from "react";

import { UniversityContext } from "../../contexts";

//Displaying university List
const Card = (data) => {
  const {
    isUniversityDetailOpen,
    setisUniversityDetailOpen,
    setuniversityToShow,
  
    
  } = useContext(UniversityContext);

  const showUniversity = (universityDetail) => {
   
    setisUniversityDetailOpen(true);
    setuniversityToShow(universityDetail);
  };


  return (
    <div className= {`${!isUniversityDetailOpen ? 'flex' : 'hidden'}`}>
       <div
      className="bg-gray-100 cursor-pointer w-56 h-20 rounded-lg p-2 mb-2 text-sm"
      onClick={() => showUniversity(data)}
    >
      {data.name}
     
    </div>
    </div>
   
  );
};

export { Card };
