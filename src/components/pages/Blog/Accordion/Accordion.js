import React from 'react';


const Accordion = ({qna}) => {
    const {question, answer} = qna;
    return (
        <div className='text-left my-6 mx-10 border rounded '>
            <h2 className='ms-3 mb-2 font-bold'>
                <button>
                    {question}
                </button>
            </h2>
            <p className='ml-3 mb-2'>
                {answer}
            </p>
        </div>
    );
};

export default Accordion;