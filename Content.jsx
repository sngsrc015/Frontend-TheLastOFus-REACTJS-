import React from 'react'
import styled from 'styled-components';
import { cardShadow } from '../utils';



import logo from '../Assets/to9z73wa2h311.webp';
import pic from '../Assets/ellie.jpeg';  
export default function Content() {
  return <Section id='services'>
        <div className='content'>

    
          <div className='title' data-aos="fade-left">
          
              <h1>Monologue</h1>
          <img src={logo} />
          <p >The Last Of Us Part 2 wants you to acknowledge that regardless of what happens, you still play, horrified but fascinated. If you play through to the end, whatever else the game makes you feel, misplaced or not, is trumped by your desire to shepherd Ellie and Abby through more gut-wrenching bloodshed. With each section, that desire burns stronger because you see what they put themselves through to get their pound of flesh, all underpinned by the growing tension from believing that only one of them is going to walk away when all is said and done.

They are both killers, and extremely good ones, that the game goes to great lengths to make you sympathize with and believe they each deserve a life. Peeping Tom did this, too – Mark Lewis grew up emotionally abused by his father, becoming so psychologically stunted murder and perversion were his only viable outlets. But that doesn’t overrule who he is now, and what kind of story the movie is telling.</p>
          </div>


          <div className='title' data-aos="fade-right" >
          
          
      <img src={pic} />
      <p>It’s a finale that doesn’t want anyone to feel uncomfortable. A conclusion that reduces the journey down to the simplest, most easy-to-digest understanding. The ending itself is too quick, simple, and reflexively conservative – Ellie and Abby’s arcs functionally end in the same position as they both transition to quiet family life in different fronts of the new, new frontier. The execution, then, is tediously straight-forward. We get the first ending in Seattle, when Abby spares Ellie and Dina at the behest of Lev, then the second in the proceeding chapter, when Ellie returns the favor. It plays out like a choice-tree where you make one choice, then load a previous save to see the other, without the ability to choose, and both ending at the same point anyway. It’s an attempt to modulate from allusions of violent, disturbing genre, to mainstream, mass-market appeal that skews too heavily toward the latter.</p>
      </div>
        
       

      
          </div>
       
      
      
  </Section>
}

const Section= styled.section`
width:90%;
margin:6rem 1rem;




.content{
 
    width:100%;
    text-align:center;
    justify-content:center;
   
    

justify-content:space-between;
   align-items:center;
  .title{
      text-align:center;
text-transform:none;
margin:1rem 2rem 0rem 7rem;
justify-content:center;






      
        h1{
            font-size: 4rem;
            letter-spacing: 0.2rem;
            color:#1e272e ;
            font-weight:200;
           line-height:7rem;
            font-family:cormorant;

        }
        p{margin-top:2rem;
            width:95%;
            text-align:center;
           letter-spacing:0rem;
            font-weight:200;
          font-size: 1rem;
          padding:2rem;
         
          
          
        
        
            font-family:cormorant;
            span{
                font-size: 2rem;
                color:#1e90ff;
            }

    
        }
    }
    
}

   
    img{
        align-items:center;
     
        width: 100%;
        height:30%;
 
      
      }










`;

