import React from 'react'
import data from '../data.js'

const Questions = ({questionNo}) => {

  function checkanswer(x){
    console.log(x);
    console.log(data[questionNo].correctoption);
    if(x===data[questionNo].correctoption)
      console.log("right");
    else
    console.log("wrong");
  }
  return (
    <div className='w-full border rounded h-[380px]'>
        <div>
          <div>
            <p>{questionNo+1}.  {data[questionNo].ques}</p>
          </div>
          <div className="border" onClick={() => checkanswer(data[questionNo].optiona)}>
            a. {data[questionNo].optiona}
          </div>
          <div className="border" onClick={() => checkanswer(data[questionNo].optionb)}>
            b. {data[questionNo].optionb}
          </div>
          <div className="border" onClick={() => checkanswer(data[questionNo].optionc)}>
            c. {data[questionNo].optionc}
          </div>
          <div className="border" onClick={() => checkanswer(data[questionNo].optiond)}>
            d. {data[questionNo].optiond}
          </div>
        </div>
    </div>
  )
}

export default Questions;
