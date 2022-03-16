import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";


function CreateUser() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            address: "",
            country: "",
            state: "",
            city: ""
        },
        validate: (values) => {
            let errors = {};
            if (!values.name) {
                errors.name = "Please enter the name";
            }
            if (!values.email) {
                errors.email = "Please enter the email";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid Email"
            }else if(!values.country){
                errors.country="Not Selected"
            }else if(!values.state){
                errors.state="Not Selected"
            }else if(!values.city){
                errors.city="Not Selected"
            }
            return errors

        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                await axios.post("https://61eeed07d593d20017dbb208.mockapi.io/form/userdata",values)
                // await fetch("https://61eeed07d593d20017dbb208.mockapi.io/form/userdata", {
                //     method: "POST",
                //     body: JSON.stringify(values),
                //     headers: {
                //         "Content-type": "application/json"
                //     }

                // })
                alert("data updated");
                navigate("/userlist");
            } catch (error) {
                console.log(error)
            }
        }

    })
  

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User List</h1></div>
                <div className="container">
                <form onSubmit={formik.handleSubmit} >
                <div className="row">
                    <div className="col-lg-6" >
                        <label>Name</label>
                        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.name ? <span style={{ color: "red" }}>{formik.errors.name}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Email</label>
                        <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.email ? <span style={{ color: "red" }}>{formik.errors.email}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Mobile</label>
                        <input type="number" name="mobile" value={formik.values.mobile} onChange={formik.handleChange} className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Address</label>
                        <input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} className="form-control" />
                    </div>
                    <div className="col-lg-4">
                        <label>Country</label>
                        <select name="country" value={formik.values.country} onChange={formik.handleChange} className="form-control">
                            <option value="IND">India</option>
                            <option value="FI">Finland</option>
                            <option value="HUN">Hungary</option>
                        </select>
                        {
                            formik.errors.country ? <span style={{ color: "red" }}>{formik.errors.country}</span> : null
                        }
                    </div>
                    <div className="col-lg-4">
                        <label>State</label>
                        <select name="state" value={formik.values.state} onChange={formik.handleChange} className="form-control">
                            <option value="TN">Tamilnadu</option>
                            <option value="KL">Kerala</option>
                            <option value="KA">Karnataka</option>
                        </select>
                        {
                            formik.errors.state ? <span style={{ color: "red" }}>{formik.errors.state}</span> : null
                        }
                    </div>
                    <div className="col-lg-4">
                        <label>City</label>
                        <select name="city" value={formik.values.city} onChange={formik.handleChange} className="form-control">
                            <option value="BLR">Bangalore</option>
                            <option value="CN">Chennai</option>
                            <option value="TVD">Trivandrum</option>
                        </select>
                        {
                            formik.errors.city ? <span style={{ color: "red" }}>{formik.errors.city}</span> : null
                        }
                    </div>
                    <div>

                        <input type="submit" className="btn btn-primary mt-3" />
                    </div>

                </div>
            </form>
                </div>

         

        </>
    )
}
export default CreateUser;