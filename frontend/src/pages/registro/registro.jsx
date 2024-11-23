import React from 'react'
import Layout from '../../Components/Layout/Layout'

export default function registro() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center 1  h-screen bg-gray-100">
<div className="bg-white p-10 rounded-lg shadow-md">
<h1 className="text-3xl font-bold mb-6">Sign in</h1>
<form>
<div className="mb-4">
<label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
<input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </div>
{/* ... otros campos (username, password) ... */}
<button className="bg-orange-500 hover:bg-orange-700 3  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> 4 
Sign In
</button>
</form>
</div>
</div>
    </Layout>
  )
}
