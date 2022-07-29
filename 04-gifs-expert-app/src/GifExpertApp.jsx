import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);
  const onAddCategory = ( category ) => {

    if( !categories.includes( category ) ) {
      setCategories([...categories, category])
    }
  };
 
  return (
    <>
      <h1>GifsExpertApp</h1> 

      <AddCategory onNewCategory={ onAddCategory } />

      { 
        categories.map( category => (
          <GifGrid 
            key={ category } 
            category={ category }
          />
        )) 
      }
    </>
  )
}

export default GifExpertApp;