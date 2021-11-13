import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import './DashBoard.css';
import useAuth from './../Hooks/useAuth'
import MyOrder from './../MyOrder/MyOrder';
import Review from './../Review/Review';
import Pay from './../Pay/Pay';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import { useState } from 'react';
import AddBike from './../../AddBike/AddBike';
import ManageOrders from './../ManageOrders/ManageOrders';
import DasBanner from "../DasBanner/DasBanner";


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
  
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              {         
                   user.email &&
                   <p style={{marginLeft:"55%"}}>
                    <span className="me-2 text-primary">{user?.displayName}</span>
                  
                   </p>
                }
              
             <div>
               <NavLink className="menu-bar text" to="/">Go Home</NavLink>
             <NavLink className="text" to={`${url}/myOrder`}>
                <li className="menu-bar mt-5">my Orders</li>
              </NavLink>
              
              <NavLink className="text" to={`${url}/review`}>
                <li className="menu-bar mt-5">Review</li>
              </NavLink>
              <NavLink className="text" to={`${url}/pay`}>
                <li className="menu-bar mt-5">Payment</li>
              </NavLink>
             </div>

              <div className="admin-dashboard">
                {admin==='admin' && (
                  <NavLink className="text" to={`${url}/manageOrders`}>
                  <li className="menu-bar mt-5">Manage  Orders</li>
                </NavLink>
                
                )}
                {admin==='admin' && (
                  <NavLink className="text" to={`${url}/makeAdmin`}>
                  <li className="menu-bar">Make Admin</li>
                </NavLink>
                
                )}
                {admin==='admin' && (
                  <NavLink className="text" to={`${url}/addBike`}>
                  <li className="menu-bar">Add New Bike</li>
                </NavLink>
                
                )}
                
                
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <DasBanner></DasBanner>
              </Route>
              
              
              <Route  path={`${path}/manageOrders`}>
                <ManageOrders></ManageOrders>
              </Route>
              <Route  path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
              </Route>
              
              <Route  path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route  path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route path={`${path}/addBike`}>
               <AddBike></AddBike>
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