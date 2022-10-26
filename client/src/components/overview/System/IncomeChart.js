import * as React from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Box, Typography, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from "axios";
import authHeader from '../../../services/auth-header';
import { min } from 'date-fns';
import { MinimizeTwoTone } from '@mui/icons-material';
// import _ from '@underscore';

//------------------------------styles for calendar
const popperSx = {
  "& .MuiPaper-root": {
    backgroundColor: "rgba(120, 120, 120, 0.5)",
    color: "#000",
    marginTop: "10px",
  },
  "& .css-j1tbx-MuiButtonBase-root-MuiPickersDay-root:hover": {
    backgroundColor: "#95CD41"
  },
  "& .css-1d8508y-MuiTypography-root": {
    color: "#000",
  },
  "& .MuiSvgIcon-root": {
    color: "#000",
  },
};

const chartSx = {
    "& .css-cm3ohd.Target-root": {
        fill: "#fff"
    }

}

function IncomeChart(props) {

  console.log(props.data);

  const data = props.data;

  const chData = [];
  // const [chartData, setchartData] = React.useState(chData);

  Object.keys(data).map(key => {
    chData.push({Key:key, Value: data[key]})
  })
  // setchartData(chData)
 
  


  //------------------------------------------------------------handeling calender changing dates
  // const [date, setDate] = React.useState(new Date());

//   // const details = data.data;
  
//   const chData = [
//     { Nutrition: 'Cal.', val: details.calaries },
//     { Nutrition: 'Fat', val: details.fat },
//     { Nutrition: 'Prot.', val: details.protein },
//     { Nutrition: 'Carbo', val: details.carbo },
//   ];

//   setchartData(chData);
      
      
  return (

    <Chart
      data={chData}
      style={{ backgroundColor: "rgba(23, 23, 23, 0.8)", minWidth: "110vh" }}
      sx = {chartSx}
    >

      <ArgumentAxis fill="#333 !import" />
      <ValueAxis max={10} fill="#333 !import" />

      <BarSeries
        valueField="Value"
        argumentField="Key"
        fill={"rgb(149, 205, 65)"}
      />

      <Animation />
    </Chart>
  )
}

export default IncomeChart