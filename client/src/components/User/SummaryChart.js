import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Box, Typography } from '@mui/material';



export default class SummaryChart extends React.PureComponent {

  constructor(props) {
    super(props);

    const data = this.props.chartData;
    const Head = this.props.Head;

    this.state = {
      data,
      Head
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { Head: chartHead } = this.state;

    return (

    <Paper sx={{backgroundColor: "#eee", borderRadius:"20px", mb:"20px"}}>

      <Box sx={{ml:"5%"}} pt={3} >

            <Typography variant="h5" component="h2" textAlign="center" color="#171717" fontWeight="bold">
              {chartHead}
            </Typography>

            <select id="select" style={{ width: '15%', margin: '10px', backgroundColor:"#ddd", border:"none", color:"#222", padding:"8px"}} onChange={this.changeData}>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>

            <select id="select" style={{ width: '15%', margin: '10px', backgroundColor:"#ddd", border:"none", color:"#222", padding:"8px" }} onChange={this.changeData}>
              <option>Calories</option>
              <option>Fat</option>
              <option>Protein</option>
              <option>Carbo</option>
            </select>

      </Box>
      
        <Chart
          data={chartData}
          style={{backgroundColor: "#eee"}}
        >

        
         
          <ArgumentAxis fill="#fff !import" />
          <ValueAxis max={10} fill="#fff !import" />

          <BarSeries
            valueField="val"
            argumentField="Day"
            fill={"#95CD41"}    
          />
          
          <Animation />
        </Chart>
      </Paper>
    );

  }
}
