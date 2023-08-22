import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useBlogsCalls from '../../hooks/useBlogsCalls';
import { useSelector } from 'react-redux';

const CommentCard = ({commentId}) => {
  const { getCommentData } = useBlogsCalls();
  const {comments} = useSelector((state) => state.blog);

  useEffect(() => {
    getCommentData(commentId);
  }, []);

  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
    <Grid>
      {comments.length&&comments[0].map((comment) => (
       
        <Card key={comment.id} sx={{width:400, marginBottom:3, flexDirection:"column"}}>
          <CardContent>
            <Typography variant="h6" component="div">
              {comment.user}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              {new Date(comment.time_stamp).toLocaleString()} 
            </Typography>
            <Typography variant="body2">
              {comment.content}
            </Typography> 
          </CardContent>
        </Card>
      ))}
      </Grid>
    </Box>
  );
     
};

export default CommentCard;
