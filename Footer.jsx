import React from 'react'
import styled from 'styled-components';
import {BsLinkedin,BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import logo from '../Assets/13.jpg'
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';




export default function Footer() {
  return<FooterContainer id='testimonials'>
<div className='container'  data-aos-duration="500"
 >
    <div className='background' data-aos="fade-down">
    <img src={logo}/>
    </div>
    <div className='foot'data-aos="fade-down">

        <div className='col1'>
            
            <h1>THE LAST OF US</h1>
            <p><HomeIcon/>NEW YOR, NY 10012,US<br/>
            <EmailIcon/>info@exampl.com<br/>
            <PhoneEnabledIcon/>+01234567,+4705414</p>
        </div>
    
     
      <ul className='links'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#recommend'>Places</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
      </ul>  
      <ul className='social_links'>
          <li><BsFacebook/></li>
          <li><BsLinkedin/></li>
          <li><AiFillInstagram/></li>
      </ul>
    </div><hr/>
    <span>Copyright &copy; 2022 Modulub. All rights rserved</span>
</div>
  </FooterContainer>
} 

const FooterContainer=styled.footer`
display:flex;
width:90%;
flex-direction:column;
margin:2rem 1rem;


border-radius:0.5rem;

.container{
    width:100%;
margin:6rem 1rem;
height:50rem;

align-items:center;
.background{align-items:center;
    margin-left:3rem;
    background:black;
  
    img{
        width:100%;
       
    opacity:0.6;
        z-index:2;
        position:relative;
       
     
    }
}

.foot{
    display:flex;
width:100%;
padding-right:12rem;
margin:2rem 0rem 3rem ;


border-radius:0.5rem;
justify-content:space-evenly;
.col1{
    font-family:poppins;
    margin-top:1rem;
    margin-right:12rem;
   
}
ul{margin:2rem;
    list-style-type:none;
    gap:2rem;
    li{
        a{
            text-decoration:none; 
            transition:0.3s ease-in-out;
            color:black;
            font-family:poppins;
            &:hover{
                color:#302ce9;
        }
    }
}


}
}
}
span{
     font-family:poppins;
    transition:0ms.1s ease-in-out;
    &:hover{
        color:#023a8a;
    }
    cursor:pointer;
    text-align:center;
}




`;