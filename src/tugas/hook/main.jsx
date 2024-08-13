import React from 'react';

const Main = ({ articles }) => {
    return (
        <section className="container">
            <div className="row">
                {articles.map((article, index) => (
                    <article key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100 d-flex flex-column">
                            {article.urlToImage ? (
                                <img src={article.urlToImage} alt="news" className="card-img-top" />
                            ) : (
                                <p className="text-center">Gambar tidak ditemukan</p>
                            )}
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">
                                    Oleh: {article.author || 'Tidak diketahui'}, {article.source?.name || 'Tidak diketahui'}.
                                    Pada: {new Date(article.publishedAt).toLocaleDateString()}
                                </p>
                                <p className="card-text">{article.description || 'Tidak ada deskripsi.'}</p>
                                <p className="card-text">{article.content || 'Belum ditambahkan'}</p>
                                <a href={article.url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">Lihat Selengkapnya</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Main;