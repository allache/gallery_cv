
import './gallery.css';
import React, { useState } from 'react'
import axios from 'axios';

import CloseIcon from '@material-ui/icons/Close';
//import CloseIcon from '@mui/icons-material/Close';
import data0 from './js/data.json';


const Gallery = () => {

console.log(data0.imgsrc);
const data1 = data0;
console.log("maaaaaa",data1.data0);
     const [model,setModel]=useState(false);
     const[tempimgSrc,setTempSrc]= useState('');

     //console.log(data);
    const getImage=(imgsrc1)=>{
     
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


{data1.data0.map((item, index) => {
    return(
        <div className="shape">
        <div className="pics" key={index} onClick={()=>getImage(item.imgsrc) }>
        <img src={item.imgsrc} style={{width:'100%'}}/>
        </div>
        
        </div>
    )}
    
    )}
  

</div>


          )
    }
export default Gallery;