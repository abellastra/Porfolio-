import { useState } from "react";
import Proyects from "../components/proyects";




type Project = {title:string,description:string,tech:string[],img:string,linkGitHub:string}
  


export const FilterOfTecnologi = (projects:Project[],type:string) => {

  console.log(projects);
console.log(type);
 if (!projects) return null;
  






}