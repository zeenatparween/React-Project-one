import React from 'react'
import "../App.css"

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-right">
                    <h1>your feet deserve the best</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis neque nihil aperiam, sit fuga quo! Perspiciatis!</p>
                    <span className="btn-section">
                        <button className="btn1">Shop Now</button>
                        <button className="btn2">Category</button>
                    </span>

                    <div className="hero-right-footer">
                        <span>Aslo Available on</span>
                        <div className="image">
                            <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-png-download-0.png" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCvAjTgJ0ERXUmpHEhBcdRrlD4SSmIxsW-w&usqp=CAU" alt="" />

                        </div>
                    </div>

                </div>

                <div className="hero-left">
                    <img src="https://freepngimg.com/save/27428-nike-shoes-transparent-background/800x587" alt="" />

                </div>
            </div>
        </div>
    )
}

export default Hero

