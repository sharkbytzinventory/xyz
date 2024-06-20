import React from "react";
// import { ReactDOM } from "react-dom";
import {useFormik} from "formik";
import * as Tup from 'yup';ywouhetjbb


const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
}

const Form = () => {

        const {values, errors, handleBlur, handleChange, handleSubmit } = useFormik ({
        initialValues: initialValues,
        onSubmit : (Values) => {
            console.log (
               "Form values:", 
            );
            
        },
    });
   









    return (
        <>
        <div className="container">
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-left">
                        <h1 className="modal-title">Welcome!</h1>
                        <form>
                            <div className="input-block">
                                <label htnlFor="name" ClassName="input-lable">
                                   Name
                                </label>
                                <input
                                    type="name"
                                    autoComplete="off"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />                
                            </div>                            <div className="input-block">
                               <label htnlFor="name" ClassName="input-lable">
                                   Email
                                </label>
                                <input
                                    type="name"
                                    autoComplete="off"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />                
                            </div>
                            <div className="input-block">
                                <label htnlFor="name" ClassName="input-lable">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    // itemProp="newId"
                                />                
                           </div>
                           <div className="input-block">
                                <label htnlFor="name" ClassName="input-lable">
                                   Confrim-Password
                                </label>
                                <input
                                    type="confirm-password"
                                    autoComplete="off"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="confirm-Password"
                                    value={values.confirm_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Form;