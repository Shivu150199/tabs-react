import { useState,useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading,setLoading]=useState(true);
  const [jobs,setJobs]=useState([])
  const [currentItem, setCurrentItem]=useState(0)


const fetchJob=async()=>{
  const response=await fetch(url)
  const newJobs=await response.json()
  setJobs(newJobs)
  setLoading(false)
}


  useEffect(()=>{
fetchJob()
  },[])
  if (isLoading){
    return <section className="jobs-center">
<div className="loading">

</div>
    </section>  }
   
  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>

      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  ) 
};
export default App;
