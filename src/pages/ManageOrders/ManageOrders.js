import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
  const [Delete, setDelete] = useState();
  const [orders, setOrders] = useState([]);
  const [Status, setStatus] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/bookBike")
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
    fetch(`http://localhost:5000/bookBike/${id}`, {
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
            {/* <th className="text-light">Count</th> */}
            <th className="text-light">Product Name</th>
            <th className="text-light">Product img</th>
            <th className="text-light">Product Price</th>
            <th className="text-light">present Status</th>
            <th className="text-light">Update Status</th>
            <th className="text-light">Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              {/* <td className="text-light">{index}</td> */}
              <td className="text-light">{pd.name}</td>
              <td className="text-light"><img style={{width:"70px",height:"60px"}} src={pd.img} alt="" /></td>
              <td className="text-light">${pd.price}</td>
              <td  type="button" class="bg-dark text-light rounded "><i class="far fa-check-square"></i> {pd?.status}</td>
              <td>

              <select onClick={() =>approve(pd._id)} class="form-select text-dark" aria-label="Default select example">
  
               <option value={pd?.status}> {pd?.status}</option>
               <option value="approve">Approve</option>
                </select>
              </td>
              <td>
              <button onClick={() => handelDelete(pd._id)}
                   className=" text-dark  mt-2 btn btn-danger"
                   >
                   <i class="fas fa-trash "></i> Delete
                </button>
              </td>
              
            </tr>
          </tbody>
        ))}
      </Table>
        </div>
    // <div className="my-section">
    //   <h3 className="text-center  py-3">Manage Orders</h3>
    //   {orders.map((pd) => (
    //     <div className="col-lg-6 mx-auto">
    //       <div className=" card img-bg mb-3 ">
    //         <div className="row ">
    //           <div className="col-md-4 text-center">
                
    //         <img style={{width:"90px",height:"90px"}} src={pd.img} className=" rounded mt-3"alt="..." width="150px"/>
    //           </div>
    //           <div className="col-md-6">
    //             <div className="py-2">
    //    <p className="card-title mt-2 text-dark  mx-auto">{pd.name}</p>            
    //            <p className="text-dark"> {pd.status}{" "} </p>

    //               <button className="btn btn-success text-dark mx-auto mt-2 me-3" onClick={() =>approve(pd._id)}>Approve
    //             </button>


    //               <button onClick={() => handelDelete(pd._id)}
    //                 className=" text-dark  mt-2 btn btn-danger"
    //               >
    //                <i class="fas fa-trash "></i> Delete
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default ManageOrders;
