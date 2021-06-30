import React from 'react';

function CovidCard(props) {
    const state = props.data;   // Data of this state
    const name = props.name;    // Name of this state
    const AlldistrictData = state['districtData'];  // All District data of this state

    const districtsName = Object.keys(AlldistrictData);

    return (
        <div className="card mb-3 mt-2">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <table className="table table-striped table-bordered my-2" key={name}>
                    <tbody>
                        <tr>
                            <td width="320">Name</td>
                            <td>Active</td>
                            <td>Confirmed</td>
                            <td>Deceased</td>
                            <td>Delta</td>
                        </tr>

                        
                        {
                            districtsName.map(function (name) {
                                const districtCovidData = AlldistrictData[name];
                                return (

                                    <tr>
                                        <td>{name} </td>
                                        <td>{districtCovidData['active']} </td>
                                        <td>{districtCovidData['confirmed']} </td>
                                        <td>{districtCovidData['deceased']} </td>
                                        <td>
                                            {districtCovidData['delta']['confirmed']} , 
                                            {districtCovidData['delta']['deceased']} , 
                                            {districtCovidData['delta']['recovered']}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default CovidCard