import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [qna, setQna] = useState([]);

    useEffect(()=>{
        fetch('qna.json')
        .then(res => res.json())
        .then(data => setQna(data));
    }, [qna]);

    return (
        <div>
            <h1 className='text-center mt-4'>BLOGS ({qna.length})</h1>
            <div>
            {
               qna.map(q => <Blog
                key={q.question}
                qna={q}
               ></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;