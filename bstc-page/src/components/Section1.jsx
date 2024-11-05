import {
  AppBar,
  Box,
  Card,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box marginLeft="70px">
        <Typography
          variant="h3"
          sx={{
            marginTop: "70px",
            background: "#07071c",
            color: "white",
            letterSpacing: "3px",
          }}
        >
          BSTC The Future of <span className="gradient">Finance</span> is Here
        </Typography>
        <Typography sx={{ marginTop: "40px" }}>
          Discover BSTC: A groundbreaking cryptocurrency backed by Real World
          Assets (RWA), offering real-world spending utility through MasterCard
          and loan application.
        </Typography>
        <Typography
          sx={{
            border: "10px solid transparent", // Base border needs to be transparent for border-image
            borderImage: "linear-gradient(45deg, #00d0e1, #ba44ff) 1", // Gradient border
            borderRadius: "25px",
            marginTop: "50px",
            width: "60%",
            padding: "14px",
            
          }}
        >
          Become a Member of the community
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ width: "50%", marginLeft: "30px" }}>
          <img src="OBJECTS.png" alt="section-1img" className="image" />
        </Typography>
      </Box>
    </Box>
  );
};

export default Section1;
