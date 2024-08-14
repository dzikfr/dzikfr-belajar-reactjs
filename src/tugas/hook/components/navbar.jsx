import React from 'react';

const Navbar = ({ onSearch }) => {
    return (
        <nav className="navbar navbar-light bg-primary">
            <div className="container">
                <a className="navbar-brand">Portal Berita</a>
                <div className="d-flex">
                    <input
                        className="form-control me-2 search-bar"
                        type="text"
                        placeholder="Cari berita..."
                        onChange={onSearch}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;