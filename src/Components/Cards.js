import React, { useState } from 'react'
import data from '../data.js'
import Questions from './Questions.js';
import { Link } from 'react-router-dom';


const Cards = ({questionNo,setQuestionNO}) => {

    function clickhandler(){
        setQuestionNO(questionNo+1);
    }

  return (
    <div>
        <div>
            <Questions questionNo={questionNo}></Questions>
        </div>
        <div>
            <div>
                {
                    questionNo<3 ?
                    (<button className='border rounded ' onClick={clickhandler}>
                        Save and Next
                    </button>
                    ):
                    (
                        <Link to="submit">
                        <button className='border rounded '>
                        Submit
                        </button>
                        </Link>
                    )
                    
                }
                
            </div>
        </div>
    </div>
  )
}

export  default Cards;
