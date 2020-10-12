import React from 'react';

const Home = () => {
    return (<div>
                <div>
                    I am BUILD home component
                </div>
                <button onClick={e => {console.log("clicked")}}>Click me</button>
            </div>)
};

export default Home;
