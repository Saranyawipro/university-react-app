import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { UniversityContext } from "../../contexts";
import "./index.css";

//Displaying university details
const UniversityDetail = () => {
  const {
    universityToShow,
    isUniversityDetailOpen,
    setisUniversityDetailOpen,
    deleteItem
  } = useContext(UniversityContext);

  return (
    <div
      className={`${
        isUniversityDetailOpen ? "flex" : "hidden"
      } flex-col  bg-white border-black `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            onClick={() => setisUniversityDetailOpen(false)}
            className="h-6 w-6 text-black"
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={universityToShow.image}
          alt={universityToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2 text-purple-600">
          {universityToShow.name}
        </span>
        <span className="font-medium text-md mb-6">
          {universityToShow.web_pages}
        </span>
        <span className="font-light text-sm">
          Domain : {universityToShow.domains}
        </span>
        <span className="font-light text-sm">
          Country : {universityToShow.country}
        </span>
        <span className="font-light text-sm">
          Code : {universityToShow.alpha_two_code}
        </span>
      </p>

      {/* Delete Item */}
      <div className="box-2" onClick={() => deleteItem(universityToShow.id)}>
        <div className="btn btn-three">
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export { UniversityDetail };
