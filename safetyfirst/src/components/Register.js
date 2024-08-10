import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Register = () => {
  const [loginMethod, setLoginMethod] = useState('app');

  return (
    <div className="register-container flex flex-col md:flex-row items-stretch">

      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="mb-6">
          <img src="/Singpass_logo.png" alt="Singpass Logo" className="w-25 h-15 mb-4" />
          <h1 className="text-4xl font-bold">Log in with Singpass</h1>
          <p className="text-gray-600">Your trusted digital identity</p>
        </div>
        
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex">
              <button
                className={`flex-1 py-2 text-center ${loginMethod === 'app' ? 'bg-white text-red-500 border-b-2 border-red-500' : 'bg-gray-100 text-gray-500'}`}
                onClick={() => setLoginMethod('app')}
              >
                Singpass app
              </button>
              <button
                className={`flex-1 py-2 text-center ${loginMethod === 'password' ? 'bg-white text-red-500 border-b-2 border-red-500' : 'bg-gray-100 text-gray-500'}`}
                onClick={() => setLoginMethod('password')}
              >
                Password login
              </button>
            </div>
            
            {loginMethod === 'app' ? (
              <div className="p-6 text-center">
                <img src="/LoginQRCode.jpg" alt="QR Code" className="mx-auto w-200 h-200" />
              </div>
            ) : (
              <form className="p-6 space-y-4">
                <div>
                  <Label htmlFor="singpass-id">Singpass ID</Label>
                  <Input type="text" id="singpass-id" name="singpass-id" placeholder="Enter your Singpass ID" required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">Log in</Button>
                <div className="flex justify-between text-sm text-blue-600">
                  <a href="." className="hover:underline">Retrieve Singpass ID</a>
                  <a href="." className="hover:underline">Reset password</a>
                </div>
              </form>
            )}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline" className="w-full">Register for Singpass</Button>
          </div>
        </div>

        <div className="mt-8 text-sm text-center">
          <a href="." className="text-blue-600 hover:underline">Register for Singpass</a>
        </div>
        <div className="mt-2 text-sm text-center">
          <a href="." className="text-blue-600 hover:underline">Download Singpass app</a>
        </div>
      </div>
    </div>
  );
};

export default Register;