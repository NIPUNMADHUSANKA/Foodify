import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
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

    <Paper sx={{backgroundColor: "#171717"}} >

      <Box sx={{ml:"5%"}} pt={3} >

            <Typography variant="h5" component="h2" textAlign="center" color="#fff">
              {chartHead}
            </Typography>

            <select id="select" style={{ width: '15%', margin: '10px', backgroundColor:"#2E2E2E", border:"none", color:"#E0E0E0", padding:"8px"}} onChange={this.changeData}>
              <option>Weekly</option>
              <option>Daily</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>

            <select id="select" style={{ width: '15%', margin: '10px', backgroundColor:"#2E2E2E", border:"none", color:"#E0E0E0", padding:"8px" }} onChange={this.changeData}>
              <option>Sodium</option>
              <option>Sodium</option>
              <option>Sodium</option>
            </select>

      </Box>
      
        <Chart
          data={chartData}
          style={{backgroundColor: "#171717"}}
        >

        
         
          <ArgumentAxis />
          <ValueAxis max={7} />

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
