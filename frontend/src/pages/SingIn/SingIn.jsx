import React from 'react'
import Layout from '../../Components/Layout/Layout'

export default function SingIn() {
  return (
    <Layout>
   
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Long In</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <button className="w-full py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition">
          Log in
        </button>
        <a
          href="#"
          className="block mt-4 text-sm text-gray-600 underline hover:text-gray-800"
        >
          Create new account
        </a>
      </div>
  
    </Layout>
  )
}
