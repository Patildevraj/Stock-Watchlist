import React from 'react';
import '../CSS/styles.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../REDUX/StockAction/StockAction';

const WatchList = () => {
    const dispatch = useDispatch();
    const stockWatchlist = useSelector((state) => state.StockData);
    console.log(stockWatchlist.watchlistData, "ddddddd");

    const removeWatchlistButton = (data) => {
        dispatch(removeFromWatchlist(data))
    }

    return (
        <div>
            <h1 className='mt-4'>
                Watchlist
            </h1>
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col-md-12">
                        <table className='table border m-auto'>
                            <tbody>
                                {
                                    stockWatchlist.watchlistData.length > 0 ? (
                                        stockWatchlist.watchlistData.map((element, index) => {
                                            return (
                                                <tr key={index} className='py-5'>
                                                    <td>{element.ticker}</td>
                                                    <td>{element.price}</td>
                                                    <td><button onClick={() => { removeWatchlistButton(element) }} className='btn btn-danger px-3 my-2'> - </button></td>
                                                </tr>
                                            )
                                        })) : <h2 className='text-center py-5'>Please add your stock watchlist</h2>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchList;