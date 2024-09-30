import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";

const MenuItem = ({ imgSrc, title, price, salePrice }) => {
    return (
        <div className="col-md-3 mb-2">
            <div className="card position-relative">
                {salePrice && (
                    <span className="badge text-bg-warning position-absolute" style={{ width: 100, padding: 5 }}>
                        Sale
                    </span>
                )}
                <img src={imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {salePrice ? (
                            <>
                                <del>{price}</del> <span style={{ color: '#FFD700' }}>{salePrice}</span>
                            </>
                        ) : (
                            price
                        )}
                    </p>
                    <a href="#" className="form-control btn btn-dark">Buy</a>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
