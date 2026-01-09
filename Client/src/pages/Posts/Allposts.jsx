import { AllMockData } from "../../Data/postsData";
import { CiHeart, CiRedo } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import "./Allposts.css"


function Allposts() {
    return (
        <div>
            {/* Making The List Of Possible Posts */}
            <div>
                {AllMockData.map((mockData) => {
                    return (
                        <div key={mockData.id}>
                            <div>{mockData.content}</div>
                           <div className="Content-subcategories">
                             <div><CiHeart size={20}/> {mockData.likes}</div>
                            <div><FaRegComment size={20}/> {mockData.comments}</div>
                            <div><CiRedo size={20}/> {mockData.reposts}</div>
                           </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Allposts;
