import React from "react";
import "./dashboard.css";
import { Typography, Card, CardContent } from "@mui/material";
import NavBar from "../../components/navbar/NavBar";

import MainCard from "../../ui-compont/MainCard";
import { useDispatch } from "react-redux";
function Dashboard() {
  return (
    <>
      <NavBar />

      <div className="cardContainer">
        <Card className="card">
          <CardContent>
            <Typography>Product 1</Typography>
            <Typography>Content for Product 1</Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography>Product 2</Typography>
            <Typography>Content for Product 2</Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography>Product 3</Typography>
            <Typography>Content for Product 3</Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography>Product 4</Typography>
            <Typography>Content for Product 4</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
