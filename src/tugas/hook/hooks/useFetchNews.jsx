import { useState, useEffect } from 'react';

const useFetchNews = (url) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.status === 'ok') {
                    setArticles(data.articles);
                    alert('data berhasil diambil');
                } else {
                    setError('Terjadi kesalahan saat mengambil data');
                    console.log('error :', error);
                }
            } catch (err) {
                setError('Pastikan terkoneksi dengan internet');
            }
        };
        fetchData();
    }, [url]);

    return { articles, error };
};

export default useFetchNews;