import logo from './logo.svg';
import './App.css';
import { FaUserFriends } from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 shadow-2xl">
        <div className="col-span-2">
          <img src="https://source.unsplash.com/random/600x300/?img=1" className="" alt="" />
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-4 px-6 py-4">
            <div>
              <h3 className="text-lg font-semibold">Tata Motors EV</h3>
              <p className="text-sm">Lorem, ipsum dolor.</p>
              <div className="pt-4">
                <div className="py-1">
                <FaUserFriends className="inline-block text-gray-400"/><span className='text-gray-400 text-sm px-2'>Lorem, ipsum dolor.</span> <span className="text-sm pl-4">Lorem, ipsum dolor.</span>
                </div>
                <div className="py-1">
                <FaUserFriends className="inline-block text-gray-400"/><span className='text-gray-400 text-sm px-2'>Lorem, ipsum dolor.</span> <span className="text-sm pl-4">Lorem, ipsum dolor.</span>
                </div>
                <div className="py-1">
                <FaUserFriends className="inline-block text-gray-400"/><span className='text-gray-400 text-sm px-2'>Lorem, ipsum dolor.</span> <span className="text-sm pl-4">Lorem, ipsum dolor.</span>
                </div>
                <div className="py-1">
                <FaUserFriends className="inline-block text-gray-400"/><span className='text-gray-400 text-sm px-2'>Lorem, ipsum dolor.</span> <span className="text-sm pl-4">Lorem, ipsum dolor.</span>
                </div>
              </div>
            </div>
            <div className="text-end">
              <h3 className="text-lg font-bold">2.5 lakhs</h3>
              <p className="text-sm font-light">Lorem ipsum dolor sit amet.</p>
              <button class="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded relative top-24">
                View offers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
