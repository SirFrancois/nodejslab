let path = require('path');
let fs = require('fs');
let request = require('request')


let chirps=[{name:'Sir', chirp: 'Hello'},
{name:'chris', chirp: 'hello'},
{name:'dj', chirp: 'hello'},
{name:'ben', chirp: 'hello'},
{name:'ant', chirp: 'hello'},
]

fs.writeFile('chirps.json', chirps, (err) => {
    if (err) throw err;

    console.log('success')
});


