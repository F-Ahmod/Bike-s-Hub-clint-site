import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
  const [Delete, setDelete] = useState();
  const [orders, setOrders] = useState([]);
  const [Status, setStatus] = useState();
  useEffect(() => {
    fetch("https://young-bayou-81881.herokuapp.com/bookBike")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [Delete, Status]);
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete forever",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://young-bayou-81881.herokuapp.com/bookBike/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted", "this Order deleted.", "successful");
              setDelete(true);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
              setDelete(false);
            }
          });
      }
    });
  };
  const approve = (id) => {
    fetch(`https://young-bayou-81881.herokuapp.com/bookBike/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        
      },
      body: JSON.stringify({status:'approve'})
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Approved", "this Order Status updated", "success");
          setStatus(true);
        } else {
          setStatus(false);
        }
        
      });
  };
  
  return (
    <div>
          
            <Table striped bordered hover>
        <thead >
          <tr>
            <th className="">Product Name</th>
            <th className="">Product img</th>
            <th className="">Product Price</th>
            <th className="">Product Status</th>
            <th className="">Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>            
              <td className="">{pd.name}</td>
              <td className=""><img style={{width:"70px",height:"60px"}} src={pd.img} alt="" /></td>
              <td className="">${pd.price}</td>
              <td>
              <select onClick={() =>approve(pd._id)} class="form-select text-light" aria-label="Default select example">
  
               <option value={pd?.status}> {pd?.status}</option>
               <option value="approve">Approve</option>
                </select>
              </td>
              <td>
              <button onClick={() => handelDelete(pd._id)}
                   className=" text-light  mt-2 btn btn-danger"
                   >
                   <i class="fas fa-trash "></i> Delete
                </button>
              </td> 
            </tr>
          </tbody>
        ))}
      </Table>
        </div>
  );
};

export default ManageOrders;
