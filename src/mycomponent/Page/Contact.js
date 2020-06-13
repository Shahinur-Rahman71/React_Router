import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="logoImage">
                    {/* <img src={logo} className="logo" /> */}
                    <div className="container overlay">
                        <h3 className="">Hi, I am Shahinur Rahman</h3>
                        <p>The background-image property sets one or more background images for an element.</p>
                    </div>                   
                </div>

                <div className="container my-5">
                    <div >
                        <h3>Contact Page</h3>
                        <p>
                            The name of our country is the People's Republic of Bangladesh. It is one of the most beautiful countries in the world. Our country was a part of Pakistan before 1971. Then we freed our country and achieved victory after nine month's liberation war. 3 million people sacrificed their lives in the liberation war in 1971. Our independence day is 26th March and Victory day is 16th December. The national language of our country is Bangla. It is also a matter of great pride for us that we are the only nation who sacrificed their lives for the sake of their mother tongue in  21st February of 1952. In order to show respect to them, UNESCO has declared 21st February as International Mother Language Day. The name of the capital of Bangladesh is Dhaka. It is the busiest and populated city of our country. The total population is 16 crore. The total area of our country is 1,47,570 square km. Our country is a river-oriented country. The main rivers of our country are Padma, Jamuna, Meghna. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;