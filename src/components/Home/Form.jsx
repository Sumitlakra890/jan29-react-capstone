
import  { useState } from 'react'
export default function Form(){

    const [data,setData] = useState({
        name : "",
        username : "",
        email: "",
        phone: "",
        checkbox: false,

    })
    const [error,setError] = useState({
        name : "",
        username : "",
        email: "",
        phone: "",
        checkbox: false,

    })

    function validatePhone(phone)
    {
     const phoneRegex = /^[0-9]{10}$/;
     return phoneRegex.test(phone);
    }

    function validate(){

        setError(()=>{
            return{
                name : "",
                username : "",
                email: "",
                phone: "",
                checkbox: "",

            }
        })
    if(data.name.trim().length===0)
        {
            console.warn("name is required")
            setError((error)=>{
            return {...error,name:"name is required"}
        })
        }
        if(data.username.trim().length===0)
            {
                console.warn("username is required")
                setError((error)=>{
                    return {...error,username:"username is required"}
                })
            }
         if(data.email.trim().length===0)
                {
                    console.warn("email is required")
                    setError((error)=>{
                        return {...error,email:"email is required"}
                    })
                }
        if(data.phone.trim().length===0 ||  !validatePhone(data.phone))
            {
                        console.warn("phone is required")
                        setError((error)=>{
                            return {...error,phone:"phone is required"}
                        })
                    }
        if(!data.checkbox)
        {
            console.warn("checkbox is wrong")
            setError((error)=>{
                return {...error,checkbox:"checkbox is required"}
            })
        }
    }
    return(
        
         <Form onSubmit = {(e) => {e.preventDefault();validate()}}>
            <input type="text" name="" id="" placeholder="Name" value={data.name}
             onChange={(e)=>setData({...data,name:e.target.value})}

            />
            <span style={{color:"red"}}>{error.name}</span>
            <input type="text" placeholder="Username"   value={data.username}
             onChange={(e)=>setData({...data,username:e.target.value})}
            />
             <span style={{color:"red"}}>{error.username}</span>
            <input type="email" placeholder="Email"  value={data.email} 
            onChange={(e)=>setData({...data,email:e.target.value})}
            />
             <span style={{color:"red"}}>{error.email}</span>
            <input type="tel" placeholder="Phone" value={data.phone} 
             onChange={(e)=>setData({...data,phone:e.target.value})}
            />
             <span style={{color:"red"}}>{error.phone}</span>
            <label htmlFor="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" checked={data.checkbox} 
                onChange={(e)=>setData({...data,checkbox:e.target.checked})} />
                Share my registration date with superapp
            </label>
            <span style={{color:"red"}}>{error.checkbox}</span>
            <button type='submit'>Submit</button>
         </Form>
       
        
    )
}