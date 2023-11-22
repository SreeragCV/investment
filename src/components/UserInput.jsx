import React from 'react'

function UserInput() {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <label htmlFor="">Initial Investment</label>
        <input type="text" />
      </div>
      <div className='input-group'>
        <label htmlFor="">Annual Investment</label>
        <input type="text" />
      </div>
      <div className='input-group'>
        <label htmlFor="">Expected Return</label>
        <input type="text" />
      </div>
      <div className='input-group'>
        <label htmlFor="">Duration</label>
        <input type="text" />
      </div>
    </section>
  )
}

export default UserInput
