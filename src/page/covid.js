import React, { useEffect ,useState} from 'react';
import fetch from 'node-fetch';
import CovidCard from '../components/covid_card';

function Covid(props) {
    const endpoint = "https://api.covid19india.org/state_district_wise.json";
    const [data, updateData] = useState({});

    const fetchData = async function () {
      console.log("API Called");
      const response = await fetch(endpoint);
      const json = await response.json();
      updateData(json);
    }

    useEffect(function(){
        fetchData();
    },[]);

    const satesName =  Object.keys(data); // Array with name of all state
  return (
    <div className="container">
        {/* { JSON.stringify(data) } */}
        {
            satesName.map(name => <CovidCard keys={name} name={name} data={data[name]} />)
        }
    </div>
  );
}

export default Covid;