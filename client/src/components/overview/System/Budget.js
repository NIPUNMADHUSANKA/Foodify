import { Avatar, Box, Card, CardContent, Grid, Typography, ThemeProvider} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

import theme, { Colours } from '../../../assets/theme/theme';
import "../../../"

function Budget (props) {
  return (
  <ThemeProvider theme={theme}>
  <Card
    sx={{ 
      height: '90%',
      backgroundColor: "rgba(23, 23, 23, 0.8)", 
    }}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ 
          justifyContent: 'space-between',
         }}
      >
        <Grid item>
          <Typography
            variant='subtitle1'
            color={Colours.white}
            gutterBottom
          >
            Income Today
          </Typography>
          <Typography
            color={Colours.white}
            variant="h4"
          >
            $2412
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'transparent',
              height: 48,
              width: 48,
              // padding: '10px 0px'
            }}
          >
            <AttachMoneyRoundedIcon fontSize='large' />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error"/>
        <Typography
          color="#F02828"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color={Colours.white}
          variant="caption"
        >
          Since Yesterday
        </Typography>
      </Box>
    </CardContent>
  </Card>
  </ThemeProvider>
  );
}

export default Budget;