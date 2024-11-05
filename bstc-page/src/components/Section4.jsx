import { Padding } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Section4 = () => {
  return (
    <Box height={"624px"} mr={"70px"}>
      <Typography variant="h4" align="center" marginTop={"30px"}>
        The Backbone of BSTC : BSS
      </Typography>
      <Box display={"flex"} ml={"70px"} mr={"70px"} mt={"30px"}>
        <Box
          ml={"20px"}
          height={"512px"}
          width={"520px"}
          border={"2px solid black"}
        >
          <Box>
            <Typography >
              <img src="first-image.png" alt="first-img" width={"80px"} height={"80px"} />
              <Typography>Backing</Typography>
              <Typography>
                BSTC is a unique crypto currency backed by Real World Assets
                (RWA) like real estate and more. For every dollar invested, you
                get equivalent property value, minimizing investment risk.
              </Typography>
              <button>Learn More</button>
            </Typography>
          </Box>
        </Box>
        <Box
          ml={"20px"}
          height={"512px"}
          width={"520px"}
          border={"2px solid black"}
        >
          <Box>
            <Typography>
              <img
                src="second-img.png"
                alt="second-img"
                width={"80px"}
                height={"80px"}
              />
              <Typography>Backing</Typography>
              <Typography>
                BSTC is a unique crypto currency backed by Real World Assets
                (RWA) like real estate and more. For every dollar invested, you
                get equivalent property value, minimizing investment risk.
              </Typography>
              <button>Learn More</button>
            </Typography>
          </Box>
        </Box>
        <Box
          ml={"20px"}
          height={"512px"}
          width={"520px"}
          border={"2px solid black"}
        >
          <Box>
            <Typography>
              <img
                src="third-img.png"
                alt="third-img"
                width={"80px"}
                height={"80px"}
              />
              <Typography>Backing</Typography>
              <Typography>
                BSTC is a unique crypto currency backed by Real World Assets
                (RWA) like real estate and more. For every dollar invested, you
                get equivalent property value, minimizing investment risk.
              </Typography>
              <button>Learn More</button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
