import React, { createContext } from 'react'

export const CrudeAPIContext = createContext()
export default function CrudeContextProvider(props) {

  async function addUser(item) {
    var rawdata = await fetch("/addUser", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(item)
    })
    var result = await rawdata.json()
    if (result)
      return { result: "Done", message: "User is Created" }
    else
      return { result: "Fail", message: "Internal Server Error" }
  }

  async function getUser(item) {
    var rawdata = await fetch("/getUser")
    var result = await rawdata.json()
    // console.log(result);
    
    // var d = []
    // for (let item of result) {
    //   var { id, ...x } = item
    //   d.push({ _id: id, ...x })
    // }
    if (result)
      return { result: "Done", data: result.data }
    else
      return { result: "Fail", message: "Internal Server Error" }
  }
  
  async function editUser(item){
    var rawdata = await fetch("/getById/"+item._id)
    var result = await rawdata.json()
    console.log(result);
    // var {id, ...x} = result
    if(result)
    return {result :"Done", data: result.data}
    else
    return{result : "Fail", message:"Internal Server Error"}
  }

  async function updateUser(item){
    var rawdata = await fetch('/userUpdate/',{
      method : "post",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify(item)
    })
    var result = await rawdata.json()
    if(result)
    return {result : "Done",message : "User Upaded"}
    else
    return{result : "Fail", message : "Internal Server Error"}
  }





  async function deleteUser(item) {
    var rowdata = await fetch("/userDelete/" + item._id, {
      method: "get"
    })
    var result = await rowdata.json()
    // console.log(result);
  }



    async function loginUser(item) {
      var rawdata = await fetch("/login")
      var result = await rawdata.json()
      // console.log(result);
      
      // var d = []
      // for (let item of result) {
      //   var { id, ...x } = item
      //   d.push({ _id: id, ...x })
      // }
      if (result)
        return { result: "Done", data: result.data }
      else
        return { result: "Fail", message: "Internal Server Error" }
    }
  

  return (
    <CrudeAPIContext.Provider value={{
      addUser: addUser,
      getUser: getUser,
      deleteUser: deleteUser,
      editUser : editUser,
      updateUser : updateUser,
      loginUser : loginUser
    }}>
      {
        props.children
      }
    </CrudeAPIContext.Provider>

  )
}
