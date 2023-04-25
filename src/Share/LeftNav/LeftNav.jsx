import React, { useEffect, useState } from 'react';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    })

    return (
        <div>
            <h4 className='text-secondary fw-bold'>All Category</h4>
            <div className='ms-5 mt-4'>
                {
                    categories.map(category => <p key={category.id}>{category.name}</p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;