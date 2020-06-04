import React from "react";
import "../Pricing/Pricing.css"

//import 'bootstrap/dist/css/bootstrap.min.css';


class Pricing extends React.Component {
    render() {
        return (

            <div className="flex-container" >
                <div className="flex-item" >
                    <ul className="package-type">
                        <li className="header"> 1 x 1 Hour Lesson</li>
                        <li className="subheader"> $60</li>
                        <li>Standard Lesson</li>
                        <li className="sub-header" />
                    </ul>
                </div>
                <div className="flex-item" >
                    <ul className="package-type">
                        <li className="header"> 5 x 1 Hour Lesson</li>
                        <li className="subheader">$270</li>
                        <li>Save $30</li>
                        <li className="sub-header" />
                    </ul>
                </div>
                <div className="flex-item" >
                    <ul className="package-type">
                        <li className="header"> 10 x 1 Hour Lesson</li>
                        <li className="subheader">$520</li>
                        <li>Save $80</li>
                        <li className="sub-header" />
                    </ul>
                </div>

                <div className="flex-item" >
                    <ul className="package-type">
                        <li className="header"> 1 x 1 Hour Lesson</li>
                        <li className="subheader"> $60</li>
                        <li>Standard Lesson</li>
                        <li className="sub-header" />
                    </ul>
                </div>
                <div className="flex-item" >
                    <ul className="package-type">
                        <li className="header"> 5 x 1 Hour Lesson</li>
                        <li className="subheader">$270</li>
                        <li>Save $30</li>
                        <li className="sub-header" />
                    </ul>
                </div>
                <div className="flex-item" >
                    <ul className="package-type">
                        <li className="header"> 10 x 1 Hour Lesson</li>
                        <li className="subheader">$520</li>
                        <li>Save $80</li>
                        <li className="sub-header" />
                    </ul>
                </div>
            </div>

        );
    }
}

export default Pricing;