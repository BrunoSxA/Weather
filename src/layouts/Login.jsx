import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="relative bg-[#080710] min-h-screen flex justify-center items-center px-4 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 bg-gradient-to-br from-[#1845ad] to-[#23a2f6] rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-24 -right-16 h-72 w-72 bg-gradient-to-br from-[#ff512f] to-[#f09819] rounded-full blur-3xl opacity-40" />

      <div className="relative w-full max-w-md bg-[#ffffff21] border-4 border-[#ffffff1a] backdrop-blur-md shadow-[0_0_40px_rgba(8,7,16,0.6)] rounded-2xl p-6 sm:p-8 md:p-10">
        <form className="flex flex-col gap-6">
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">Login</h3>

          <div>
            <label className="block text-white mb-1" htmlFor="username">Nombre de Usuario</label>
            <input
              type="text"
              id="username"
              placeholder="Email or Phone"
              className="h-12 w-full bg-gray-500 border border-white/20 rounded-md px-4 text-white placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-white mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="h-12 w-full bg-gray-500  border border-white/20 rounded-md px-4 text-white placeholder-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
            />
          </div>
          <Link to={"/home"}>
            <button className="mt-2 w-full bg-white text-[#080710] py-3 text-lg font-semibold rounded-xl shadow-md hover:bg-gray-100 active:scale-[.98] transition-all duration-300">
              Log In
            </button>
          </Link>
          <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex-1 border rounded-md py-2.5 bg-[#ffffff45] text-[#eaf0fb] text-center hover:bg-[#ffffff78] cursor-pointer">
              <i className="mr-1 fab fa-google" /> Google
            </div>
            <div className="flex-1 border rounded-md py-2.5 bg-[#ffffff45] text-[#eaf0fb] text-center hover:bg-[#ffffff78] cursor-pointer">
              <i className="mr-1 fab fa-facebook" /> Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
