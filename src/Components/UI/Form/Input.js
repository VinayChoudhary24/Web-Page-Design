// For Forms Using React-hook-form Library -- npm install react-hook-form[LightWight, Performance, Validations]
import React from 'react';
import { useForm } from 'react-hook-form';
import './Input.css';

function Input() {
    // State and Error Handling for the Form
  const { 
    register, 
    handleSubmit,
    formState: { errors }, } = useForm();
 
    // Submits the Form
    const onSubmit = (formData) => {
    console.log(formData);
    console.log(errors);
};
  
  return (
   <div className="container">
    <div className="container__topDetails">
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/c8/26/18/c82618d3-69f9-5f54-abca-3a32fbd80dcf/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" 
        alt="Wobot_logo" height="60px" width="60px" />
        <h2>It's a delight to have<br></br>you onboard</h2>
        <p>Help us know you better.</p>
        <p>(This is how we optimize Wobot as<br></br>per your buisness needs)</p>
    </div>

        {/* // The Form Submit Handler */}
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div  className="form__options">
      <label htmlFor="name">Your name</label>
      <input
      id="name" 
      type="text" 
      placeholder="e.g. John Smith" 
      {...register("name", { required: true })} />
      {/* Error */}
      {errors.name && <span className="form__error"> Your name is Required!</span>}
        </div>

      {/* Company Input */}
      <div  className="form__options">
      <label htmlFor="companyName">Company name</label>
      <input 
      id="companyName"
      type="text" 
      placeholder="e.g. Alpha Inc." 
      {...register("companyName", { required: true })} />
      {errors.companyName && <span className="form__error">Company name is Required!</span>}
        </div>     

      {/* Select Industry Field */}
      <div  className="form__options">
      <label htmlFor="industry">Industry</label>
      <select {...register("Industry", { required: true })}>
        <option value="Agriculture">Agriculture</option>
        <option value="Metal Production">Metal Production</option>
        <option value="Commerce">Commerce</option>
        <option value="Education">Education</option>
        <option value="Financial services">Financial services</option>
        <option value="Food">Food</option>
        <option value="Health services">Health services</option>
        <option value="Tourism">Tourism</option>
        <option value="Media">Media</option>
        <option value="Textile">Textile</option>
        <option value="Transport ">Transport </option>
      </select>
      </div>

      {/* Number of Locations */}
      <div className="container__bottomDetails">
      <p>Number of Locations</p>
      <div className="container__buttons">
        <button type="button">1-20</button>
        <button type="button">21-50</button>
        <button type="button">51-200</button>
        <button type="button">201-500</button>
        <button type="button">500+</button>
      </div>

      <button type='submit'>Get Started</button>
      </div>
    </form>

   </div>
  );
};

export default Input;