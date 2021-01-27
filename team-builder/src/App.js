
import React, { useState } from 'react'
import './App.css';
import TeamForm from './components/TeamForm';
import TeamMember from "./components/TeamMember";
const defaultTeam = [
  {
  name:"RandomName1",
  email:"RandomEmail1@gmail.com",
  role: "Manager"
  },
  {name:"RandomName2",
  email:"RandomEmail2@gmail.com",
  role: "Back End"},
  {name:"RandomName3",
  email:"RandomEmail3@gmail.com",
  role: "Front End"}
]

const defaultValues = {name:"",
email:"",
role:""
}




function App() {
  const [team, setTeam] = useState(defaultTeam)
  const [formValues,setFormValues] = useState(defaultValues);


  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }
  
  const submitForm = () => {
   debugger;
    const newMember = {name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
    }
    if(!newMember.name || !newMember.email || !newMember.role)
    return;
    setTeam([newMember, ...team]);
    setFormValues(defaultValues);
  }

  return (
    <div>
       <TeamForm form={formValues} update={updateForm} submit = {submitForm}/>
       {
        team.map(member => {
          return (
            <TeamMember key={member.name} member={member} />
          )
        })
      }
    </div>
    
  );
}

export default App;
