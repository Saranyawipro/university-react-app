import { useContext} from "react";

import { Card } from "../../components/Card";

import { UniversityDetail } from "../../components/UniversityDetail";
import { UniversityContext } from "../../contexts";

function Home() {
  const { isUniversityDetailOpen, setSearchByTitle, filteredItems,alphaSort} =  useContext(UniversityContext);

 //displaying cards(rendering list)
  const renderView = ()=> {
    return(
      filteredItems?.map((item) => <Card key={item.id} {...item} />));
  }
 

  return (
    <>  
    <div className= {`${!isUniversityDetailOpen ? 'flex' : 'hidden'} mt-4`}>
      <input
        type="text"
        placeholder="Search a university"
        className="rounded-lg border border-black w-50 h-10 p-4 mb-4 mr-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <button className="bg-white rounded-lg hover:bg-gray-100 text-gray-800 font-semibold w-20 h-10 p-4 mb-4 py-2 px-4 border border-gray-400  shadow" onClick={() => alphaSort()}>Sort</button>
      </div>
      
           
     
      <UniversityDetail/>
         
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-6 min-w-max  max-w-screen-lg mb-20">
            {renderView()}
            </div>
        
    </>
  );
}

export { Home };
