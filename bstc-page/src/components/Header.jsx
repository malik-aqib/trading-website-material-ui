import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box >
      <Box mt={"10px"}>
        <Toolbar>
          <Box
            width="100%"  
            maxWidth="1600px"
            height="90px"
            display="flex"
            justifyContent="space-between"
            borderBottom="1px solid #ffffff"
          >
            <Box>
              <Typography sx={{ marginLeft: "50px", height: "56px" }}>
                <img src="diagram.png" alt="Logo" style={{ height: '100%' }} />
              </Typography>
            </Box>

            {/* Menu Buttons */}
            <Box display="flex" alignItems="center" ml={"60px"}>
              <Button color="inherit" sx={{ml:"25px"}}>Home</Button>
              <Button color="inherit" sx={{ml:"25px"}}>About Us</Button>
              <Button color="inherit" sx={{ml:"25px"}}>Community</Button>
              <Button color="inherit" sx={{ml:"25px"}}>Prices</Button>
              <Button color="inherit" sx={{ml:"25px"}}>B.S.S</Button>
            </Box>

            {/* Sign Up and Login Buttons */}
            <Box display="flex" alignItems="center">
              <Button
                sx={{
                  backgroundColor: "#101037",
                  width: "139px",
                  height: "56px",
                  borderRadius: "30px",
                  marginRight: "5px",
                }}
                variant="contained"
              >
                Sign Up
              </Button>
              <Button
                sx={{
                  background: "linear-gradient(45deg, #ba44ff 30%, #00d0e1 100%)",
                  width: "139px",
                  height: "56px",
                  borderRadius: "30px",
                }}
                variant="contained"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
};

export default Header;

