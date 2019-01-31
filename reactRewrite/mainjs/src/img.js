import React from 'react';

import axios from 'axios';
// select tag from html for svg
const USER_NAME = 'fireinjun';
const svMainRX = /^<svg(.|\n|\r)+?.*\/svg>/gmi;
// select text to remove x and y formatting titles
const textTagRX = /<text(.|\n|\r)+?\/text>/g;
// select svg tag for xmlns
const svTagRX = /^<svg.?/;
// Where we're querying for the data
const API=`https://github.com/users/${USER_NAME}/contributions`;
// Add this so SVG is renderable
const svgStr = '<svg xmlns="http://www.w3.org/2000/svg" ';
class Image extends React.Component {
  state = {
    Img: '',
  }

getImg = () => {
  axios
    .get(API)
    .then(res => {
      if (res.status === 200) {
        const rawData = res.data;
        const sortedData = rawData.match(svMainRX).toString();
        const finalImg = sortedData.replace(svTagRX, svgStr).replace(textTagRX, '').trim();
        this.setState({
          Img: finalImg
        });
        console.log(finalImg);
        return finalImg;
      }
      return res.status;
    })
    .catch(error => {
      console.error(error);
    });
};

  render() {
    const {Img} = this.state;
    return(
      <React.Fragment>
      {Img}
      </React.Fragment>

    );};

}

export default Image;
