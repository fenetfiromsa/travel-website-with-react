
import { useState } from 'react'
function Loginpage() {

  const [isLogin, setIsLogin] = useState(true) 


  return (
  
    <div className=' h-full w-full overflow-hidden bg-white '>
    <div className='w-96 rounded-2xl h-auto py-5 pl-8 mt-10 border-solid bg-[#FFF8DC]  ml-[410px]'>
      <h1 className='text-black-500 font-bold text-3xl pt-5'>
        {isLogin?'Login':'Signup'}
      </h1>
      <div className='flex justify-center mt-7'>
        <button 
         onClick={() => setIsLogin(true)}
            className={`px-14 py-2 rounded-2xl transition ${
              isLogin ? 'bg-black text-white' : 'border border-black text-black'
            }`}
        >Login</button>
        <button 
        onClick={() => setIsLogin(false)}
            className={`px-14 py-2 rounded-2xl transition ${
              !isLogin ? 'bg-black text-white' : 'border border-black text-black'
            }`}
        >Signup</button>
      </div>
     <form>
      {!isLogin && (
        <input
              type="text"
              placeholder="Full Name"
              className="w-80  px-4 py-3 mt-7 rounded-xl bg-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
      )}
      <input
            type="email"
            placeholder="Email Address"
            className="w-80 px-4 py-3 mt-7 rounded-xl bg-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-80 px-4 py-3  mt-7 rounded-xl bg-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-80 px-4 py-3  mt-7 rounded-xl bg-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          )}
          {isLogin &&(
            <p className='text-red-900 text-start ml-9'>forgot your password?</p>
          )}
        </form>

        <button className='px-36 bg-black text-white rounded-xl py-3 mt-10'>{isLogin?'Login':'Signup'}</button>
    
    </div>
    </div>
    
    
  )
}

export default Loginpage