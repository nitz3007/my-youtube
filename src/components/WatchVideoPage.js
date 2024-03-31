import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchVideoPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    return (
        <div className="mx-10 my-5">
            <iframe 
                width="920" 
                height="420" 
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowFullscreen>                    
            </iframe>
            <CommentContainer/>
        </div>
    );
}

export default WatchVideoPage;