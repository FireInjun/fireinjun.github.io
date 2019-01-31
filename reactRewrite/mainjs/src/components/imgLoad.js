import axios from 'axios';

const test = () => {
  axios
    .get('https://github.com/users/fireinjun/contributions')
    .then(res => {
      if (res.status === 200) {
        const html = res.data;
        const $(
'.'
        ).load(html);
       }

      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
};
test();
