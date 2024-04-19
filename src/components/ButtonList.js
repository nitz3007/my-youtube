import Button from "./Button";
import {VIDEO_CATEGORY_LIST} from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import LeftIcon from "../assets/left-icon.svg";
import RightIcon from "../assets/right-icon.svg";

const ButtonList = () => {
    const selectedCategory = useSelector(store => store.app.selectedVideoCategory);
    const [categoryList, setCategoryList] = useState([])
    const [activeCategory, setActiveCategoryList] = useState(selectedCategory.name);
    const [activeLeftArrow, setActiveLeftArrow] = useState(false);
    const [activeRightArrow, setActiveRightArrow] = useState(true);
    
    const tabListRef = useRef(null);
    const leftArrowRef = useRef(null);
    const rightArrowRef = useRef(null);
    // const quickList = ['All', 'Sports', 'News', 'Podcasts', 'Plants', 'Interior Designs', 'Travel', 'Baking', 'Music', 'Paintins', 'Flute Lessons', 'Gardens', 'Meditation'];

    const getYTVideoCategoryList = async() => {
        const data = await fetch(VIDEO_CATEGORY_LIST);
        const json = await data.json();
        setCategoryList(json.items);
    }

    useEffect(()=>{
        getYTVideoCategoryList();
    },[]);

    const manageLeftRightBtns = () => {
        if(tabListRef.current) {
            if(tabListRef.current.scrollLeft >= 20) {
               setActiveLeftArrow(true);
            } else {
                setActiveLeftArrow(false);
            }

            let maxScrollValue = tabListRef.current.scrollWidth - tabListRef.current.clientWidth - 20;
            if(tabListRef.current.scrollLeft > maxScrollValue) {
                setActiveRightArrow(false);
            } else {
                setActiveRightArrow(true);
            }
        }
    };

    const handleScrollLeft = () => {
       if(tabListRef.current) {
            tabListRef.current.scrollLeft -= 300;
            manageLeftRightBtns();
       }
    };

    const handleScrollRight = () => {
        if(tabListRef.current) {
            tabListRef.current.scrollLeft += 300;
            manageLeftRightBtns();
        }
    };

    return <div className="max-w-[80vw] overflow-hidden relative flex items-center p-2">
        <button ref={leftArrowRef} className={`${activeLeftArrow ? 'flex items-center' : 'hidden'} absolute w-20 top-0 h-full left-0 bg-gradient-to-r from-[#fff] from-60% to-transparent`} onClick={handleScrollLeft}>
            <img src={LeftIcon} alt='left-icon' className="w-6 rounded-full hover:bg-[#dddddd]"/>
        </button>
        <ul ref={tabListRef} className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth" onScroll={manageLeftRightBtns}>
            <li>
                <Button 
                    id='all'
                    name='All' 
                    activeCategory={activeCategory} 
                    setActiveCategoryList={setActiveCategoryList}
                />
            </li>
            {categoryList?.map(item => 
                <li key={item.id}>
                    <Button 
                        id={item.id}
                        name={item.snippet.title} 
                        activeCategory={activeCategory}
                        setActiveCategoryList={setActiveCategoryList}
                    />
                </li>
            )}
        </ul>
        <button ref={rightArrowRef}  className={`${activeRightArrow ? 'flex' : 'hidden'} absolute w-20 flex justify-end items-center top-0 h-full right-0 bg-gradient-to-l from-[#fff] from-60% to-transparent`}>
            <img src={RightIcon} alt='left-icon' className="w-6 rounded-full hover:bg-[#dddddd]" onClick={handleScrollRight}/>
        </button>
    </div>
}

export default ButtonList;