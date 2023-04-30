import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://the-dragon-newspaper-server-nurmorshed7987-gmailcom.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4 className='text-secondary fw-bold'>All Category</h4>
            <div className='ms-5 mt-4'>
                {
                    categories.map(category => <p  key={category.id}>
                        <Link className=' text-decoration-none text-secondary' to={`/category/${category.id}`}>
                            {category.name}
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;