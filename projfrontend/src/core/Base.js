import React from 'react'
import Menu from './Menu';

const Base = ({
    title="My Title",
    description="My description",
    className="bg-dark text-white p-4",
    children
}) => {
    return (
        <div>
            <Menu />
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                    <h4> T-Shirt Store</h4>
                </div>
                <div className="container-fluid" style={{textAlign: 'center'}}>
                    <span className="text-muted" >
                    an amazing collection of t-shirts
                    </span>
                </div>
            </footer>
            </div>
    )
}

export default Base;
