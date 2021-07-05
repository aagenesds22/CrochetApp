import React, { useEffect } from 'react'



function GridItem({_id, name, description}) {

    return (
        <div key={_id}>
                    <h3>{name}</h3>
                    <p>{description}</p>
        </div>
    )
}


export default GridItem;