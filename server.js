require("dotenv").config()
const express = require('express');
const app = express();
const cors = require('cors')
const knex = require('./knex')

app.set('port', process.env.PORT || 3001);

app.locals.title = 'One Hit Wonderz';

app.use(cors());

app.get('/api/v1/oneHitWonderz', async(request, response) => {
    const songs = await knex.select().from('songs')
    response.status(200).json(songs);
    // const oneHitWonderz = app.locals.oneHitWonderz
    // if (!oneHitWonderz) {
    //     return response.sendStatus(404);
    //   }

    //   response.status(200).json(oneHitWonderz);
});

app.get('/', (request, response) => {
    response.status(200).json({
        smoke: "test"
    })
})

  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
 });

  
