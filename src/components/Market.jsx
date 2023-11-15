import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

const background = "bg-backgroundColorPrimary";


function Market(props) {
    const [cryptoArray, setCrypto] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10; // Number of rows per page

    useEffect(() => {
        const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${rowsPerPage}&page=${currentPage}&sparkline=false&price_change_percentage=24h%2C%207d&locale=en&precision=8`;

        Axios.get(apiUrl)
            .then((res) => {
                console.log(res);

                setCrypto(res.data);
                // Calculate the total number of pages based on the total rows from the API
                setTotalPages(25);
            });
    }, [currentPage]);

    const [totalPages, setTotalPages] = useState(1);

    // Handle page navigation
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };


    return (
        <div className={background}>
            <div id="Market" className="container max-w-screen-xl mx-auto flex-row justify-center items-center md:min-h-full py-20 px-10 md:px-40" >

                {/*search bar*/}

                <div className="flex  items-center text-sm mb-4">

                    <FiSearch className="md:w-4 md:h-4 text-textColorTertiary mr-6" />

                    <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="w-80 py-1 px-2 bg-backgroundColorPrimary border rounded-lg border-backgroundColorSecondary focus:outline-none text-textColorTertiary "
                />

                </div>

                {/*table*/}


                <div className="">
                        <table className="w-full text-white font-mukta font-thin">
                            <thead>

                            <tr className = "text-textColorTertiary text-sm text-left border-b border-textColorTertiary h-24">

                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>24h %</th>
                                <th className="hidden md:table-cell">High</th>
                                <th className="hidden md:table-cell">Low</th>
                                <th className="hidden md:table-cell">Market Cap</th>
                                <th className="hidden md:table-cell">Volume (24h)</th>
                            </tr>
                            </thead>


                            {/*{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400","current_price":33883.68563407,"market_cap":666851856820,"market_cap_rank":1,"fully_diluted_valuation":717300267798,"total_volume":44295815057,"high_24h":35066,"low_24h":32682,"price_change_24h":871.72,"price_change_percentage_24h":2.64062,"market_cap_change_24h":18277787607,"market_cap_change_percentage_24h":2.81815,"circulating_supply":19523050.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-50.61879,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":50181.14584,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2023-10-24T23:32:37.794Z","price_change_percentage_24h_in_currency":2.6406249963872432},*/}
                            <tbody className="text-sm">
                            {cryptoArray
                                .filter((data) => data.name.toLowerCase().includes(search))
                                .map((data, id) => (
                                    <tr key={id} className="h-16 hover:text-textColorTertiary hover:scale-[1.02] transform transition-transform ease-in-out duration-300">
                                        <td className="pr-4">{data.market_cap_rank}</td>
                                        <td className="">
                                            <div className="flex items-center space-x-2 ">
                                                    <img src={data.image} alt="Logo" width="30px" />
                                                <p className="coin-name font-bold">{data.name}</p>
                                                <p className="coin-symbol text-textColorSecondary">{data.symbol}</p>
                                            </div>
                                        </td>
                                        <td className="">
                                            ${new Intl.NumberFormat('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        }).format(data.current_price)}
                                        </td>
                                        <td className={` ${data.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {data.price_change_percentage_24h > 0 ? `+${data.price_change_percentage_24h.toFixed(2)}%` : `${data.price_change_percentage_24h.toFixed(2)}%`}
                                        </td>
                                        <td className="hidden md:table-cell text-green-200"> ${new Intl.NumberFormat('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        }).format(data.high_24h)}</td>
                                        <td className="hidden md:table-cell text-red-200"> ${new Intl.NumberFormat('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        }).format(data.low_24h)}</td>

                                        <td className="hidden md:table-cell">${Math.round(data.market_cap).toLocaleString()}</td>
                                        <td className="hidden md:table-cell">${Math.round(data.total_volume).toLocaleString()}</td>
                                    </tr>
                                ))}
                           </tbody>
                        </table>


                    <div className="flex justify-center items-center space-x-4 my-8 text-white text-sm">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={
                                currentPage === 1
                                    ? 'cursor-not-allowed text-xs font-bold  rounded-xl text-black bg-backgroundColorSecondary w-20 h-6 bg-opacity-50'
                                    : 'text-xs font-bold rounded-xl text-black bg-backgroundColorSecondary w-20 h-6 hover:bg-opacity-50'
                            }
                        >
                            Previous
                        </button>
                        <span>{currentPage} / {totalPages}</span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={
                                currentPage === totalPages
                                    ? 'cursor-not-allowed text-xs font-bold  rounded-xl text-black bg-backgroundColorSecondary w-20 h-6 bg-opacity-50'
                                    : 'text-xs font-bold rounded-xl text-black bg-backgroundColorSecondary w-20 h-6 hover:bg-opacity-50'
                            }
                        >
                            Next
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Market;
