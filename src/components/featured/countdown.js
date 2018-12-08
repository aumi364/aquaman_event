import React, { Component } from "react";
import Slide from "react-reveal/Bounce";

class Countdown extends Component {
    state ={

    }
    getCountDown(){
        
    }
    componentDidMount(){

    }
  render() {
    return (
      <Slide top delay={500}>
        <div>
          <div className="countdown_wrapper">
            <div
              className="countdown_top"
              style={{
                background: "linear-gradient(skyblue,aqua)",
                color: "SteelBlue "
              }}
            >
              IN THEATER
            </div>
            <div
              className="countdown_bottom"
              style={{
                background: "linear-gradient(skyblue,aqua)"
              }}
            >
              <div className="countdown_item">
                <div className="countdown_time">23</div>
                <div className="countdown_tag">Days</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">78</div>
                <div className="countdown_tag">minutes</div>
              </div>
              <div className="countdown_item">
                <div className="countdown_time">65</div>
                <div className="countdown_tag">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;
