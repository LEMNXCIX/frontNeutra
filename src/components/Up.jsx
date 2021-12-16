import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import styled from "styled-components";

class GoTop extends Component {
  state = {
    intervalId: 0,
    thePosition: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  };

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <>
          <MoveUp>
            
            <span>
              <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={this.scrollToTop} />
             
            </span>
          </MoveUp>
        </>
      );
    }
  };

  render() {
    return <>{this.renderGoTopIcon()}</>;
  }
}
const MoveUp = styled.div`
  position: fixed;
  margin-right: 50px;
  cursor: pointer;
  bottom: 30px;
  right: 0;
  z-index: 1;
  text-align: center;
  height: 45px;
  font-size: 40px;
  line-height: 46px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;

export default GoTop;
