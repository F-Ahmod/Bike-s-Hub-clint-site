import React, { useState , useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const ManageAllOrders = () => {
 
    const [allOrders,setAllOrders]=useState([])
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");
   

    useEffect(()=>{
        fetch('https://young-bayou-81881.herokuapp.com/bookBike')
        .then(res =>res.json())
        .then(data => setAllOrders(data))
        
    
    },[])
    const deleteOrder =id=>{
        
                const url=`https://young-bayou-81881.herokuapp.com/bookBike/${id}`;
            fetch(url,{
                method:'DELETE',
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount >0){
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
                    const reminingUsers=allOrders.filter(user=> user._id !==id)
                    setAllOrders(reminingUsers)
                }
                
            });
            
    }

    const statusUpdate = (data) => {
      console.log(data);
     
      fetch(`https://young-bayou-81881.herokuapp.com/bookBike/${orderId}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => setOrderId(result));
    };
    console.log(allOrders.status);
    return (
      <div className="container">
      <h1>All orders {allOrders.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-light">Count</th>
            <th className="text-light">Product Name</th>
            <th className="text-light">Product img</th>
            <th className="text-light">Product Price</th>
            <th className="text-light">Product Status</th>
            <th className="text-light">Action</th>
          </tr>
        </thead>
        {allOrders?.map((allOrder, index) => (
          <tbody>
            <tr>
              <td className="text-light">{index}</td>
              <td className="text-light">{allOrder.name}</td>
              <td className="text-light"><img style={{width:"70px",height:"60px"}} src={allOrder.img} alt="" /></td>
              <td className="text-light">${allOrder.price}</td>
              <td>
                <form onSubmit={handleSubmit(statusUpdate)}>
                  <select
                    onClick={() => setOrderId(allOrder?._id)}
                    {...register("status")}
                  >
                    <option value={allOrder?.status}>{allOrder?.status}</option>
                    <option value="Approve">Approve</option>
                    <option value="Done">Done</option>
                  </select>
                  <input type="submit" />
                </form>
              </td>
              <button onClick={()=>deleteOrder(allOrder._id)} type="button" class="btn btn-danger text-light ">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    

    );
};

export default ManageAllOrders;