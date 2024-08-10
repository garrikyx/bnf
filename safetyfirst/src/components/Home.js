import React from "react";
import { Heart, MessageCircle, ChevronDown } from 'lucide-react';

const Home = () => (
  <div className="home-container">
    <h1 className="text-3xl font-bold mb-4 text-primary">Recent Posts</h1>
    <div className="h-[calc(100vh-200px)] ">
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
        { user: "User3", text: "Nice!" },
        { user: "User3", text: "Let's Meet!!" },
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
  <div className="card p-4 bg-white shadow-md rounded-lg max-w-md mx-auto">
    <img src={imageUrl} alt="Post" className="rounded-lg mb-4 w-full" />
    <div className="flex items-center mb-2 space-x-4">
      <button className="flex items-center text-gray-600 hover:text-red-500">
        <Heart className="mr-1" size={20} />
        <span>{likes}</span>
      </button>
      <button className="flex items-center text-gray-600 hover:text-blue-500">
        <MessageCircle className="mr-1" size={20} />
        <span>{comments.length}</span>
      </button>
    </div>
    <p className="text-text-light mb-4">{caption}</p>
    <div className="text-text-light">

        <h4 className="font-semibold">Comments</h4>
      {comments.slice(0, 2).map((comment, index) => (
        <p key={index} className="mb-1">
          <strong>{comment.user}:</strong> {comment.text}
        </p>
      ))}
      {comments.length > 2 && (
        <button className="text-blue-500 hover:underline flex items-center">
          View more <ChevronDown size={16} className="ml-1" />
        </button>
      )}
    </div>
  </div>
);

export default Home;