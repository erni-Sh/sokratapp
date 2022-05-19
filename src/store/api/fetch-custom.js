/* eslint-disable */
let requested = [];

export const fetchData = async (slugs) => {
  // console.clear();
  let requestArr = [];
  let request = {};
  let done = false;
  let delay = 0;

  // request разные должны быть - переносится error true

  return await new Promise((resolve, reject) => {

    for (let key in slugs) {
      delay += 1500;
      request.data = null;
      // request.isLoading = true;
      // request.error = false;

      setTimeout(async () => {
        console.log('Запрос ' + key + ': ' + slugs[key]);
        // console.time(key)
        await fetch('https://sokratapp.site/wp-json/wp/v2/' + slugs[key])
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            return res;
          } else {
            let error = new Error(res.statusText);
            error.response = res;
            console.log(title);
            console.log(error);
          }
        })
        .then((response) => response.json())
        .then(posts => {
          // console.timeEnd(key);
          // console.log(posts);
          request.data = posts;
        })
        .catch((e) => {
          // request.error = true;
          reject();
        });
        // console.log(request);
        requestArr[key] = {...request};

        if(Object.keys(requestArr).length === Object.keys(slugs).length) {
          done = true;
          console.log('All request done!');
          resolve(requestArr);
        };
      }, delay);
    };
  })
  .then(
    result => {return result},
    error => {return {error: true}}
  );
}