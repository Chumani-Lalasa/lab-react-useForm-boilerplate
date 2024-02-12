import React from 'react';
import {useForm} from 'react-hook-form'
import './Form.css'

const Form = () => {
    const {register,
                handleSubmit,
                formState:{errors,isSubmitSuccessful,isSubmitting
                }
            } = useForm();
    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve,2000))
        console.log(data);
    }
  return (
    <div className='form-container'>
        {isSubmitSuccessful ? <div className='registration-status'><h3>Registration Successful!!!</h3></div>:null}
      <form action="" className='form' onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input 
                type="text" 
                placeholder='First name'
                {...register('firstname',{
                    required:"First name required!",
                    pattern:{
                        value:/^[a-zA-Z]+$/,
                        message:"Invalid First name"
                    }
                })}
                />
                {errors.firstname && <p style={{color:"red",fontSize:"14px"}}>{errors.firstname.message}</p>}
        </div>
        <div>
            <input 
                type="text" 
                placeholder='Last name'
                {...register('lastname',{
                    required:"Last name required",
                    pattern:{
                        value:/^[a-zA-Z]+$/,
                        message:"Invalid Last name"
                    }
                })}
                />
                {errors.lastname && <p style={{color:"red",fontSize:"14px"}}>{errors.lastname.message}</p>}
        </div>
        <div>
            <input 
                type="text" 
                placeholder='Email id'
                {...register('email',{
                    required:"Email required",
                    validate:(value) =>{
                        if(!value.includes('@')){
                            return "Invalid email"
                        }
                        return true;
                    },
                    pattern:{
                        value:/^\S+@\S+\.\S+$/,
                        message:"Invalid email"
                    }
                })}
                />
                {errors.email && <p style={{color:"red",fontSize:"14px"}}>{errors.email.message}</p>}
        </div>
        <div>
            <input 
                type="password" 
                placeholder='password'
                {...register('password',{
                    required:"Password required",
                    minLength:{
                        value:4,
                        message: "Password must be more than 4 characters"
                    },
                    maxLength:{
                        value:20,
                        message: "Password must not be more than 20 characters"
                    }
                })}
                />
                {errors.password && <p style={{color:"red",fontSize:"14px"}}>{errors.password.message}</p>}
        </div>
        <div>
            <button type='submit' disabled={isSubmitting}>Register</button>
        </div>
      </form>   
    </div>
  );
}

export default Form;
