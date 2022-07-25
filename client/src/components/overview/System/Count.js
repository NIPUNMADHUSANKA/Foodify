import { Avatar, Box, Card, CardContent, Grid, Typography, ThemeProvider} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

// import theme from '../../../assets/theme/dashboardCard';

function Budget (props) {
  return (
  // <ThemeProvider theme={theme}>
  <Card
    sx={{ 
      height: '100%',
      backgroundColor: "#cacfd6", 
    }}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant='subtitle1'
          >
            BUDGET
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            $24k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: '#561414',
              height: 48,
              width: 48
            }}
          >
            <AttachMoneyRoundedIcon fontSize='medium' />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
  // </ThemeProvider>
  );
}

export default Budget;