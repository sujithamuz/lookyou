import React, { useState } from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import { MDBInput } from "mdb-react-ui-kit";
import Mappage from "./Mappage";
import Menu from "./Menu";
import { Box, Card, CardContent, Typography } from "@mui/material";

function Homepage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section>
        <div className="container-fluid">
          <div className="row ">
            <div className="col section-right">
              <div className="search-bar">
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" className="search-input" name="search" />
                <i class="fa-solid fa-microphone mic-icon"></i>
              </div>
              <br></br>
              <div>
                <Mappage />
              </div>
              <br></br>
              <div>
                <Card>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: 18 }} gutterBottom>
                      Global leads 14+ M
                    </Typography>
                    <Typography sx={{ fontSize: 18 }}>
                      Live's 14,25,566
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Typography>To Know</Typography>
                <Card sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent></CardContent>
                  </Box>
                </Card>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
      <Menu />
    </>
  );
}

export default Homepage;
