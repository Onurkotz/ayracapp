import React from 'react'
//import {useParams} from "react-router-dom";

import AddingAbout from "../../addingAbout/Adding";
import ListDraft from "../listDraft/ListDraft"




function About() {


  //const  {id} = useParams();
    
    
  return (
    <div>
       <AddingAbout /> 
       <ListDraft />
    </div>
  )
}

export default About