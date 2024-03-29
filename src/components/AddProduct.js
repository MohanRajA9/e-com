import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function  AddProduct({productList, setProductList}) {

  const [name , setName] = useState("");
  const [poster , setPoster] = useState("");
  const [price , setPrice] = useState("");
  const [summary , setSummary] = useState("");
  const [ratings , setRatings] = useState("");
  const navigate = useNavigate()


  return (
    <div className='add-product-form' >
      <h1>Add Product</h1>

      <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value) } />

      <TextField id="outlined-basic" label="Poster" variant="outlined" value={poster} onChange={(event) => setPoster(event.target.value) } />

      <TextField id="outlined-basic" label="Price" variant="outlined" value={price} onChange={(event) => setPrice(event.target.value) } />

      <TextField id="outlined-basic" label="Summary" variant="outlined" value={summary} onChange={(event) => setSummary(event.target.value) } />

      <TextField id="outlined-basic" label="Ratings" variant="outlined" value={ratings} onChange={(event) => setRatings(event.target.value) } />

      <Button variant="contained" 
      onClick={ () => { 
      const newProduct = {
        name,
        poster,
        price,
        summary,
        ratings
     }
      setProductList([...productList, newProduct])
      console.log(newProduct)
      navigate("/products")
     } }>Add Product</Button>



     {/* <button 
     onClick={ () => { 
      const newProduct = {
        name,
        poster,
        price,
        summary,
        ratings
     }
      
      setProductList([...productList, newProduct])
      console.log(newProduct)
      navigate("/products")
      
     } }
     >Add Product</button> */}

    </div>
  );
}
 