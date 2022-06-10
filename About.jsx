import React from 'react'
import styled from 'styled-components';
import logo1 from '../Assets/233.jpg'
import logo2 from '../Assets/op.webp'
import logo3 from '../Assets/0x0.jpg'
import logo4 from '../Assets/eys.jpg';
import { cardShadow } from '../utils';
 
export default function Portman() {
  return <Section id='recommend'>
        <div className='content'  >

    <div className='title' data-aos="fade-down">
        <h1>THE LAST OF US</h1>
    </div>
        <div className='heading' data-aos="fade-down">
            <h3>THE LAST OF US PART 2 HAS BECOME A MINEFIELD</h3>
          <div className='background'>
             
              <div className='card1' data-aos="fade-down">
              <img src={logo1}/>
              </div>
              <div className='card2' data-aos="fade-up">
              <img src={logo2}/>
              </div>
              <div className='card3' data-aos="fade-left">
              <img src={logo3}/>
              </div>

      
   

          


          </div>
          </div>
        
     

      
          </div>
       
      
      
  </Section>
}

const Section= styled.section`
width:90%;
margin:6rem 1rem;
height:50rem;
position:relative;





.content{
 
    width:100%;
  
  
    
    list-style-type:none;

justify-content:space-between;
   align-items:center;
  .title{
      text-align:uppercase;
text-transform:none;
margin:2rem 6rem;
margin-right:0.4rem;





      
        h1{
            font-size: 3rem;
            letter-spacing: 0.2rem;
            color:#1e272e ;
            font-weight:200;
            line-height:7rem;
             font-family:cormorant;
            text-align:center;

        }
   
    
        }
    }
    
}

   .heading{text-align:center;
    text-transform:none;
    margin:6rem 6rem;
    margin-right:0.4rem;
    display:flex;
    align-items:center;
    
    
    
    
    
          
            h3{width:45%;
                text-align:left;
                
                 font-size: 4rem;
                letter-spacing: 0.2rem;
                color:#1e272e ;
                font-weight:800;
               line-height:4rem;
                font-family:cormorant;
                transition:0ms.1s ease-in-out;
                &:hover{
                    color:#023a8a;
                }
                cursor:pointer;
    
            }

   }
    
        .background{
            display: flex;
            position:relative;
            top: -2rem;
            width:100%;
            justify-content:center;
            align-items:center;
           left:3rem;
           
         
            .card1{
               
               
                position: absolute;
                z-index: 3;
          left:2rem;
                font-size: 0.6rem;
                
                    img{
                   
                        width: 50%;
                        box-shadow:${cardShadow}
                    
    
                }
            }
            .card2{
                top:4rem;
                z-index: 2;
                position:absolute;
                left: 16rem;
               
                font-size: 0.7rem;
                
                    img{
                        height:30%;
                        width: 80%;
                        box-shadow:${cardShadow}
    
                    
                }
            }
            .card3{
                top:1rem;
               
                z-index: 3;
                position:absolute;
                right:25rem;
              
                font-size: 0.7rem;
                
                    img{
                        height:30%;
                        width: 90%;
                        box-shadow:${cardShadow}
    
                    
                }
            }
        }
    









`;

