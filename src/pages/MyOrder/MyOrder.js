import React, { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from './../Hooks/useAuth';


const MyOrder = () => {

  const { user } = useAuth()


  const [myOrder, setMyOrder] = useState([])
  useEffect(() => {


    fetch(`https://young-bayou-81881.herokuapp.com/orderBike/${user?.email}`)

      .then(res => res.json())
      .then(data => setMyOrder(data));
  }, [user.email])


  // delete
  const deleteOrder = id => {
    console.log(id);
    const url = `https://young-bayou-81881.herokuapp.com/bookBike/${id}`;
    fetch(url, {
      // mode: 'no-cors',
      method: 'DELETE',
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your food has been deleted from your orders.',
                'success'
              )
            }
          })
          const reminingUsers = myOrder.filter(user => user._id !== id)
          setMyOrder(reminingUsers)
        }

      });

  }

  return (

    <div>

      <Table striped bordered hover>
        <thead >
          <tr>         
            <th className="text-light">Product Name</th>
            <th className="text-light">Product img</th>
            <th className="text-light">Product Price</th>
            <th className="text-light">Product Status</th>
            <th className="text-light">Action</th>
          </tr>
        </thead>
        {myOrder?.map((pd) => (
          <tbody>
            <tr>            
              <td className="text-light">{pd.name}</td>
              <td className="text-light"><img style={{ width: "70px", height: "60px" }} src={pd.img} alt="" /></td>
              <td className="text-light">${pd.price}</td>
              <button type="button" class="bg-dark text-light rounded "><i class="far fa-check-square"></i> {pd?.status}</button>
              <td>
                <button onClick={() => deleteOrder(pd._id)} type="button" class="btn btn-danger ">  <i class="fas fa-trash "></i> Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>

  );
};

export default MyOrder;