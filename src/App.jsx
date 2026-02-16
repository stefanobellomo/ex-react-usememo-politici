import { useState, useEffect, useMemo } from 'react'
import Card from './components/Card'

function App() {

  const [politici, setPolitici] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const loadPolitici = async () => {
      const res = await fetch('http://localhost:3333/politicians')
      const data = await res.json()
      setPolitici(data)
    }
    loadPolitici()
  }, [])

  const filteredInfo = useMemo(() => {
    return politici.filter(filtro => {
      return (filtro?.name ?? "").toLowerCase().includes(search.toLowerCase())
    })
  }, [politici, search])

  return (
    <>
      <div className="container">
        <input className='my-3' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='cerca...' />
        <div className="row row-cols-4">
          {filteredInfo.map((politico) => (
            <Card key={politico.id} politico={politico} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
