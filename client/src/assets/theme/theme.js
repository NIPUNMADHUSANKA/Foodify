import { createTheme } from "@mui/material/styles";
import { Components } from "react";

export const Colours = {
    primary: "#3A3A3A",
    secondary: "#757575",
    green: "#95CD41",
    richBlack: "#0B0B0",
    grayWhite: "#EFEAEA",
    dark: "#272727",
    darkgray: "#454545",
    yellow:'#FAC213',
    transparenceGrey:'#6B6B6B33',
    avatarWhite:'#6B6B6B33',
    animationWhite:'#F9F9F933',
    white:'#FFFFFF',
    
    
}

export const Fonts = {
    heading1: '30px',
    heading2: '20px',
    heading3: '15px',
    heading4: '12px',
    heading5: '10px',
};

const theme = createTheme({
    palette: {
        // put the colors
    },

    // targeting components
    Components: {

    }

});



export default theme;