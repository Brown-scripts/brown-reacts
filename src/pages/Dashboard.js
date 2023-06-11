import { faDashboard, faDiagramProject, faInfoCircle, faSchool, faSignOut, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavListItem from "../components/NavListItem";
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler, BarElement } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
    ArcElement, 
    RadialLinearScale,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement, 
    BarElement,
    Tooltip, 
    Filler,
    Legend
    );

function Dashboard() {

    const data = {
        labels: ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'teal',
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
      };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        }
    }

    return (
      <div className=" App-header bg-gray-900 flex flex-col">
        <div className="bg-gray-900 grid grid-cols-9 px-10 mx-10 flex-1">
       
            <div className="col-span-2 px-5 py-10 text-gray-400 bg-gray-900 flex-col justify-start">
                <FontAwesomeIcon className="p-5" icon={faSchool} size="2x" color="#E879F9" />
                <NavListItem to={'/dashboard'} className={'bg-gray-900'} icon={faDashboard} text={'Dashboard'} />
                <NavListItem to={'/student-info'} icon={faInfoCircle} text={'Info Entry'} />
                <NavListItem icon={faTableCells} text={'Time Tables'} />
                <NavListItem icon={faDiagramProject} text={'Examinations'} />
                <NavListItem to={'/login'} icon={faSignOut} text={'Sign Out'} />
            </div>
        <div className="flex flex-col col-span-full md:col-span-7 px-5 py-10">
            <div className=" text-white text-3xl text-gray-100 mt-5 mb-9">Dashboard</div>
            <div className="flex-1">
                <div className=" grid grid-cols-2 flex-1">
                    <div className="p-5 w-full rounded flex-col justify-center items-center">
                    <Bar data={data} options={options} />
                    <Line data={data} options={options} />
                    </div>
                    <div className="p-5 w-full rounded flex justify-center items-center">
                    <Doughnut data={data}/>
                    </div>
                </div>
            </div>
        </div>
     </div>
      </div>
  ); 
}

export default Dashboard;
