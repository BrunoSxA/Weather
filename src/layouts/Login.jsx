import React from 'react'

export default function Login() {
  return (
    <div className="bg-[#080710] h-screen flex justify-center items-center">
      <div className='w-[430px] h-[520px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div
          className='absolute h-[200px] w-[200px] rounded-full'
          style={{ background: 'linear-gradient(#1845ad, #23a2f6)', left: '-80px', top: '-80px' }}
        />
        <div
          className='absolute h-[200px] w-[200px] rounded-full'
          style={{ background: 'linear-gradient(to right, #ff512f, #f09819)', right: '-30px', bottom: '-80px' }}
        />
        <form
          className='h-[520px] w-[400px] bg-[#ffffff21] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 rounded-2xl border-[#ffffff1a] backdrop-blur-md shadow-[0_0_40px_rgba(8,7,16,0.6)] p-[50px_35px]'
        >
          <div className='font-poppins text-white tracking-[0.5px] outline-none border-none'>
            <h3 className='text-3xl font-bold text-center'>Login</h3>

            <label className='block mt-4 mb-2' htmlFor="username">Nombre de Usuario</label>
            <input
              type="text"
              id="username"
              placeholder="Email or Phone"
              className='h-[50px] w-full max-w-md bg-gray-500 border border-white/20 rounded-md px-4 py-2 font-light text-white placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300'
            />

            <label className='block mt-4 mb-2' htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className='h-[50px] w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 font-light text-white placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300'
            />

            <button className='mt-12 w-full bg-white text-[#080710] py-3 text-lg font-semibold rounded-xl shadow-md hover:bg-gray-100 active:scale-[.98] transition-all duration-300'>
              Log In
            </button>

            <div className="mt-7 flex justify-around">
              <div className="w-[150px] border rounded-md px-1 py-2.5 bg-[#ffffff45] text-[#eaf0fb] text-center hover:bg-[#ffffff78]">
                <i className="mr-1 fab fa-google"></i> Google
              </div>
              <div className="w-[150px] border rounded-md px-1 py-2.5 bg-[#ffffff45] text-[#eaf0fb] text-center hover:bg-[#ffffff78] ml-6">
                <i className="mr-1 fab fa-facebook"></i> Facebook
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}
