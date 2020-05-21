import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

class ToggleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: this.props.opened,
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  render() {
    var { title, children, design } = this.props;
    const { opened } = this.state;

    return (
      <div className="box">
        <h6 className="boxTitle" style={design} onClick={this.toggleBox}>
          {title}
          <FontAwesomeIcon
            icon={opened ? faAngleUp : faAngleDown}
            size="lg"
            style={{ float: "right" }}
          />
        </h6>
        {opened && <div className="boxContent">{children}</div>}
      </div>
    );
  }
}

export default ToggleBox;
