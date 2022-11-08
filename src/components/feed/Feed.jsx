import './feed.css';
import Share from "../../components/share/Share";
import Post from "../../components/post/Post";
import {Posts} from "../../dummyData";

export default function Feed() {
  return(
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}