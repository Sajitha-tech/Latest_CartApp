import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [cart, changeCart] = useState({ products: [], total: 0, skip: 0, limit: 30 });

    const fetchdata = () => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                changeCart(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        cart.products.map((x, y) => {
                            return (
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={y}>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h5 className="card-title">{x.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{x.category}</h6>
                                            <p className="card-text">{x.description}</p>
                                            <p className="card-text">Discount: {x.discountPercentage}%</p>
                                            <p className="card-text">Price: ${x.price}</p>
                                            <a href="#" className="card-link">Visit</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default View;
