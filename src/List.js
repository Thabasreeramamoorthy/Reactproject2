import React from 'react'
function List() {
    const names=["Greetings","heyy","all!!!!"]
    const names1=["Have","a","good","day"]
    const nameslist=names1.map(mam=><h2>{mam}</h2>)
  return (
    <div>
        <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        {nameslist}
    </div>
  )
}

export default List