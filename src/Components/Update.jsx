import React, { useState, useEffect, useContext } from 'react'
import { CrudeAPIContext } from '../Store/CrudContextProvider'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function Update() {
    var [user, setuser] = useState({
        firstname: "",
        lastname: "",
        email: "@gmail.com",
        password: "",
        mobile: "",
        city: "",
        address: "",
    })
    var { updateUser, editUser } = useContext(CrudeAPIContext)
    var {_id }= useParams()
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
            _id : _id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            mobile: user.mobile,
            city: user.city,
            address: user.address,
        }
        console.log(item);
        const response = await updateUser(item)
        if (response.result === "Done")
            navigate("/")
        else
            alert(response.message)
    }
    async function editUserData() {
        var item = {
            _id: _id
        }
        var response = await editUser(item)
        // console.log(response.data);
        setuser(response.data)
    }
    useEffect(() => {
        editUserData()
    }, [])


    return (
        <div className='container-fluid mt-2'>
            <div className="row">
                <div className='col-12'>
                    <h5 className='background text-center text-light p-1  '>User Update Section</h5>
                </div>
                <form onSubmit={postData}>
                    <div className='row mb-3 mt-4'>
                        <div className='col-md-2 ' ></div>
                        <div className='col-md-4 '>
                            <input type="text" className="form-control" onChange={getData} name='firstname' placeholder='Enter First Name' value={user.firstname} />
                        </div>
                        <div className='col-md-4'>
                            <input type="text" name='lastname' onChange={getData} className="form-control" placeholder='Enter Last Name'  value={user.lastname} />
                        </div>
                        <div className='col-md-2 ' ></div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-2 ' ></div>
                        <div className='col-md-4 '>
                            <input type="email" className="form-control" onChange={getData} name='email' placeholder='Enter Email' value={user.email} />
                        </div>
                        <div className='col-md-4'>
                            <input type="text" name='password' onChange={getData} className="form-control" placeholder='Enter Password'  value={user.password} />
                        </div>
                        <div className='col-md-2 ' ></div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-2 ' ></div>
                        <div className='col-md-4 '>
                            <input type="text" className="form-control" onChange={getData} name='mobile' placeholder='Enter mobile Number' value={user.mobile} />
                        </div>
                        <div className='col-md-4'>
                            <input type="text" name='city' onChange={getData} className="form-control" placeholder='Enter City'  value={user.city} />
                        </div>
                        <div className='col-md-2 ' ></div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-2 ' ></div>
                        <div className='col-md-8 '>
                        <textarea className="form-control" onChange={getData} name='address' placeholder='Enter Address'  value={user.address} ></textarea>
                            {/* <input type="text" className="form-control" onChange={getData} name='state' placeholder='Enter State'  value={user.address} /> */}
                        </div>
                        
                        <div className='col-md-2 ' ></div>
                    </div>



                    <div className='row mb-3'>
                        <div className='col-md-6 '></div>
                        <div className='col-md-4 d-flex'>
                            <button type="submit" className=" border-0 p-1  background text-light text-center btn-sm w-50 rounded-1  mx-2"><Link className='formbtn  text-light' to="/">Back</Link></button>
                            <button type="submit" className="border-0 p-1 background text-light text-center btn-sm w-50 rounded-1 formbtn">Update</button>
                        </div>
                        <div className='col-md-2 '></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
