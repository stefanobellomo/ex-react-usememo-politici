import { useState, useEffect } from 'react'

function App() {

  const [politici, setPolitici] = useState([])


  const loadPolitici = async () => {
    const res = await fetch('http://localhost:3333/politicians')
    const data = await res.json()
    setPolitici(data)
  }

  console.log(politici);

  useEffect(() => {
    loadPolitici()
  }, [])

  return (
    <>
      <div className="container">
        <input type="text" value={ } />
        <div className="row row-cols-4">
          {politici.map((politico) => (
            <div className="col" key={politico.id}>
              <div className="card">
                <img src={politico.image} alt={politico.name} />
                <div>
                  <h4>{politico.name}</h4>
                  <p>{politico.position}</p>
                  <p>{politico.biography}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
