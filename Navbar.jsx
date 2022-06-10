import {SidebarData} from './Sidebar';
import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons/lib";


export default function Navbar() {
        const [sidebar, setSidebar] = useState(false);
        
        const showSidebar = () =>
        {setSidebar(true)} ;
        const closeSidebar = () =>
        {setSidebar(false)} ;
  return (<>
    <Nav >
    <div className='brand'>
        <div className="container">
           
           ophilio
        </div>
       
   
    <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#recommend'>Places</a></li>
        <li><a href='#testimonials'>Ourmission</a></li>
        <li><NavIcon to="#"><FaIcons.FaBars onClick={showSidebar} style={{cursor:'pointer'}} />  </NavIcon> </li>
       
       
        
    </ul>
    
    
    </div>
  

</Nav>
 <SidebarNav sidebar={sidebar}>
 <SidebarWrap>
 <NavIcon to="#">
     <AiIcons.AiOutlineClose onClick={closeSidebar}  style={{cursor:'pointer'}} />
   </NavIcon>
  
   {SidebarData.map((item, index) => {
              return <>
             
              <ul>
                  <li>
                      <div className='svg' style={{color:'#000',width:30
                      }}>{item.icon}</div>
                      <div className='title'>{item.title}</div>
                  </li>
              </ul></>
            })}
</SidebarWrap>
</SidebarNav>  
 </>
  )


}


const NavIcon = styled.svg`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  cursor:pointe;
  justify-content: flex-start;
  align-items: center;
 

`;
  
const SidebarNav = styled.nav`
  background: #fff;
  width: 250px;
  height: 100vh;
  
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
  


  .tag{
    color:#ffff;
    cursor:pointer;
margin:-1rem 2rem;
    gap:0.4rem;
    font-size:3rem;
    text-transform:uppercase;
    font-weight:700;
    color:#2f3640;
    font-family:cormorant;
  }
  ul{
    display:flex;
    list-style-type:none;
    justify-content:space-between;
    margin:1rem 8rem ;
    top:1rem;
  
    
    gap:1rem;
    li{cursor:pointer;
        display:flex;
        margin:1rem -4rem;
            text-decoration:none;
            color:#1e272e;
            font-weight:700;
            font-size:1.1rem;
            font-family:poppins;
            transition:0ms.1s ease-in-out;
            &:hover{
                color:#023a8a;
            
  
        }
       &:first-of-type{
           a{
               color:#023e8a;
               font-weight: 900;
           }
       } 
    }
  }
`;

const Nav =styled.nav`
display:flex;
height:5rem;
margin:1rem 1rem;
overflow:hidden;
position:fixed;
top:-1rem;
width:120%;
background:#fff;









.brand{
margin:0.2rem 1rem;
    width:120%;
display:flex;
list-style-type:none;



justify-content:space-between;
  .container{
    
      color:#ffff;
      cursor:pointer;
 
      gap:0.4rem;
      font-size:3.5rem;
      text-transform:uppercase;
      font-weight:500;
      color:#2f3640;
      font-family:cormorant;
  }
  .toggle{
      display:none;
  }

}
ul{
  display:flex;
  list-style-type:none;
  justify-content:space-between;
  margin:1rem 8rem ;

  
  gap:1rem;
  li{
      a{
          text-decoration:none;
          color:#1e272e;
          font-weight:600;
          font-size:1.1rem;
          font-family:nunito;
          transition:0ms.1s ease-in-out;
          &:hover{
              color:#023a8a;
          }

      }
     &:first-of-type{
         a{
             color:#023e8a;
             font-weight: 900;
         }
     } 
  }
}
button{
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 1rem;
  font-family:poppins;
  border: none;
  color:white;
  background-color: #8FA8F6;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  transition: 0.3s ease-in-out ;
  &:hover {
      background-color: #023a8a;
  }
}
`;



