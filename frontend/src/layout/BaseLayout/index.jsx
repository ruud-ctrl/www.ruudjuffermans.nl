import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ModuleBoundary from "../../components/ModuleBoundary";
import { useAuth } from "@context/AuthContext";
import ErrorSnackbar from "@components/snackbars/ErrorSnackbar";
import SuccessSnackbar from "@components/snackbars/SuccessSnackbar";
import InfoSnackbar from "@components/snackbars/InfoSnackbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Default = () => {
  const [open, setOpen] = useState(false);
  // const { user, loading } = useAuth();

  // if (loading) return <div>Loading...</div>;
  // if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="app">
      <Sidebar />
      <Box className="content">
        <Topbar />
        <Box>
        <ModuleBoundary innerPage>
          <Outlet />
        </ModuleBoundary>
        <ErrorSnackbar />
        <SuccessSnackbar />
        <InfoSnackbar />
        </Box>
      <Footer />
      </Box>
    </div>
  );
};

export default Default;