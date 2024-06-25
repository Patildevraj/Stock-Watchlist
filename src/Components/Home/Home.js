import React, { useEffect, useState } from 'react';
import '../CSS/styles.css';
import { addToWatchlist } from '../REDUX/StockAction/StockAction';
import { useDispatch } from 'react-redux';

const Home = ({ initialState }, watchlistData) => {
    const dispatch = useDispatch();
    const [comprice, setComprice] = useState([]);
    const [dupComprice, setDupComprice] = useState([]);

    useEffect(() => {
        addCompanyDetails();
    }, []);

    const addCompanyDetails = async () => {
        await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`)
            .then(resp => {
                return resp.json()
            })
            .then(res => {
                setComprice(res.top_gainers)
            })
    }

    const addToWatchlistButton = (data) => {
        dispatch(addToWatchlist(data))
    }

    const getSearchStock = async (searchItem) => {
        console.log(searchItem, "uuuuuuu")
        await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchItem}&apikey=C63RFA30A6JZIGYW`)
            .then(resp => {
                return resp.json()
            })
            .then(res => {
                console.log('search response', res.bestMatches);
                setComprice(res.bestMatches)
            })
    }
    return (
        <>
            <div className="container">

                <div className="row py-3 mt-5 m-auto">
                    <form className="d-flex m-auto" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => getSearchStock(e.target.value)} aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Company Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Add to Watchlist</th>
                            </tr>
                        </thead>
                        <tbody>

                            {comprice.length > 0 ? (
                                comprice.map((element, index) => {
                                    return (
                                        <tr key={index} className='py-5'>
                                            <td>{element.ticker}</td>
                                            <td>{element.price}</td>
                                            <td><button className='btn btn-success px-3 my-2'
                                                onClick={() => { addToWatchlistButton(element) }} > + </button></td>
                                        </tr>
                                    )
                                })
                            ) :
                                <tr>
                                    <td>
                                        <p className='py-3 text-center'> No details found</p>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Home;