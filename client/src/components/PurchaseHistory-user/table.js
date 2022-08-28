import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from 'react-router-dom';

//----------------------------------------------------------styles for table
const tableSx = {
    // width: '100%', 
    overflow: 'hidden', 
    backgroundColor: 'rgba(23, 23, 23, 0.8)',
    marginTop: '40px',
    marginLeft: "4%",
    marginRight: "4%",

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
    fontSize: "16px"
    // cursor: "default"
  },

  "& .MuiSvgIcon-root":{
    color: '#fff',
  },

  "& .MuiTablePagination-menuItem":{
    color:"#000",
    fontSize:"14px"
  }
}


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
function createData(amount, date, time, restaurant) {
  const viewItem = <Button variant="outlined" color="success" size="small" component={Link} to="../Restaurant/Category/Orderfood">View Item</Button>
  const rateItem = <Button variant="outlined" color="success" size="small" component={Link} to="../FoodRating">Rate Item</Button>
  const createComplaint = <Button variant="outlined" color="error" size="small" component={Link} to="../Complaints">Create Complaint</Button>
  return { 
    // payment, 
    date, 
    time,
    restaurant, 
    // type, 
    amount, 
    // restaurant, 
    details: [
      {
        item: "Cheese Pizza",
        quantity: "2",
        price: "2100.00",
        discounts: "0",
        viewItem,
        rateItem,
        createComplaint
      },
      {
        item: "Sausage Pizza",
        quantity: "2",
        price: "2200.00",
        discounts: "50",
        viewItem,
        rateItem,
        createComplaint
      },
    ] };
}

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
        <TableCell component="th" scope="row">{row.date}</TableCell>
        <TableCell >{row.time}</TableCell>
        <TableCell >{row.restaurant}</TableCell>
        <TableCell >{row.amount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, border:"none" }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ marginBottom: 3, marginTop:1}}>
              <Typography fontFamily='Poppins'>
                Bill from {row.restaurant}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead >
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Discount</TableCell>
                    <TableCell align="right">Total price</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.item}>
                      <TableCell component="th" scope="row">
                        {detailsRow.item}
                      </TableCell>
                      <TableCell>{detailsRow.quantity}</TableCell>
                      <TableCell>{detailsRow.price}</TableCell>
                      <TableCell>{detailsRow.discounts}</TableCell>
                      <TableCell align="right">
                        {Math.round(detailsRow.quantity * detailsRow.price * 100) / 100 - detailsRow.discounts}
                      </TableCell>
                      <TableCell align="right">{detailsRow.viewItem}</TableCell>
                      <TableCell>{detailsRow.rateItem}</TableCell>
                      <TableCell>{detailsRow.createComplaint}</TableCell>
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

Row.propTypes = {
  row: PropTypes.shape({
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      customerId: PropTypes.string,
      date: PropTypes.string,
    }),
  ),
  restaurant: PropTypes.string.isRequired,
  })
};

//----------------------------------------------------------Table Row Initialize and Sorting
const rows = [
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
  createData(8550, "2022/04/23","14:23:14", "RestaurantZ"),  
]

function TableActions() {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //----------------------------------------------------------Column Define 
  const columns = [
    { id: 'details', label: '', },
    { id: 'date', label: 'Date',  },
    { id: 'time', label: 'Time', },
    { id: 'restaurant', label: 'Restaurant',},
    { id: 'amount', label: 'Amount'},
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
    <Paper sx={tableSx}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader sx={{ minWidth: 500 }} aria-label="custom pagination table">

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
            <Row key={row.payment} row={row} />
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
  );
}

export default TableActions;