import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../component/dashboard/DashboardMenu";
import Landing from "../pages/Home";
import Tasks from "../pages/Tasks";
import Activity from "../pages/Activity";
import Extract from "../pages/Extract";
import Withdraw from "../pages/Withdraw";
import Dashboad from "../pages/Dashboad";
import Tokenomics from "../pages/Tokenomics";
import About from "../pages/About";
import PrivateRoute from "../component/Ui/PrivateRoute";
import { DataProvider } from "../context/DataContext";
import ExamplePage from "../pages/ExamplePage";

export default function AppRoutes() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboad />} />
          <Route path="activity" element={<Activity />} />
          <Route path="extract" element={<Extract />} />
          <Route path="tokenomics" element={<Tokenomics />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}
