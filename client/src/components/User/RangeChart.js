import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import axios from 'axios';
import authHeader from "../../services/auth-header";

import { Link } from 'react-router-dom';


const tableSx = {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: 'rgba(23, 23, 23, 0.8)',
  marginBottom: '40px',

  "& .MuiTableCell-stickyHeader": {
    fontFamily: 'Poppins',
    backgroundColor: "#111",
    color: '#fff',
    fontSize: 16,
  },

  "& .MuiTableCell-root": {
    color: '#fff',
    bpaymentBottom: "1px solid rgba(210, 210, 210, 0.5)",
    fontFamily: "Poppins",
    fontSize: "16px"
    // cursor: "default"
  },

  "& .MuiSvgIcon-root": {
    color: '#fff',
  },

  "& .MuiTablePagination-menuItem": {
    color: "#000",
    fontSize: "14px"
  }
}

const theme = createTheme({
  palette: {
    success: {
      main: '#95CD41'
    },
    error: {
      main: '#FAC213'
    },
    warning: {
      main: '#f44336'
    }
  },
});

//----------------------------------------------------------Pagination function
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

//----------------------------------------------------------Pagination Prop definition
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

//----------------------------------------------------------Table Row Define
function createData(id, resturant, purches_time, intake_time, Cal, Fat, Protein, Carbo, Price) {

  

  var Items = [];

  axios.get("http://localhost:8072/FoodiFy/Premium/getPendingItems/"+id ,{ headers: authHeader() })
  .then(data => {

    const X = data.data;

    Object.keys(X).map((key,index)=>{
      Items.push(X[key]);
    })

  })
  .catch(error => {
    console.log(error)
  })

  return {    
    resturant,
    purches_time,
    intake_time,
    Cal,
    Fat,
    Protein,
    Carbo,
    Price,

    details: Items
  };
}


//----------------------------------------------------------Table Row Initialize and Sorting

var rows = [];

axios.get("http://localhost:8072/FoodiFy/Premium/getPending", { headers: authHeader() })
  .then(data => {

    const X = data.data;

    Object.keys(X).map((key, index) => {

      rows.push(createData(X[key].id, X[key].resturant, X[key].purches_time, X[key].intake_time, X[key].calaries, X[key].fat, X[key].protein, X[key].carbo, X[key].price))

    })

  })
  .catch(error => {
    console.log(error)
  })


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>

      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell >{row.resturant}</TableCell>
        <TableCell >{row.purches_time}</TableCell>
        <TableCell >{row.intake_time}</TableCell>
        <TableCell >{row.Cal}</TableCell>
        <TableCell >{row.Fat}</TableCell>
        <TableCell >{row.Protein}</TableCell>
        <TableCell >{row.Carbo}</TableCell>
        <TableCell >{row.Price}</TableCell>
      </TableRow>


      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, border: "none" }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ marginBottom: 3, marginTop: 1 }}>
              <Typography fontFamily='Poppins'>
                {row.resturant}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price (Rs.)</TableCell>
                    <TableCell>Calories (g)</TableCell>
                    <TableCell>Fat (g)</TableCell>
                    <TableCell>Protein (g)</TableCell>
                    <TableCell>Carbo (g)</TableCell>

                    <TableCell ></TableCell>
                    <TableCell ></TableCell>
                    <TableCell ></TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.item}>
                      <TableCell component="th" scope="row">
                        {detailsRow.item}
                      </TableCell>
                      <TableCell align="right">{detailsRow.quantity}</TableCell>
                      <TableCell align="right">{detailsRow.price}</TableCell>
                      <TableCell align="right">{detailsRow.calaries}</TableCell>
                      <TableCell align="right">{detailsRow.fat}</TableCell>
                      <TableCell align="right">{detailsRow.protein}</TableCell>
                      <TableCell align="right">{detailsRow.carbo}</TableCell>

                      <TableCell><Button component={Link} to='/restaurantorder' variant="contained" color="success" size="small">Add</Button></TableCell>
                      <TableCell><Button variant="contained" color="warning" size="small">Edit</Button></TableCell>
                      <TableCell><Button variant="contained" color="error" size="small">Remove</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function TableActions() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //----------------------------------------------------------Column Define 
  const columns = [
    { id: 'details', label: "#", maxWidth: 10 },
    { id: 'resturant', label: 'Resturant', minWidth: 200 },
    { id: 'purches_time', label: 'Purches Time', minWidth: 150 },
    { id: 'intake_time', label: 'Add Intake Time', minWidth: 150 },

    { id: 'Cal', label: 'Total Cal(g)', minWidth: 50 },
    { id: 'Fat', label: 'Total Fat(g)', minWidth: 50 },
    { id: 'Protein', label: 'Total Protein(g)', minWidth: 50 },
    { id: 'Carbo', label: 'Total Carbo(g)', minWidth: 50 },

    { id: 'Price', label: 'Total Price (Rs.)', minWidth: 50 }

  ];

  return (
    <Paper sx={tableSx}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader sx={{ minWidth: 500 }} aria-label="custom pagination table">

          <TableHead>

            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>

            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <Row key={row.payment} row={row} />
            ))}

          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TableActions;