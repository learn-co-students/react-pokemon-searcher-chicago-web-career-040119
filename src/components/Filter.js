import React from 'react'

const Filter =props=> {
  // console.log(props)
  return(
    <div>
      <p>Type the pokemon you want to see</p>
      <input type="text" onChange={props.getSearchInput} value={props.search}/>
    </div>
  )
}
export default Filter
