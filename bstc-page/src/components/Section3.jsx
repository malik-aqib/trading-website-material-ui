import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./Section3.css"
const Section3 = () => {
  return (
    <Box display={"flex"} mt={"80px"} mr={'60px'}  padding={"40px"} sx={{background:{}}} >
      <Box width={"40%"} ml={"70px"} >
        <img src="Group 19.png" alt="group 19-img" className="group-image" />
      </Box>
      <Box width={"45%"} mr={"30px"} >
        <Typography>
          BSTC: Real Estate-Backed Crypto with Renowned Global Trading Teams
        </Typography>
        <Typography>
          Offering 180% APY Stacking Mastercard spending, and Practically
          Risk-Free Investment-Secured by a World-Renowned Law Firm.
        </Typography>
        <Typography>
          BSTC: The Ultimate Coin Providing Real investment Value with RWA.
          Experience the unparalleled power of investment, trading real estate,
          and earning and spending within one comprehensive ecosystem.
        </Typography>
        <Typography>
            <Button variant="contained">Prices</Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Section3;
