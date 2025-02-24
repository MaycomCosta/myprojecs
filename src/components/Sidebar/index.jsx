import React from 'react'
import * as C from './styles'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export const Sidebar = () => {
  return (
    <C.SideContainer>
      <C.Container>
        <img 
          src='https://avatars.githubusercontent.com/u/81838598?v=4'  
          alt='my profile'
        />
        <h2>Maycom Costa</h2>
        <h3>Full Stack Developer</h3>

        <C.ContainerContact>
          <C.ContactItem>
            <FaEnvelope />
            <span>maycom19costa@gmail.com</span>
          </C.ContactItem>

          <C.ContactItem>
            <FaEnvelope />
            <span><a href='https://github.com/MaycomCosta' alt='Maycom Costa LinkedIn' target="_blank" rel="noreferrer">Github</a></span>
          </C.ContactItem>

          <C.ContactItem>
            <FaEnvelope />
            <span><a href='https://www.linkedin.com/in/maycomcosta/' alt='Maycom Costa LinkedIn' target="_blank" rel="noreferrer">LinkedIn</a></span>
          </C.ContactItem>

          <C.ContactItem>
            <FaPhone />
            <span>+55 (11) 97016-0575</span>
          </C.ContactItem>

          <C.ContactItem>
            <FaMapMarkerAlt />
            <span>São Paulo, Brasil</span>
          </C.ContactItem>
        </C.ContainerContact>
      </C.Container>
    </C.SideContainer>
  )
}

