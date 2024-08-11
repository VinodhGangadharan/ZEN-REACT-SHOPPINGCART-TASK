import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    //Set count state for cart items
  const [count, setCount] = useState(0);

  //Add or remove cart items and update button text
  const handleCart =(event) => {
    let text = event.target.innerText;
    if(text=="Add to cart")
    {
    event.target.innerText = "Remove from cart";
    setCount(count + 1);
    }
    if(text=="Remove from cart")
        {
        event.target.innerText = "Add to cart";
        setCount(count - 1);
        }
        window.scrollTo(0, 0);
  }

  return (
    <>


{/*<!-- Navigation-->*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">E Zone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button id="cart" className="btn btn-outline-dark" type="button">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
       {/* <!-- Header-->*/}
        <header className="bg-dark py-5" background="https://c4.wallpaperflare.com/wallpaper/949/575/798/headphones-music-audifonos-wallpaper-preview.jpg">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0"><h3>Offers upto 70%</h3></p>
                </div>
            </div>
        </header>
       {/* <!-- Section-->*/}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                           {/* <!-- Product image-->*/}
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/41NVmSPAgAL.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h6 className="fw-bolder">boAt Rockerz 255 Pro+</h6>
                                     {/*<!-- Product reviews-->*/}
                                     <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                       
                                    </div>
                                    {/*<!-- Product price-->*/}
                                    ₹1249.00 - ₹1600.00
                                </div>
                            </div>
                            {/*<!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0 ">
                                <div className="text-center"><button type="button" onClick ={handleCart} className="btn btn-outline-light mt-auto">Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/*<!-- Sale badge-->*/}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/*<!-- Product image-->*/}
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/51mqOI+K1QL._AC_UF1000,1000_QL80_.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h6 className="fw-bolder">Samsung Galaxy A55</h6>
                                    {/*<!-- Product reviews-->*/}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/*<!-- Product price-->*/}
                                    <span className="text-muted text-decoration-line-through">₹499.00 </span>
                                    ₹250.00
                                </div>
                            </div>
                            {/*<!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0">
                                <div className="text-center"><button type="button"  onClick ={handleCart} className="btn btn-outline-light mt-auto">Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/*<!-- Sale badge-->*/}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/*<!-- Product image-->*/}
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/61BYFuHb7lL._AC_UF1000,1000_QL80_.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h6 className="fw-bolder">realme Buds 2</h6>
                                     {/*<!-- Product reviews-->*/}
                                     <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                       
                                    </div>
                                    {/*<!-- Product price-->*/}
                                    <span className="text-muted text-decoration-line-through">₹598.00</span>
                                    ₹300.00
                                </div>
                            </div>
                            {/*<!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0">
                                <div className="text-center"><button type="button" onClick ={handleCart} className="btn btn-outline-light mt-auto" >Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/*<!-- Product image-->*/}
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/51QxkCFVuML._AC_UF1000,1000_QL80_.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h6 className="fw-bolder">Skullcandy Jib</h6>
                                    {/*<!-- Product reviews-->*/}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/*<!-- Product price-->*/}
                                    ₹1999.00
                                </div>
                            </div>
                            {/*<!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0">
                                <div className="text-center"><button type="button" onClick ={handleCart} className="btn btn-outline-light mt-auto">Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/*<!-- Sale badge-->*/}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/*<!-- Product image-->*/}
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/51Kb3NDy1AL.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h6 className="fw-bolder">OnePlus Nord E103A</h6>
                                     {/*<!-- Product reviews-->*/}
                                     <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        
                                    </div>
                                    {/*<!-- Product price-->*/}
                                    <span className="text-muted text-decoration-line-through">₹799.00  </span>
                                    ₹399.00
                                </div>
                            </div>
                            {/*<!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0">
                                <div className="text-center"><button type="button" onClick ={handleCart} className="btn btn-outline-light mt-auto">Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                           {/*<!-- Product image-->*/}
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/61eqJoa4MBL._AC_UF1000,1000_QL80_.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h6 className="fw-bolder">Sony MDR-EX155AP</h6>
                                     {/*<!-- Product reviews-->*/}
                                     <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/*<!-- Product price-->*/}
                                    ₹799.00 - ₹1299.00
                                </div>
                            </div>
                            {/*<!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0">
                                <div className="text-center"><button type="button" onClick ={handleCart} className="btn btn-outline-light mt-auto" >Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/*<!-- Sale badge-->*/}
                            <div className="badge bg-dark text-white position-absolute"style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/*<!-- Product image-->*/}
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/51fv4ccuMkL._AC_UF1000,1000_QL80_.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h6 className="fw-bolder">Samsung EHS64</h6>
                                    {/*<!-- Product reviews-->*/}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                      
                                    </div>
                                    {/*<!-- Product price-->*/}
                                    <span className="text-muted text-decoration-line-through">₹500.00</span>
                                    ₹300.00
                                </div>
                            </div>
                            {/*<!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0">
                                <div className="text-center"><button onClick ={handleCart} className="btn btn-outline-light mt-auto" >Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/*<!-- Product image-->*/}
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/61+tzvHZi+L._AC_UF1000,1000_QL80_.jpg" alt="..." />
                            {/*<!-- Product details-->*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name-->*/}
                                    <h6 className="fw-bolder">boAt Bassheads 242</h6>
                                    {/*<!-- Product reviews-->*/}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/*<!-- Product price-->*/}
                                    ₹599.00
                                </div>
                            </div>
                            {/*<!-- Product actions-->*/}
                            <div className="card-footer p-4 pt-0 border-top-0">
                                <div className="text-center"><button type="button" onClick ={handleCart} className="btn btn-outline-light mt-auto" >Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<!-- Footer-->*/}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Ezone Website 2024</p></div>
        </footer>    
    </>
  )
}

export default App
