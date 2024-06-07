import React from "react"
import { useDispatch } from "react-redux";
import {setSelectedVideoCategory} from "../../utils/appSlice";

const Button = ({id, name, activeCategory, setActiveCategoryList}) => {

    const dispatch = useDispatch();

    const handleButtonClick= (e) => {
        
        setActiveCategoryList(e.target.textContent);
        dispatch(setSelectedVideoCategory({name: name, id: id}));
    }

    return <button 
        className={`px-4 py-1 rounded-md text-sm hover:bg-[#dddddd] font-semibold whitespace-nowrap ${activeCategory===name ? 'text-[#fff] bg-[#0f0f0f]' : 'bg-[#eeeeee]'} `}
        onClick={e=> handleButtonClick(e)}
        >
        {name}
    </button>
}

export default Button;