import React, { useEffect, useState } from 'react';
import Accordion from './Accordion/Accordion';

const Blog = () => {
    const [qna, setQna] = useState([]);

    useEffect(()=>{
        fetch('qna.json')
        .then(res => res.json())
        .then(data => setQna(data));
    }, [qna]);

    return (
        <div>
            <h1>BLOGS ({qna.length})</h1>
            {
               qna.map(q => <Accordion
                key={q.question}
                qna={q}
               ></Accordion>)
            }
        </div>
    );
};

export default Blog;