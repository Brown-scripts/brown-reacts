import { faLandmark, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function Signup() {
  return (
      <div className="App-header flex flex-col bg-gray-900 align-center">
    <div className="flex uppercase justify-end text-fuchsia-200 py-10">
      <FontAwesomeIcon className="mr-auto ml-20 pl-10" icon={faSchool} size="2x" color="#E879F9" />
    <Link to={'/login'} className="mr-10 hover:text-sm cursor-pointer hover:text-fuchsia-600">Login</Link>
    <Link to={'/register'} className="mr-20 hover:text-sm cursor-pointer hover:text-fuchsia-600">Register</Link>
  </div>
  <div className="bg-gray-900 grid grid-cols-9 px-10 my-auto">
       
       <div className="col-span-3 bg-gray-900 hidden md:flex hover:flex-column justify-end pl-10 pb-10">
         <div className="w-8 h-10 bg-fuchsia-400 flex items-center justify-center rounded-b-xl">
         </div>
         <div className="flex flex-col text-fuchsia-100 w-10 0 h-20 bg-fuchsia-700 flex items-center justify-center mx-2 rounded-b-xl">
         </div>
         <div className="w-8 h-10 bg-fuchsia-400 flex items-center justify-center rounded-b-xl">
         </div>
         <FontAwesomeIcon className="my-auto" icon={faLandmark} size="10x" color="#A21CAF" />
       </div>
     <div className="flex justify-center items-center col-span-full md:col-span-6">
     <form style={{height: 450}} className="w-full max-w-lg bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 overflow-scroll">
      <div className=" text-white text-4xl text-gray-100 mb-12">Registration</div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
      </input>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
      </input>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-id">
        Student ID
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-id" type="text" placeholder="10101010">
      </input>
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-level">
        Level
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-100 border border-fuchsia-500 text-gray-900 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-level">
          <option>100</option>
          <option>200</option>
          <option>300</option>
          <option>400</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-email">
        Email
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="john@example.com">
      </input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
      </input>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex justify-end">
      <Link to='/dashboard'>
      <button class="bg-fuchsia-500 ml-auto hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Register
      </button>
      </Link>
  </div>
</form>
     </div>
     </div>
      </div>
  ); 
}

export default Signup;
