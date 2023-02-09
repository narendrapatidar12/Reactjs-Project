import React, { useEffect, useState } from 'react';
import './StateWise.css';

const StateWise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch('https://data.covid19india.org/data.json')
    const atualData = await res.json();
    // console.log(atualData.statewise)
    setData(atualData.statewise)
  }  
  useEffect(() => {
    getCovidData();
  }, [])  
  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='main-heading'>
            <h1 className="mb-5 text-center"><span className='font-weight-bold'>INDIA</span> COVID-19 Dashboard</h1>
        </div>
        <div className='table-responsive'>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>recovered</th>
                        <th>deaths</th>
                        <th>active</th>
                        <th>updated</th>
                    </tr>
                </thead>
                <tbody>
                     {data.map((curElem, ind) => {
                        return(  
                          <tr key={ind}>
                            <td>{curElem.state}</td>
                            <td>{curElem.confirmed}</td>
                            <td>{curElem.recovered}</td>
                            <td>{curElem.deaths}</td>
                            <td>{curElem.active}</td>
                            <td>{curElem.lastupdatedtime}</td>
                          </tr>  
                        ) 
                      }) 
                    } 
                   
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default StateWise;
