
import './gallery.css';
import React, { useState } from 'react'


import CloseIcon from '@material-ui/icons/Close';
//import CloseIcon from '@mui/icons-material/Close';


import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

const Gallery = () => {

   let data =[
    {
        id:1,
        imgsrc:img1, 
    },
    {
        id:2,
        imgsrc:img2,
        
    },
    {
        id:3,
        imgsrc:img3, 
         
    },
    {
        id:4,
        imgsrc:img4, 
    }
    
    
    ]
     const [model,setModel]=useState(false);
     const[tempimgSrc,setTempSrc]= useState('');


    const getImage=(imgsrc1)=>{
      //  console.warn(imgsrc1);
      setTempSrc(imgsrc1) ;
      setModel(true);
    }


    return (
  

<h1 style={{textAlign: 'center'}}>gallery</h1>,

<div className="gallery">

 <div className={model? "model open" :"model"}>

<img src={tempimgSrc}/>
<CloseIcon onClick={()=> setModel(false)}/>
 </div>


{data.map((item, index) => {
    return(

        <div className="pics" key={index} onClick={()=>getImage(item.imgsrc) }>
        <img src={item.imgsrc} style={{width:'100%'}}/>
        
        </div>
    )}
    
    )}

</div>


          )
    }
export default Gallery;