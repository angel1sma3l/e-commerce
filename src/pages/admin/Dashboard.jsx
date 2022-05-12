import {
  ContactsOutlined,
  History,
  ListAltOutlined,
} from "@mui/icons-material";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LargeButton from "../../components/LargeButton";
import Container from "../../hoc/Container";
import Row from "../../hoc/Row";
import Products from "./Products";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div style={{ fontSize: 40 }}>Dashboard</div>
      <Row justifyContent="center">
        <LargeButton
          onClick={() => navigate("/dashboard/products")}
          title="Products"
          icon={<ListAltOutlined fontSize="inherit" />}
        />
        <LargeButton title="Orders" icon={<History fontSize="inherit" />} />
        <LargeButton
          icon={<ContactsOutlined fontSize="inherit" />}
          title="Clients"
        />
      </Row>
      <Routes>
        <Route path="/dashboard/products" element={<Products />} />
      </Routes>
    </Container>
  );
};

export default Dashboard;
