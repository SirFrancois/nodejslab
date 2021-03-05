const requestPromise = require("request-promise");

requestPromise ('https://reddit.com/r/popular.json')
.then(res=> console.log(res))

    JSON.body.data.children.forEach(item => {
        console.log(item.data.title);
    });

    fs



