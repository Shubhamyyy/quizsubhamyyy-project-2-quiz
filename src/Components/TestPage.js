import React from 'react'
import data from '../data.js'
import Cards from './Cards.js'
import Panel from './Panel.js'
import { useState } from 'react'

const TestPage = () => {

//  console.log(data);
const [questionNo,setQuestionNO]=useState(0);
  return (
    <div className='flex'>
      <div className='border rounded h-[450px] w-[850px] '>
        <Cards questionNo={questionNo} setQuestionNO={setQuestionNO}></Cards>
      </div>
      <div className='border rounded h-[450px] w-[400px]'>
        <Panel questionNo={questionNo} setQuestionNO={setQuestionNO}></Panel>
      </div>
    </div>
  )
}
export default TestPage;
