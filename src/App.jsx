import './App.css';
import Announcement from './Components/Announcement';
import Charts from './Components/Charts';
import Navbar from './Components/Navbar';
import RecentAcitivity from './Components/RecentAcitivity';
import Sidebar from './Components/Sidebar';
import Sticky from './Components/Sticky';
import UpcomingSchdule from './Components/UpcomingSchdule';
function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <Navbar/>
      <UpcomingSchdule/>
      <RecentAcitivity/>
      <Sticky/>
      <Charts/>
      <Announcement/>
     </div>
  )
}

export default App;
