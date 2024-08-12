import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LifecycleComponent extends Component {
  state = {
    allArticles: [],
    filteredArticles: [],
    searchTerm: '',
  };

  componentDidMount() {
    this.getData();
    window.onscroll = this.scrollUpButton;
  }

  getData = () => {
    const urlData = 'https://newsapi.org/v2/everything?q=tesla&from=2024-07-12&sortBy=publishedAt&apiKey=542d8b36e56f4044a035d48626c5c242';
    fetch(urlData)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          this.setState({
            allArticles: data.articles,
            filteredArticles: data.articles,
          });
          alert('Data berhasil diambil');
        } else {
          console.error('Terjadi kesalahan', data);
        }
      })
      .catch(error => {
        console.error('Error', error);
        alert('Pastikan terkoneksi dengan internet');
      });
  };

  displayNews = (articles) => {
    return articles.map((article, index) => (
      <article key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card h-100 d-flex flex-column">
          {article.urlToImage ? (
            <img src={article.urlToImage} className="card-img-top" alt={article.title} />
          ) : (
            <p className="text-center">Gambar tidak ditemukan</p>
          )}
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">
              Oleh: {article.author || 'Tidak diketahui'}, {article.source?.name || 'Tidak diketahui'}. Pada: {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="card-text">{article.description || 'Tidak ada deskripsi.'}</p>
            <p className="card-text">{article.content || 'Belum ditambahkan'}</p>
            <a href={article.url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
              Lihat Selengkapnya
            </a>
          </div>
        </div>
      </article>
    ));
  };

  handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredArticles = this.state.allArticles.filter(article =>
      article.title.toLowerCase().includes(searchTerm)
    );
    this.setState({ filteredArticles, searchTerm });
  };

  scrollUpButton = () => {
    const topButton = document.getElementById("topScrollButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <div>
        {/*SearchBar*/}
        <nav className="navbar navbar-light bg-primary">
          <div className="container">
            <a className="navbar-brand">Portal Berita</a>
            <div className="d-flex">
              <input
                className="form-control me-2 search-bar"
                type="text"
                placeholder="Cari berita..."
                id="search-bar"
                aria-label="Search"
                value={this.state.searchTerm}
                onChange={this.handleSearch}
              />
            </div>
          </div>
        </nav>
        {/*End SearchBar*/}
        
        {/*Main News*/}
        <main id="main">
          <section className="container">
            <div className="row">
              {this.displayNews(this.state.filteredArticles)}
            </div>
          </section>
        </main>
        {/*End Main News*/}

        <button id="topScrollButton" className="fixed-bottom btn btn-primary end-0" style={{ display: 'none' }} onClick={this.scrollToTop}>
          ↑ Scroll up
        </button>
      </div>
    );
  }
}

export default LifecycleComponent;