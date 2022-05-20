import React, {useState} from "react";

const CreatePost = () => {
  const [name, setName] = useState(null);
  const [alias, setAlias] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "alias"){
        setAlias(value);
    }
}
const handleSubmit  = () => {
  console.log(name, alias);
  var jsonData = {
    "name": name,
    "alias": alias
  }
  console.log(jsonData)
  const response = fetch('http://localhost:8000/heroes/?format=json', {  
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData) 
    })
  }


  return (
    <div>
      <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Create Post</h3>
            </div>
        </nav>
        <div className="form">
          <div className="form-body">
              <div className="name">
                  <label className="form__label" for="name">Name </label>
                  <input className="form__input" type="text" id="name" placeholder="Name" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="alias">
                  <label className="form__label" for="alias">Alias </label>
                  <input  type="text" name="" id="alias"  className="form__input"placeholder="Alias" onChange = {(e) => handleInputChange(e)}/>
              </div>
          </div>
          <div class="footer">
              <button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button>
          </div>
      </div>     
    </div>
  );
}

export default CreatePost;
