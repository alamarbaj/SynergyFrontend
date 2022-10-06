import React, { useState, useContext } from 'react'
import { CrudeAPIContext } from '../Store/CrudContextProvider'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Add() {
  var [user, setuser] = useState({
    fname: "",
    lname: "",
    email: "@gmail.com",
    password: "",
    Phone: "",
    city: "",
    address: "",
  })
  var {addUser} = useContext(CrudeAPIContext)
  var navigate = useNavigate()
  function getData(e) {
    var name = e.target.name
    var value = e.target.value
    setuser((oldData) => {
      return {
        ...oldData,
        [name]: value
      }
    })

  }

  async function postData(e) {
    e.preventDefault()
    var item = {
      firstname: user.fname,
      lastname: user.lname,
      email: user.email,
      password: user.password,
      mobile: user.Phone,
      city: user.city,
      address: user.address,
    }

    const response = await addUser(item)
    if (response.result === "Done")
      navigate("/")
    else
      alert(response.message)
  }



  return (
    <div className='container-fluid mt-2'>
      <div className="row">
        <div className='col-12'>
          <h5 className='background text-center text-light p-1  '>User Add Section</h5>
        </div>
        <form onSubmit={postData}>
          <div className='row mb-3 mt-4'>
            <div className='col-md-2 ' ></div>
            <div className='col-md-4 '>
              <input type="text" className="form-control" onChange={getData} name='fname' placeholder='Enter First Name' />
            </div>
            <div className='col-md-4'>
              <input type="text" name='lname' onChange={getData} className="form-control" placeholder='Enter Last Name' />
            </div>
            <div className='col-md-2 ' ></div>
          </div>
          <div className='row mb-3'>
            <div className='col-md-2 ' ></div>
            <div className='col-md-4 '>
              <input type="email" className="form-control" onChange={getData} name='email' placeholder='Enter Email' value={user.email} />
            </div>
            <div className='col-md-4'>
              <input type="password" name='password' onChange={getData} className="form-control" placeholder='Enter Password' />
            </div>
            <div className='col-md-2 ' ></div>
          </div>
          <div className='row mb-3'>
            <div className='col-md-2 ' ></div>
            <div className='col-md-4 '>
              <input type="text" className="form-control" onChange={getData} name='Phone' placeholder='Enter Phone Number' />
            </div>
            <div className='col-md-4'>
              <input type="text" name='city' onChange={getData} className="form-control" placeholder='Enter City' />
            </div>
            <div className='col-md-2 ' ></div>
          </div>
          <div className='row mb-3'>
            <div className='col-md-2 ' ></div>
            <div className='col-md-8 '>
              <textarea className="form-control" onChange={getData} name='address' placeholder='Enter Address'></textarea>
              {/* <input type="text" className="form-control" onChange={getData} name='state' placeholder='Enter State' /> */}
            </div>
          
            <div className='col-md-2 ' ></div>
          </div>



          <div className='row mb-3'>
            <div className='col-md-6 '></div>
            <div className='col-md-4 d-flex'>
              <button type="submit" className=" border-0 p-1  background text-light text-center btn-sm w-50 rounded-1  mx-2"><Link className='formbtn  text-light' to="/">Back</Link></button>
              <button type="submit" className="border-0 p-1 background text-light text-center btn-sm w-50 rounded-1 formbtn">Add</button>
            </div>
            <div className='col-md-2 '></div>
          </div>
        </form>
      </div>
    </div>
  )
}
