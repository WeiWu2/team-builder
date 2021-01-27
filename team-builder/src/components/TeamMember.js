import React from 'react'


export default function TeamMember(props){
    const {member} = props
    
  if (!member) {
    return <h3>Working fetching your members&apos;s details...</h3>
  }

    return(  
    <div>
    <h2>{member.name}</h2>
    <p>Email: {member.email}</p>
    <p>Role: {member.role}</p>
  </div>)


}