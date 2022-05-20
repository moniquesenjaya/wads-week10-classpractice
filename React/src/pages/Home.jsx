import React, { useEffect, useState } from "react";


const Home = () => {
  const [hero, setHero] = useState([])

  const fetchData = () => {

    fetch("http://127.0.0.1:8000/heroes/")
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        setHero(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      Heroes List     
        <ul>
          {hero.map(hero => (
            <li key={hero.name}>{hero.name}: {hero.alias}</li>
          ))}
        </ul>
    </div>
  );
}

export default Home;
