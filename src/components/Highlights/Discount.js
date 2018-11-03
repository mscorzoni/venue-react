import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  }

  porcentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
        this.setState({
          discountStart: this.state.discountStart + 1
        })
    }
  }

  componentDidUpdate(){
    setTimeout(() => {
      this.porcentage()
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={()=> this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mauris nec dolor in eros commodo tempor. Aenean </p>
              <div>
                Button
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;