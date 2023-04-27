import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom/dist';
import News from '../../../Share/News/News';
import AllNews from '../AllNews/AllNews';

const Categories = () => {

    const {id} = useParams()
    const newsLoader = useLoaderData()

    return (
        <div>
            {
                newsLoader.map(news => <AllNews key={news._id} news={news}></AllNews>)
            }
        </div>
    );
};
export default Categories;