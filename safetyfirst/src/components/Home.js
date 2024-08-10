import React from "react";

const Home = () => (
  <div className="home-container">
    <h1 className="text-3xl font-bold mb-4 text-primary">Recent Posts</h1>
    <div className="h-[calc(100vh-200px)] overflow-y-auto">
      <RecentPosts />
    </div>
  </div>
);

const RecentPosts = () => (
  <div className="space-y-6">
    <Post
      imageUrl="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwZXxlbnwwfHx8fDE2NTg3Nzg2OTM&ixlib=rb-1.2.1&q=80&w=400"
      caption="This is an example of a post caption."
      likes={123}
      comments={[
        { user: "User1", text: "Awesome picture!" },
        { user: "User2", text: "Love this!" },
      ]}
    />
    <Post
      imageUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGZhc2hpb258ZW58MHx8fHwxNjU4Nzc4Njkz&ixlib=rb-1.2.1&q=80&w=400"
      caption="This is another example of a post caption."
      likes={456}
      comments={[
        { user: "User3", text: "Great shot!" },
        { user: "User4", text: "Beautiful!" },
      ]}
    />
    {/* Add more Post components here to see the scrolling effect */}
  </div>
);

const Post = ({ imageUrl, caption, likes, comments }) => (
  <div className="card p-4 bg-white shadow-md rounded-lg">
    <img src={imageUrl} alt="Post" className="rounded-lg mb-4 w-full" />
    <p className="text-text-light mb-2">{caption}</p>
    <div className="text-text-light mb-2">
      <strong>Likes: </strong>
      {likes}
    </div>
    <div className="text-text-light">
      <h4 className="font-semibold">Comments</h4>
      {comments.map((comment, index) => (
        <p key={index}>
          <strong>{comment.user}:</strong> {comment.text}
        </p>
      ))}
    </div>
  </div>
);

export default Home;