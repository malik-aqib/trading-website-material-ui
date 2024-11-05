import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Section5 = () => {
  return (
    <Box display={"flex"} mt={"80px"} mr={"60px"} padding={"40px"}>
      <Box width={"45%"} mr={"30px"}>
        <Typography>We Are Different and We Know it</Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Typography>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Typography>
       
        <Typography
          sx={{
            border: "10px solid transparent", // Base border needs to be transparent for border-image
            borderImage: "linear-gradient(45deg, #00d0e1, #ba44ff) 1", // Gradient border
            borderRadius: "25px",
            marginTop: "50px",
            width: "70%",
            padding: "14px",
            
          }}
        >
        Unlock Unthinkable Possibilities with Us
        </Typography>
       
       
      </Box>
      <Box>
        <Typography>
          <img
            src="Asset.png.png"
            alt="asset-img"
            width={"600px"}
            height={"400px"}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default Section5;
