import React from 'react';

const AddService = () => {

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const title = e.target.title.value;
        const description= e.target.description.value;
        const img = e.target.img.value;
        const newService = {title, description, img}


        fetch('http://localhost:4000/services', {
            method :'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    return (
        <div className='mx-auto w-50'>
            <h1 className='text-center mt-3'>Add Service</h1>
            <form className='d-flex flex-column' onSubmit={(e) => handleOnSubmit(e) }>
                <input className='mb-2' type='text' name='title' placeholder='name of service'/>
                <textarea className='mb-2' type='description' name='description' placeholder='write something about the service'/>
                <input className='mb-2' type='text' name='img' placeholder='img url'/>
                <button type='submit'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;