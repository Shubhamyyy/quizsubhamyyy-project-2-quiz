import React from 'react'

const Panel = ({questionNo,setQuestionNO}) => {
  return (
    <div>
      <div>
        Status
      </div>
      <div className='flex flex-col'>
        <button className='border' onClick={() => setQuestionNO(0)}>
          1
        </button>
        <button className='border' onClick={() => setQuestionNO(1)}>
          2
        </button>
        <button className='border' onClick={() => setQuestionNO(2)}>
          3
        </button>
        <button className='border' onClick={() => setQuestionNO(3)}>
          4
        </button>
      </div>
    </div>
  )
}

export default Panel;
