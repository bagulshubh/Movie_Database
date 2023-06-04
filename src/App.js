import './App.css';
import Navbar from './componets/Navbar';
import FirstPagecom from './pages/FirstPagecom';
import Option from './componets/Option';
import { useEffect , useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Search from './pages/Search';
import Series from './pages/Series';
import Anime from './pages/Anime';
import Filters from './pages/Filter';

function App() {

  let [firstPageData,setfirstPageData] = useState([]);

  let [title,setTitle] = useState("");
  let [page,setpage] = useState("home");

  const [loading,setloading] = useState(false);
  const [searchloading ,setsearchloading] = useState(false);
  let [output,setOutput] = useState([]);
  let [isInput,setisInput] = useState(false);
  let [filed,setFeiled] = useState("top_boxoffice_last_weekend_10");
  let [filterClicked,setFilterClicked] = useState(false);
  let [DarkMode,setDarkMode] = useState(false);


  let api = `https://www.omdbapi.com/?t=${title}&apikey=a497dec2`;

  async function fecthApi(){
      setsearchloading(true);
    
      const response = await fetch(api);
      const convertedresponse = await response.json();
      if (convertedresponse.Response==="True") {
        setOutput(convertedresponse);
        console.log(convertedresponse);
        if(title!==""){
          setisInput(true);
        }
        else{
          setisInput(false);
        }
      }
      else{
        setisInput(false);
      }
      setsearchloading(false);
  }

  async function firstPage(){

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '84686e48ecmsh23cfdca30f8f057p16bf38jsn9c36f2169669',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    
     const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles?list=top_boxoffice_200&limit=10', options);
      
     const firstResult = await response.json();
     setfirstPageData(firstResult.results);
     setloading(false);
    console.log("This is firstpage result",firstResult);
  }

  
  useEffect( ()=>{
    setloading(true);
    firstPage();
  },[])

  return (
    <div className={DarkMode? 'wrapper dark':'wrapper'}>
      <div className='container'>

        <Navbar title={title} setTitle={setTitle} fecthApi={fecthApi} filterClicked={filterClicked} setFilterClicked={setFilterClicked} filed={filed} setFeiled={setFeiled} DarkMode={DarkMode} setDarkMode={setDarkMode}></Navbar>

        <Option setTitle={setTitle} page={page} setpage={setpage} filterClicked={filterClicked} setFilterClicked={setFilterClicked} DarkMode = {DarkMode}></Option>

        <Routes>

          {/* Home Page  === first page for movies*/} 
          <Route path='/' element={<FirstPagecom loading = {loading} firstPageData={firstPageData} setfirstPageData={setfirstPageData} title={title} setTitle={setTitle} DarkMode={DarkMode}></FirstPagecom>}></Route>

          {/* Search Result Page */}
          <Route path='/search' element={<Search output={output} isInput={isInput} searchloading={searchloading} DarkMode={DarkMode}></Search>}></Route>

          {/* Web series page */}
          <Route path='/series' element={<Series title={title} setTitle={setTitle} DarkMode={DarkMode}></Series>} ></Route>

          {/* Page for Anime */}
          <Route path='/anime' element={<Anime DarkMode={DarkMode}></Anime>}></Route>

          {/* Filer  route for all filers*/}
          <Route path='/filter' element={<Filters filed={filed} setFeiled={setFeiled} filterClicked={filterClicked} setFilterClicked={setFilterClicked} title={title} setTitle={setTitle} DarkMode={DarkMode}></Filters>}> </Route>

        </Routes>

        


      </div>
    </div>
  );
}

export default App;
