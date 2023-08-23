import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, Grid } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector} from 'react-redux';
import useBlogsCalls from '../hooks/useBlogsCalls';
import { useNavigate } from 'react-router-dom';


const MyBlog = () => {

  const {userBlog} = useSelector(state => state.blog);
  const { getUserBlogData } = useBlogsCalls();

  const navigate= useNavigate();

  // const { info, setInfo } = location.state || {};

  useEffect(() => {
    getUserBlogData()
  }, []);

  const flexCenter = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    p: 5
  };



  return (
    <div >
     <Grid container sx={flexCenter} mt={4}>
      {userBlog?.map(a => (
        <Card sx={{ width: 300, 
      p: 4,
      height: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      border:"3px solid orange",
  
     }} key={a.id}>
          <CardMedia sx={{ height: 400, objectFit: "contain" }} image={a.image} title={a.image} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {a.title}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {a.content.slice(0, 100)}...
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {new Date(a.publish_date).toLocaleDateString()}
            </Typography>
          </CardContent>

          <Typography sx={{display:"flex" }} >
          <AccountCircleIcon sx={{background:"white", color:"orange", }}/> {a.author}
          </Typography>
          <CardActions>
  
            <IconButton sx={{color:"palevioletred"}}  aria-label="add to favorites">
            <FavoriteIcon />   {a?.likes}
            </IconButton>

            <IconButton aria-label="share">
            <ChatBubbleOutlineIcon sx={{color:"palevioletred", display:"flex", flexDirection:"column"}}/> {a?.comments.length} 
            </IconButton>

            <IconButton aria-label="share">
            <VisibilityIcon sx={{color:"palevioletred"}} /> {a?.post_views}
            </IconButton>

            <Button size="small" sx={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
            color:"white", height:"50px", 
            width:"120px", marginLeft:"20px" }} 
            onClick={()=>navigate("/detail/" + a.id)}>Read More</Button>
        
          </CardActions>
        </Card>
      
      ))}

      </Grid>
    </div>
  );
};

export default MyBlog;
