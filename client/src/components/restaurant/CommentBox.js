import { Box } from '@mui/system'
import React from 'react'

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

const CommentBox = (props) => {
    return (
        // ------------------------------main box of the comments---------------------------
        <ListItem>
            <Box>
                <ListItemText>{props.comments.name}</ListItemText>
                <ListItemText>{props.comments.detail1}</ListItemText>
            </Box>
        </ListItem>
        //   -------------------------------------end of main box of comments-------------------------
    )
}

export default CommentBox
