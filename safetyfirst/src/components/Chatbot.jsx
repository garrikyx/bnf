import React, { useState } from 'react';
import { MessageSquare, X, ThumbsUp, ThumbsDown, Smile, Paperclip, Send } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);

  const startChat = () => {
    setChatStarted(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600"
        >
          <MessageSquare />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-[32rem] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">•••</span>
              <h3 className="font-semibold text-gray-700">AI Chatbot</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-gray-700">−</button>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={18} />
              </button>
            </div>
          </div>
          
          {!chatStarted ? (
            <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mb-4"></div>
              <p className="text-gray-600 mb-4">
                By pressing the "Start chat" button you agree to have your personal data processed as described in our Privacy Policy.
              </p>
              <button
                onClick={startChat}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
              >
                Start 
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center p-4 border-b">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Albert</h4>
                  <p className="text-sm text-gray-500">Support Agent</p>
                </div>
                <div className="ml-auto flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600"><ThumbsUp size={18} /></button>
                  <button className="text-gray-400 hover:text-gray-600"><ThumbsDown size={18} /></button>
                </div>
              </div>
              <div className="flex-grow p-4 overflow-auto space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-2 max-w-[80%]">
                    <p className="text-sm text-gray-800">Hello!</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-2 max-w-[80%]">
                    <p className="text-sm text-gray-800">
                      Welcome to LiveChat. Pick a topic from the list or type down a question!
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t p-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Write a messge"
                    className="flex-grow px-3 py-2 border rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <div className="flex">
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <Smile size={20} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <Paperclip size={20} />
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded-r-full hover:bg-blue-600">
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="text-center text-xs text-gray-500 p-2">
            Powered by BNF
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;