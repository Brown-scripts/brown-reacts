import { faDashboard, faDiagramProject, faInfoCircle, faSchool, faSignOut, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavListItem from "../components/NavListItem";

function StudentInfo() {

    return (
      <div className=" App-header bg-gray-900 flex flex-col">
        <div className="bg-gray-900 grid grid-cols-9 px-10 mx-10 flex-1">
       
            <div className="col-span-2 px-5 py-10 text-gray-400 bg-gray-900 flex-col justify-start">
                <FontAwesomeIcon className="p-5" icon={faSchool} size="2x" color="#E879F9" />
                <NavListItem to={'/dashboard'} icon={faDashboard} text={'Dashboard'} />
                <NavListItem to={'/student-info'} className={'bg-gray-900'} icon={faInfoCircle} text={'Info Entry'} />
                <NavListItem icon={faTableCells} text={'Time Tables'} />
                <NavListItem icon={faDiagramProject} text={'Examinations'} />
                <NavListItem to={'/login'} icon={faSignOut} text={'Sign Out'} />
            </div>
        <div className="flex flex-col col-span-full md:col-span-7 px-5 py-10">
            <div className=" text-white text-3xl text-gray-100 mt-5 mb-9">Student Info</div>
            <div className="flex-1">
            <form class="w-full bg-gray-800 shadow-md rounded px-8 pt-6 pb-8">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
      </input>
    </div>
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
      </input>
    </div>
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-last-name">
        Other Name(s)
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
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-email">
        Email
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="john@example.com">
      </input>
    </div>
    <div class="w-full md:w-1/4 px-3">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-dob">
        Date of Birth
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-dob" type="date">
      </input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/4 px-3">
      <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-fuchsia-500 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
      </input>
    </div>
  </div>
  <div className="flex justify-end">
      <button class="bg-fuchsia-500 ml-auto hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Update
      </button>
  </div>
</form>
            </div>
        </div>
     </div>
      </div>
  ); 
}

export default StudentInfo;
