import React from 'react'
import styled from 'styled-components';
import { cardShadow } from '../utils';


import logo from '../Assets/eys.jpg';
  
export default function Portman() {
  return <Section id='home' className='scrolling-box'>
        <div className='content'>

    
          <div className='title' data-aos="fade-down">
          
              <h1>THE LAST <br></br> OF US</h1>
          <p>THE LAST OF US PART 2 TRIES TO PLAY BOTH SIDES OF EXPLOITATION HORROR AND LOSES.
          A leaked plot summary had fans decrying Naughty Dog’s Triple-A sequel as a “shit show” made exclusively for SJWs. Joel’s death was deemed pathetic. Playing as his murderer, Abby, a strange, sadistic twist. Making Ellie’s sexuality and relationship with Dina a focal point was needless pandering. Of course, a good portion of this is bigoted nonsense from a gaming culture that struggles with anything even mildly deconstructive or forward-thinking. That’s not to say that the game doesn’t have obvious cultural aspirations, and it also doesn’t mean that the game is above criticism.
          </p>

          </div>
        
       <img src={logo} data-aos="fade-down"/>

      
          </div>
       
      
      
  </Section>
}

const Section= styled.section`
width:90%;
margin:7rem 1rem;


.content{
 
    width:100%;
  
    display:flex;
    
    list-style-type:none;
    

justify-content:space-between;
   align-items:center;
  .title{
      text-align:uppercase;
text-transform:none;
margin:2rem 6rem;
margin-right:0.4rem;





      
        h1{
            font-size: 8rem;
            letter-spacing: 0.2rem;
            color:#1e272e ;
            font-weight:800;
           line-height:7rem;
           cursor:pointer;
            font-family:cormorant;
            transition:0ms.1s ease-in-out;
            &:hover{
                color:#023a8a;
            }

        }
        p{margin-top:2rem;
            width:80%;
           letter-spacing:0.rem;
            font-weight:100;
          font-size: 1rem;
          
          
        
        
            font-family:cormorant;
            span{
                font-size: 2rem;
                color:#1e90ff;
            }

    
        }
    }
    
}

   
    img{
        width: 30%;
        height:30%;
        box-shadow:${cardShadow}
       
      }
      










`;

