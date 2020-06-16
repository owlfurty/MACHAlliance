import React, { Component , Fragment } from "react";
import Header from "../component/header/Header";

import SliderOne from "../component/slider/SliderOne";
// import SliderVideo from "../component/slider/SliderVideo";

import AboutComp from "../elements/AboutComp";
import ManifestoComp from "../elements/ManifestoComp";
import AcronymComp from "../elements/AcronymComp";
import ArchitectureComp from "../elements/ArchitectureComp";
import TheboardComp from "../elements/TheboardComp";
import CrewComp from "../elements/CrewComp";

import Members from "../elements/Members";
import InsightsComp from "../elements/InsightsComp";
import PressroomComp from "../elements/PressroomComp";
import Mediacontacts from "../elements/Mediacontacts";
import Mediamentions from "../elements/Mediamentions";
import Events from "../elements/Events";
import MyForm from "../elements/MyForm"
import Getintouch from "../elements/Getintouch"

import Helmet from "../component/common/Helmet";

import Footer from "../component/footer/Footer";

class MainDemo extends Component{
    render(){
        return(
            <Fragment> 
                <Helmet pageTitle="MACH Alliance" />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}
                
                {/* Start About Area */}
                <div className="about-area about-position-top linend">
                    <AboutComp />
                </div>
                {/* End About Area */}

                {/* Start ManifestoComp Area */}
                <div className="manifesto-area manifesto-position-top linend">
                    <ManifestoComp />
                </div>
                {/* End ManifestoComp Area */}

                {/* Start Acronym Area */}
                <div className="acronym-area acronym-position-top linend">
                    <AcronymComp />
                </div>
                {/* End Acronym Area */}

                {/* Start ArchitectureComp Area */}
                <div className="architecture-area architecture-position-top linend">
                    <ArchitectureComp />
                </div>
                {/* End ArchitectureComp Area */}
                
                {/* Start TheboardComp Area */}
                <div className="theboard-area theboardComp-position-top container-desktop">
                    <TheboardComp />
                </div>
                {/* End TheboardComp Area */}

                {/* Start CrewComp Area */}
                <div className="CrewComp-area CrewComp-position-top container-desktop">
                    <CrewComp />
                </div>
                {/* End CrewComp Area */}

                {/* Start Members Area */}
                <div className="members-area members-position-top linend">
                    <Members />
                </div>
                {/* End Members Area */}

                {/* Start InsightsComp Area */}
                <div className="insights-area insights-position-top linend">
                    <InsightsComp />
                </div>
                {/* End Insights Area */}

                {/* Start PressroomComp Area */}
                <div className="pressroom-area pressroom-position-top linend">
                    <PressroomComp />
                </div>
                {/* End PressroomComp Area */}

                {/* Start Mediacontacts Area */}
                <div className="mediacontacts-area mediacontacts-position-top linend">
                    <Mediacontacts />
                </div>
                {/* End Mediacontacts Area */}

                {/* Start Mediamentions Area */}
                <div className="mediamentions-area mediamentions-position-top">
                    <Mediamentions />
                </div>
                {/* End Mediamentions Area */}

                {/* Start Events Area */}
                <div className="events-area events-position-top ">
                    <Events />
                </div>
                {/* End Mediamentions Area */}
                
                {/* Start MyForm Area */}
                <div className="myForm-area myForm-position-top linend">
                    <MyForm />
                </div>
                {/* End MyForm Area */}

                {/* Start Getintouch Area */}
                <div className="container-desktop getintouch-area getintouch-position-top">
                    <Getintouch />
                </div>
                {/* End Getintouch Area */}

                <Footer />
                
            </Fragment>
            
        )
    }
}
export default MainDemo;