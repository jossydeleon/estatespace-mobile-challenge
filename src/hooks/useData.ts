import React from "react";
import DataContext from "../context/DataContext";

/**
 * Custom hook to access to DataContext
 * @returns 
 */
const useData = () => {
    return React.useContext(DataContext);
}

export default useData;