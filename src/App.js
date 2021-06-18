import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaAngleDoubleRight} from 'react-icons/fa';
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url);
      setJobs(data.data);
      setLoading(false);
    }
    fetchData();
  }, [])
  if (loading) {
    return <section className="section loading">
      <h1>Loading..</h1>
    </section>
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container"> 
        {
          jobs.map((item,index)=> <button 
          key={index} 
          onClick={()=>setValue(index)}
          className={`job-btn ${index===value && `active-btn`}`}
          >{item.company}</button>)
        }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((item,index)=>{
              return <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"/>
                <p>{item }</p>
              </div>
            })
          }
        </article>
      </div>
    </section>
  );
}

export default App;
