import React from 'react';


export default function TeamForm(props){
    const {form, update, submit} = props;

const onChange = evt => {
   
    const {name, value} = evt.target;
    update(name,value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();

  }

return <div>
    <form onSubmit={onSubmit} >
    <div>
    <label>Name
        <input 
        name="name"
        value={form.name}
        onChange={onChange}
        type="text"
        ></input>
        </label>
        <br></br>
        <label>Email
        <input 
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        ></input>
        </label>
        <br></br>
        <label>Role
        <select
            name="role"
            value={form.role}
            onChange={onChange}
              >
              <option value="">--Select role--</option>
              <option value="Manager">Manager</option>
              <option value="Back End">Back End</option>
              <option value="Front End">Front End</option>
              </select>
        </label>
        <div>
          
          <button>Submit</button>
    
        </div>
    </div>
       
    </form>
</div>



}
