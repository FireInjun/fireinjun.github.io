import React from 'react';
import axios from 'axios';

class Cell extends React.Component {
  render() {
    const { x, y } = this.props;
    // offseting by x and y for left and top, everything relative to the left and top of grid
    return (
      <div className="Cell" style={{
        left: `${CELL_SIZE * x + 1}px`,
        top: `${CELL_SIZE * y + 1}px`,
        width: `${CELL_SIZE - 1}px`,
        height: `${CELL_SIZE - 1}px`,
        background: `#${this.props.children}`,
      }} />
    );
  }
}

export default {Cell};
