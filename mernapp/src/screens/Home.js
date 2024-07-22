import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/card';


export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            setFoodItem(response[0]);
            setFoodCat(response[1]);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <div><Navbar /></div>

            <div>
           <div id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ maxWidth: '100%' }}
      >
        <div className="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e=>{setSearch(e.target.value)})}
              />
            
                
              
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/premium-photo/chicken-steam-momo-nepalese-traditional-dish-momo-stuffed-with-chicken-then-cooked-served-with-sauce-rustic-wooden-background-selective-focus_726363-739.jpg?w=2000"
              className="d-block w-100"
              style={{ height: '700px',width: '1600px', filter: "brightness(30%)" }}
              alt="momo"
            />

          </div>
          <div className="carousel-item">
            <img
              src="https://www.mistay.in/travel-blog/content/images/2020/07/biriyani-end-2.jpg"
              className="d-block w-100"
              style={{ height: '700px',width:'1600px' ,filter: "brightness(30%)" }}
              alt="fruit"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg"
              className="d-block w-100"
              style={{ height: '700px', filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/1747340.jpg"
              className="d-block w-100"
              style={{ height: '700px', filter: "brightness(30%)" }}
              alt="..."
            />
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
            </div>
            



            <div className='container'>
                {foodCat.length > 0 ? (
                    foodCat.map((data) => {
                        return (<div >
                            <div key={data._id} className='row mb-3'>
                                <div className="fs-3 m-3">{data.CategoryName}</div>
                                <hr />
                                {foodItem.length > 0 ? (
                                    foodItem
                                        .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))) 
                                        .map(filterItems => {
                                            return(
                                            <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                <Card foodItem={filterItems}
                                                    options={filterItems.options[0]}
                                                    
                                                ></Card>
                                            </div>
                                            )
                                            })
                                ) : (
                                    <div>No such data found</div>
                                )}
                            </div>
                            </div>  );
                    })
                ) : (
                    <div>No food categories available</div>
                )}
            </div>
            
            <Footer />
        </div>
    );
}
