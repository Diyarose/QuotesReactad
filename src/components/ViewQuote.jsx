import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewQuote = () => {
    const [data,changeData] = useState(
        {
            "quotes": []
   
        }
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Quote</th>
                                    <th scope="col">Author</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.quotes.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.quote}</td>
                                            <td>{value.author}</td>

                                        </tr>
                                    }
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewQuote