// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import PopContent from '../../components/PopContent_v0.0.1';

class NavBar extends Component {
  constructor(props) {
    super(props)
    // @PROP: sizing - Object{}
    // @PROP: onSelectMenu - Function()
    // @PROP: onSelectPage - Function()

    this.state = {
      isActivePopContent: false,
    };
  }

  render() {
    const { sizing } = this.props;
    const { isActivePopContent } = this.state;

    const popContent = 
    <button
      className={"btn bg-yellow color-cream no-user"}
      style={{
        height: sizing.button + "px",
        width: (sizing.button*3) + "px",
      }}
    >
      <Link to={"/"}>
        {"View Boot Page"}
      </Link>
    </button>;
    
    return (
      <div>
        {/* NavBar */}
        <div 
          className="gradient-red flex-row-start" 
          style={{
            height: "100%", 
            width:"100%",
          }}>
            
            {/* Icon - Hamburger  */}
            <svg 
              className="icon-light svg-color-cream" 
              height={sizing.button} 
              width={sizing.button} 
              viewBox="0 0 16 16"
              onClick={() => this.handlePopContentToggle()}
            >
              <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </div>

        {/* Pop Context */}
        {isActivePopContent && 
          <PopContent
            buttonSize={sizing.buttonSmall}
            elementHeight={sizing.screenbarLarge}
            elementWidth={sizing.screenbarLarge * 2}
            elementOffsetX={10}
            elementOffsetY={-sizing.screenbarLarge + 10}
            passedContent={popContent}
            onClose={() => this.handlePopContentToggle()}
          />
        }
      </div>
     );
  }

  handlePopContentToggle = () => {
    const { isActivePopContent } = this.state;
    this.setState({isActivePopContent: !isActivePopContent});
  }
}
export default NavBar;