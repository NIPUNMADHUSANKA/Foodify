import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { fontWeight } from '@mui/system';

//----------------------------------------------------------styles for table
const paperSx = {
    width: '100%', 
    overflow: 'hidden', 
    backgroundColor: 'rgba(23, 23, 23, 0.8)',
    marginBottom: '40px',

  "& .MuiTableCell-stickyHeader":{
    fontFamily: 'Poppins',
    backgroundColor: "#111",
    color: '#fff',
    fontSize: 16,
  },
  
  "& .MuiTableCell-root":{
    color: '#fff',
    bpaymentBottom: "1px solid rgba(210, 210, 210, 0.5)",
    fontFamily: "Poppins",
    fontSize: "16px",
    // cursor: "default"
  },

  "& .MuiSvgIcon-root":{
    color: '#fff',
  },

  "& .MuiTablePagination-menuItem":{
    color:"#000",
    fontSize:"14px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

}

// .css-mgoxz0-MuiFormLabel-root-MuiInputLabel-root.Mui-focused
const theme = createTheme({
  palette: {
    success:{
      main: '#95CD41'
    },
    error:{ 
      main: '#FAC213'
    }
  },
});

const textFSx ={
  color:"#ccc",
  fontFamily:"Poppins",
  fontWeight: '300',
  fontSize: "14px",
}

//----------------------------------------------------------name suggetions for the search
const topNames = [
  "Abby",
  "Betty",
  "Chavindu",
  "David",
  "Erandi"
];

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
function createData(userId, fname ,lname, type, location) {
  const viewButton = <Button variant="outlined" color="success" >View</Button>
  const deleteButton = <Button variant="outlined" color="error">Delete</Button>
  return { 
    userId, 
    fname,
    lname, 
    location,
    type,
    viewButton,
    deleteButton,
  };
}



//----------------------------------------------------------Table Row Initialize and Sorting
const rows = [
  createData('B2342','Rachel','Green','Colombo','Regular'),  
  createData('B2343','Robert','Pattinson', 'None','Premium'),  
  createData('B2344','Rachel','Green','Colombo','Regular'),  
  createData('B2345','Robert','Pattinson', 'None','Premium'),  
  createData('B2346','Rachel','Green','Colombo','Regular'),  
  createData('B2347','Robert','Pattinson', 'None','Premium'),  
  createData('B2348','Rachel','Green','Colombo','Regular'),  
  createData('B2349','Robert','Pattinson', 'None','Premium'),  
  createData('B2350','Rachel','Green','Colombo','Regular'),  
  createData('B2351','Robert','Pattinson', 'None','Premium'),  
]

function TableActions() {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //----------------------------------------------------------Column Define 
  const columns = [
    { id: 'userId', label: 'User-Id', minWidth: 140},
    { id: 'fname', label: 'First Name', minWidth: 140},
    { id: 'lname', label: 'Last Name', minWidth: 120 },
    { id: 'type', label: 'Type', minWidth: 140 },
    { id: 'location', label: 'Location', minWidth: 150 },
    { id: 'view', label: '', minWidth: 100 },
    { id: 'delete', label: '', minWidth: 100 },
    
  ];

  //----------------------------------------------------------Empty Rows
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  //----------------------------------------------------------Footer Functions
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
    <Paper sx={paperSx}>
    
    {/* -----------------------------------------------------------------------Search box*/}
    <Stack spacing={2} sx={{ width: 300, margin:"1% 2%",}}>
      <Autocomplete
        id="search-box"
        freeSolo
        options={topNames.map((option) => option)}
        renderInput={(params) => <TextField {...params} label={<Typography sx={textFSx}>Enter Name</Typography>} variant="standard" />}
      />
    </Stack>
    
    {/* ------------------------------------------------------------------------Table*/}
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader sx={{ minWidth: 500}} aria-label="custom pagination table">

      <TableHead>

          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth}}
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
            <TableRow key={row.userId}>
              <TableCell component="th" scope="row">
                {row.userId}
              </TableCell>
              <TableCell >
                {row.fname}
              </TableCell>
              <TableCell >
                {row.lname}
              </TableCell>
              <TableCell >
                {row.location}
              </TableCell>
              <TableCell >
                {row.type}
              </TableCell>
              <TableCell >
                {row.viewButton}
              </TableCell>
              <TableCell >
                {row.deleteButton}
              </TableCell>
              
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={7}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        
      </Table>
    </TableContainer>
    </Paper>
    </ThemeProvider>
  );
}

export default TableActions;