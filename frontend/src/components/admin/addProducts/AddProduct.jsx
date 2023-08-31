import {useState} from 'react'
import styles from './AddProduct.module.css';
import Card from "../../card/Card";
import { toast } from 'react-toastify';
import {  useParams } from 'react-router-dom';
import Loader from "../../loader/Loader";

const categories = [
  { id: 1, name: "shoes" },
  { id: 2, name: "oil" },
  { id: 3, name: "serum" },
  { id: 4, name: "facewash" },
];

const initialState = {
  name: "",
  imageURL: "",
  price: 0,
  category: "",
  brand: "",
  desc: "",
}
const AddProduct = () => {
  const {id} = useParams()
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);





  function detectForm(id, f1, f2) {
    if(id === "ADD"){
      return f1;
    }
    return f2;
  }

  const handleInputChange = (e) => {
    
  };
  const handleImageChange = (e) => {

  };


  const addProduct = (e) => {
   
  }

  const editProduct = (e) => {
  }

  return (
    <>
    {isLoading && <Loader/>}
    <div className={styles.product}>
    <h1>{detectForm(id, "Add New Product", "Edit Product")}</h1>
    <Card cardClass={styles.card}>
    <form onSubmit={detectForm(id, addProduct, editProduct)}>
    <label>Product name:</label>
    <input 
    type="text" 
    placeholder='Product name'
    required
    name='name'
    value="hemp"
    onChange={(e) => handleInputChange(e)}
    />
    
    <label>Product image:</label>
    <Card cardClass={styles.group1}>

    {uploadProgress === 0 ? null : ( 

    <div className={styles.progress}>
    <div className={styles["progress-bar"]}
     style={{width: `${uploadProgress}%`}}
    >
    {uploadProgress < 100 ? `Uploading ${Math.floor(uploadProgress)}%`
    : `Upload Complete ${Math.floor(uploadProgress)}%`}
    </div>
    </div>

    )}



    <input 
    type="file" 
    accept='image/*'
    placeholder='Product Image'
    name="image"
    onChange={(e) => handleImageChange(e)}
    />
   
    </Card>
    <label>Product Price:</label>
    <input 
    type="number" 
    placeholder='Product price'
    required
    name='price'
    value="price"
    onChange={(e) => handleInputChange(e)}
    />
    <label>Product Category:</label>
    <select 
    required
    name="category"
    value="category"
    onChange={(e) => handleInputChange(e)}>
      <option value="" disabled>
      -- choose product category --
      </option>
      {categories.map((cat) => {
        return (
          <option key={cat.id} value={cat.name}>
          {cat.name}
          </option>
        )
      })}
    </select>
    <label>Product Company/Brand:</label>
    <input 
    type="text" 
    placeholder='Product brand'
    required
    name='brand'
    value="brand"
    onChange={(e) => handleInputChange(e)}
    />
    <label>Product Description:</label>
    <textarea name="desc"
    required
    value="desc"
    onChange={(e) => handleInputChange(e)}
    cols="30" 
    rows="10"
    ></textarea>
    <button className={styles.Adminbtn}>
      {detectForm(id, "Save Product", "Edit Product")}
    </button>
    </form>
    </Card>
    </div>
</>
  )
}

export default AddProduct