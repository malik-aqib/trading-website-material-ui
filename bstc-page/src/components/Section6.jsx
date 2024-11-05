import { Box, Typography } from "@mui/material";
import React from "react";

const Section6 = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        mr={"70px"}
        ml={"70px"}
        mt={"30px"}
        borderBottom={"1px solid #ffffff"}
      >
        <Box>
          <Typography >
            <img src="diagram.png" alt="fotter-image" />
          </Typography>
        </Box>
        <Box display={"flex"}>
          <Typography>
            <img src="linkedin 1.png" alt="linkedin 1" />
          </Typography>
          <Typography sx={{ ml: "10px" }}>
            <img src="linkedin 2.png" alt="linkedin 2" />
          </Typography>
          <Typography sx={{ ml: "10px" }}>
            <img src="linkedin 3.png" alt="linkedin 3" />
          </Typography>
        </Box>
      </Box>
      <Box >
        <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:"50px"}}>
          <Typography>
            <Typography variant="h5">Help Center</Typography>
            <Typography>FAQ</Typography>
            <Typography>Contact support team</Typography>
            <Typography>Educational resources</Typography>
          </Typography>
          <Typography sx={{ml:"70px"}}>
          <Typography variant="h5">Support</Typography>
            <Typography>FAQ</Typography>
            <Typography>Contact support team</Typography>
            <Typography>Educational resources</Typography>
          </Typography>
          <Typography sx={{ml:"70px"}}>
          <Typography variant="h5">Reach out to us</Typography>
            <Typography>FAQ</Typography>
            <Typography>Contact support team</Typography>
            <Typography>Educational resources</Typography>
          </Typography>
        </Typography>
        <Typography sx={{mt:"80px",display:"flex" ,alignItems:"center",justifyContent:"center"}}>
        © Copyright 2024, All Rights Reserved by BSTC
        </Typography>
      </Box>
    </Box>
  );
};

export default Section6;
