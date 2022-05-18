import React from "react"
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const apiUrl = 'http://localhost:8000/hero/heroes/';//'https://api.github.com/users/hacktivist123/repos';
    fetch(
      apiUrl,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': data.get('name'),
          'alias': data.get('alias')
        })
      })
    .then((res) => res.json())
    .then((msg) => {
      alert( "Data has been created: "+JSON.stringify( msg ) )
      navigate("/");
      }
    )
    .catch((err) => alert(err))
  }
  


  return (
    <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name"/>
        </label>
        <label>
          Alias:
          <input type="text" name="alias"/>
        </label>
        <input type="submit" value="Submit" />
    </form>
  );
}

export default CreatePost;
