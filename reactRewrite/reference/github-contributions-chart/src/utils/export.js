import axios from 'axios';

export const fetchData =
    (username) => {
      return axios.get(API_URL + username);
    }

export const download =
    (canvas) => {
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
    }

export const uploadToTwitter = (canvas) => {
  try {
    const data =
        await axios.post(`${API_URL}tweetMedia`, {image: canvas.toDataURL()});
    const url = window.encodeURIComponent(data.mediaUrl);
    const text = window.encodeURIComponent(
        'Check out my #GitHubContributions history over time. A free tool by @sallar and friends. https://github-contributions.now.sh');
    window.open(`https://twitter.com/share?text=${text}&url=${url}`);
  } catch (err) {
    console.error(err);
  }
}
