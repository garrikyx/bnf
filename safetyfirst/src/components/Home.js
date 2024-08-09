import React from 'react';
import { Button } from "./ui/button";

const Home = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to SG SafeNet</h1>
    <p className="mb-8 text-lg text-gray-600">Your platform for a safer online experience in Singapore.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      
    </div>
    
    {/* Recent Posts Section */}
    <RecentPosts />

    {/* Subscribe Section */}
    <SubscribeSection />
  </div>
);

const RecentPosts = () => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 className="text-3xl font-bold mb-4 text-blue-600">Recent Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Post
        imageUrl="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhbmRzY2FwZXxlbnwwfHx8fDE2NTg3Nzg2OTM&ixlib=rb-1.2.1&q=80&w=400"
        caption="This is an example of a post caption."
        likes={123}
        comments={[
          { user: "User1", text: "Awesome picture!" },
          { user: "User2", text: "Love this!" }
        ]}
      />
      <Post
        imageUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGZhc2hpb258ZW58MHx8fHwxNjU4Nzc4Njkz&ixlib=rb-1.2.1&q=80&w=400"
        caption="This is another example of a post caption."
        likes={456}
        comments={[
          { user: "User3", text: "Great shot!" },
          { user: "User4", text: "Beautiful!" }
        ]}
      />
    </div>
  </div>
);

const Post = ({ imageUrl, caption, likes, comments }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={imageUrl} alt="Post" className="rounded-lg mb-4" />
    <p className="text-gray-600 mb-2">{caption}</p>
    <div className="text-gray-600 mb-2">
      <strong>Likes: </strong>{likes}
    </div>
    <div className="text-gray-600 mb-4">
      <h4 className="font-semibold">Comments</h4>
      {comments.map((comment, index) => (
        <p key={index}><strong>{comment.user}:</strong> {comment.text}</p>
      ))}
    </div>
  </div>
);

const SubscribeSection = () => (
  <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-12">
    <h2 className="text-3xl font-bold mb-4 text-blue-600">Stay Updated</h2>
    <p className="mb-4 text-gray-600">Subscribe to get the latest updates</p>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder="First Name"
        className="p-2 rounded-lg border border-blue-300"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="p-2 rounded-lg border border-blue-300"
        required
      />
      <Button type="submit" className="w-full md:col-span-2 bg-blue-500 hover:bg-blue-600 text-white">Subscribe</Button>
    </form>
  </div>
);

export default Home;
