import { Box, Typography } from "@mui/material";
import React from "react";

const Section2 = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      ml={"70px"}
      mr={"70px"}
    >
      <Box
        width={"380px"}
        height={"209px"}
        border={"1px solid #171751"}
        borderRadius={"14px"}
      >
        <Typography sx={{ mt: "45px", ml: "20px" }}>
          Crypto Treasury Balance
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold ",
            backgroundImage: "linear-gradient(0deg, #00d0e1, #ba44ff) ", // Linear gradient
            mt: "30px",
            ml: "10px",
            backgroundClip: "text",
            color: "transparent",
          }}
          variant="h4"
        >
          $000,000,000
        </Typography>
      </Box>
      <Box
        width={"380px"}
        height={"209px"}
        border={"1px solid #171751"}
        borderRadius={"14px"}
        ml={"20px"}
      >
        <Typography sx={{ mt: "45px", ml: "20px" }}>
          Current Anual Percentage Yield
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            backgroundImage: "linear-gradient(0deg, #00d0e1, #ba44ff) ", // Linear gradient
            mt: "30px",
            ml: "10px",
            backgroundClip: "text",
            color: "transparent",
          }}
            variant="h4"
        >
          $000,000,000
        </Typography>
      </Box>
      <Box
        width={"380px"}
        height={"209px"}
        border={"1px solid #171751"}
        borderRadius={"14px"}
        ml={"20px"}
      >
        <Typography sx={{ mt: "45px", ml: "20px" }}>
          Total Locked Value
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            backgroundImage: "linear-gradient(0deg, #00d0e1, #ba44ff) ", // Linear gradient
            mt: "30px",
            ml: "10px",
            backgroundClip: "text",
            color: "transparent",
          }}
            variant="h4"
        >
          $100M
        </Typography>
      </Box>
      <Box
        width={"380px"}
        height={"209px"}
        border={"1px solid #171751"}
        borderRadius={"14px"}
        ml={"20px"}
      >
        <Typography sx={{ mt: "45px", ml: "20px" }}>
          BSTC Stacked Percentage
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            backgroundImage: "linear-gradient(0deg, #00d0e1, #ba44ff) ", // Linear gradient
            mt: "30px",
            ml: "10px",
            backgroundClip: "text",
            color: "transparent",
          }}
            variant="h4"
        >
          00.0% stacked
        </Typography>
      </Box>
    </Box>
  );
};

export default Section2;
