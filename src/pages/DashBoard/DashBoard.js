

import React, { useEffect } from "react";
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import './DashBoard.css';
import useAuth from './../Hooks/useAuth';
import ManageAllOrders from './../ManageAllOrders/ManageAllOrders';
import MyOrder from './../MyOrder/MyOrder';
import Review from './../Review/Review';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import { useState } from 'react';


const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const {admin, user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://young-bayou-81881.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  // console.log(isAdmin);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              
             <div>
               <NavLink to="/">Go Home</NavLink>
             <NavLink to={`${url}/myOrder`}>
                <li className="dashboard-menu mt-5">my Orders</li>
              </NavLink>
              
              <NavLink to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </NavLink>
             </div>

              <div className="admin-dashboard">
                {admin==='admin' && (
                  <NavLink to={`${url}/manageAllOrders`}>
                  <li className="dashboard-menu mt-5">Manage All Orders</li>
                </NavLink>
                
                )}
                {admin==='admin' && (
                  <NavLink to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </NavLink>
                
                )}
                
                
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyOrder></MyOrder>
              </Route>
              
              
              <Route  path={`${path}/manageAllOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route  path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
              </Route>
              
              <Route  path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route  path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;