import React, { useContext } from 'react'
import { data, data1 } from '../App'

const ComC = () => {
  const fname = useContext(data);
  const myage = useContext(data1);
  return (
    <>
      <h3>My Name is {fname} and age is {myage}</h3>
      <p>Use the UseContext</p>
    </>
  )
}

export default ComC