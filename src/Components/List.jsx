import React, { useState, useEffect, useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CrudeAPIContext } from '../Store/CrudContextProvider';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function List() {
  var [user, setuser] = useState([])
  var { getUser, deleteUser } = useContext(CrudeAPIContext)
  var _id = useParams()

  async function getAPIData() {
    var response = await getUser()
    console.log(response.data);
    if (response.result === "Done")
      setuser(response.data)
    else
      alert(response.message)
  }

  async function deleteRecord(_id) {
    if (window.confirm("Are You Sure to Delete : ")) {
      var item = {
        _id: _id
      }
      await deleteUser(item)
      getAPIData()
    }
  }



  useEffect(() => {
    getAPIData()
  }, [])
  return (
    <div className='container-fluid mt-2 '>
      <div className="row">
     
      
        <div className=' col-12'>
          <h5 className='background text-center text-light p-1 '>User Register Section <Link to="/addpage"> <AddIcon className='text-light text-center ' /></Link> </h5>
        </div>
        
        
      </div>
      <div className="row">
        <div className='col-1'></div>
        <div className="col-10 table-responsive">
          <table className='table table-light table-striped table-hover'>
            <tbody>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone</th>
                <th>City</th>
                <th>Address</th>
                <th>Action</th>
              
              </tr>
              {
                user.map((item, index) => {
                  return <tr key={index}>
                    <td >{index + 1} </td>
                    <td>{item.firstname} {item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.mobile}</td>
                    <td>{item.city}</td>
                    <td>{item.address}</td>
                    <td><Link to={`/edit/${item._id}`}><EditIcon className="text-info" /></Link>
                    <button className='btn mybtn' onClick={() => deleteRecord(item._id)} ><DeleteForeverIcon className='text-danger' /></button></td>



                  </tr>
                })
              }
            </tbody>
          </table>
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  )
}
