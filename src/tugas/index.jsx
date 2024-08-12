import React, { useState, useEffect } from 'react';
import Navbar from './lifecycle/navbar';
import Main from './lifecycle/main';
import ScrollUpButton from './lifecycle/scrollUpButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './lifecycle-style.css'

const Lifecycle = () => {
    const [allArticles, setAllArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-07-12&sortBy=publishedAt&apiKey=542d8b36e56f4044a035d48626c5c242')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    setAllArticles(data.articles);
                    setFilteredArticles(data.articles);
                    alert('Data berhasil diambil');
                } else {
                    console.error('Terjadi kesalahan', data);
                }
            })
            .catch(error => {
                console.error('Error :', error);
                alert('Pastikan terkoneksi dengan internet');
            });
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = allArticles.filter(article => 
            article.title.toLowerCase().includes(searchTerm)
        );
        setFilteredArticles(filtered);
    };

    return (
        <div>
            <Navbar handleSearch={handleSearch} />
            <main id="main">
                <Main articles={filteredArticles} />
            </main>
            <ScrollUpButton />
        </div>
    );
};

export default Lifecycle;