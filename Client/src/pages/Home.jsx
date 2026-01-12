import { useOutletContext } from "react-router-dom";
import { AllMockData } from "../Data/postsData";
import { CiHeart, CiRedo } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import "./Home.css";

export default function Home() {
  const { search = "" } = useOutletContext(); // ⭐ FIX

  const filteredPosts = AllMockData.filter((post) =>
    !search.trim() ||
    post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Home</h1>

      <div>
       {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-content">{post.content}</div>

              <div className="Content-subcategories">
                <div>
                  <CiHeart size={20} /> {post.likes}
                </div>
                <div>
                  <FaRegComment size={20} /> {post.comments}
                </div>
                <div>
                  <CiRedo size={20} /> {post.reposts}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </>
  );
}
