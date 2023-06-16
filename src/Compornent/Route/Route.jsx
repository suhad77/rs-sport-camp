import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import PrivateRoute from "./PrivetRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/EnrollClasses/EnrollClasses";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/instructors',
        element: <Instructors />
      },
      {
        path: '/classes',
        element: <Classes />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // for student
      {
        path: 'mySelectedClasses',
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: 'myEnrolledClasses',
        element: <MyEnrolledClasses />
      },
      {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
      },

      // for instructor
      {
        path: 'addClass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'myClasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },

      // for instructor
      {
        path: 'manageClasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
    ]
  },
]);
export default router