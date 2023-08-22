
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useAxios from '../hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";




const Profile = () => {
    const { axiosWithToken, } = useAxios();
    const [user, setUser]= useState("")
    const {currentUser}=useSelector(state=> state.auth)
    // const [open, setOpen] = useState(false);
  

  useEffect(() => {
  const getUser = async () => {
    try {
        const { data } = await axiosWithToken.get(`/users/auth/user/`);
        setUser(data)
    } catch (err) {
    }
  };
  getUser()
  }, [])




  return (

    <Box marginBottom={30}>   
    
     <Card
    sx={{
        
       position: "relative",
    width: 300,
    p: 4,
    justifyContent:"center",
    border:"3px solid orange",
    boxShadow: 24,
    margin:"0 auto",
    }}
>
    <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        alt="Selected Image"
        image={currentUser?.image}
    />

    <CardContent>
        <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
            {user.username}
        </Typography>

        <Typography
            sx={{ textAlign: "center", fontFamily: "sans-serif" }}
            variant="p"
            component="div"
        >
            {user?.email}
        </Typography>
    </CardContent>
</Card></Box>

  );
};

export default Profile;