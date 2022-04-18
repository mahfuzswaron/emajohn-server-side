import React from 'react';


const Accordion = ({qna}) => {
    const {question, answer} = qna;
    return (
        <div className='text-left my-4 mx-4 '>
            <h3 className='ms-3 mb-2 font-bold'>{question}
            </h3>
            <p className='ms-3 mb-2'>
                {answer}
            </p>
        </div>
    );
};

export default Accordion;