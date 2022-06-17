import { Layout } from "antd";
import Raeact, { useState,useEffect } from "react"
import { Button, Checkbox, Form, Input } from 'antd';
import { Row, Col ,Space } from 'antd';

export default function UserTicket()
{

    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [issue,setIssue]=useState("");
   

  

    function saveTicket()
    {
      console.warn(id,name,issue);
      const  data= {id,name,issue}

     
      fetch("http://localhost:3000/tickets",{
        method:'POST',
       headers:{"Content-Type" : "application/json"},
        body:JSON.stringify(data)

        
      }).then((result)=>{
        
        result.json().then((resp)=>{
          console.warn("resp",resp)
          
        })
      },[])
    }

    return(
        <>
     <Space direction="vertical" style={{marginLeft:"90em",marginTop:"20em"}}>
         <h1 style={{fontSize:50}}>Add Ticket</h1>
         <input style={{width:"20em",height:"50px"}} type="text" value= {id} onChange={(e)=>{setId(e.target.value)}} name="id" placeholder="ID"/>
         <input  style={{width:"20em",height:"50px"}} type="text" value= {name} onChange={(e)=>{setName(e.target.value)}} name="id" placeholder="Name"/>
         <input  style={{width:"20em",height:"50px"}} type="text" value= {issue} onChange={(e)=>{setIssue(e.target.value)}} name="id" placeholder="Issue"/>
         
         <Button  style={{width:"20em",height:"50px"}}  type="primary" onClick={saveTicket}>Add Ticket</Button> 
         
        </Space>
        </>
    )
}