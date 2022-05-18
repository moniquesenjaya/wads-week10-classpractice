import React, {useEffect, useState} from "react"

const Home = () => {
  const [data,setData] = useState(null);
  useEffect(() => {
    const apiUrl = 'http://localhost:8000/hero/heroes/?format=json';//'https://api.github.com/users/hacktivist123/repos';
    fetch(apiUrl)
    .then((res) => res.json())
    .then((a) => {
      //console.log(a);
      setData(a);
    })
  },[])
  return (
    <div>
      {
        data && data.length>0 && data.map((item)=><p key={item.name}>{item.name}</p>)
      }
    </div>
  );
}

export default Home;
