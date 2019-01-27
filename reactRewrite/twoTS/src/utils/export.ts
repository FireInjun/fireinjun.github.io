import axios from 'axios';

const API_URL = process.env.API_URL;

export const fetchData = () => {
  return axios.get(API_URL);
};

export const download = (canvas) => {
  try {
    const dataUrl = canvas.toDataURL();
    const a = document.createElement('a');
    document.body.insertAdjacentElement('beforeend', a);
    a.download = 'contributions.png';
    a.href = dataUrl;
    a.click();
    document.body.removeChild(a);
  } catch (err) {
    console.error(err);
  }
};
