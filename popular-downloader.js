const requestPromise = require("request-promise");

requestPromise ('https://reddit.com/r/popular.json')
.then ((body) => {

    JSON.parse(body).data.children.forEach((item)) => {
        if (Path.extname (jpg,gif,png)){

        }
        Array.push(
            {jpg: item.data.jpg,
             gif: item.data.gif,
             png: item.data.png,
            })

            fs.writefile (datafile, JSON.stringify(arr), (err) => {
                if(err) throw err;

                console.log('succes;')
            })
    }
        
    

})
