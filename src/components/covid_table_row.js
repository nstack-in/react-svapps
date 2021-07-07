import React from 'react';

function CovidTableRow(props) {
  const districtCovidData = props.data;
  const name = props.name;

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
  );
}

export default CovidTableRow;
