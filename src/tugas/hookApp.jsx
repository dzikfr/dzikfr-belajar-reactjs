import React, { useState } from 'react';
import Navbar from './hook/components/navbar';
import NewsList from './hook/components/newsList';
import ScrollUpButton from './hook/components/scrollUpButton';
import useFetchNews from './hook/hooks/useFetchNews';
import style from './newsStyle.css';

const HookApp = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { articles, error } = useFetchNews('https://newsapi.org/v2/everything?q=tesla&from=2024-07-14&sortBy=publishedAt&apiKey=542d8b36e56f4044a035d48626c5c242');

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e) => setSearchTerm(e.target.value);

    return (
        <>
            <Navbar onSearch={handleSearch} />
            {error ? <p>{error}</p> : <NewsList articles={filteredArticles} />}
            <ScrollUpButton />
        </>
    );
};

export default HookApp;
