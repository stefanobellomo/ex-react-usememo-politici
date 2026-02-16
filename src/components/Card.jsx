import { memo } from 'react'

export default memo(function Card({ politico }) {

    console.log("card");

    return (
        <div className="col">
            <div className="card">
                <img src={politico.image} alt={politico.name} />
                <div>
                    <h4>{politico.name}</h4>
                    <p>{politico.position}</p>
                    <p>{politico.biography}</p>
                </div>
            </div>
        </div>
    )
})