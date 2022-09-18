const { json } = require("express");


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert([
    {
      "song_name": `Monster Mash`,
        "artist": "Bobby Pickett",
          "genre": "Pop",
          "moods": ["upbeat", "funky"],
          "release_date": "August 25, 1962",
          "decade": "Sixties",
          "bio": `Born in Somerville, Massachusetts, Pickett watched many horror films as a result of his father's position as a local movie theater manager. He started improvising impressions of Hollywood film stars at a young age. At a turning point in his career, Pickett was a vocalist for local swing band Darren Bailes and the Wolf Eaters. He would later serve from 1956–1959 in the United States Army, stationed in Korea for a period of time. He co-wrote his signature song, "Monster Mash", with Leonard Capizzi in May 1962 as a spoof of popular contemporary dance crazes.`,
          "cover_image": `https://e.snmc.io/i/1200/s/c9bd0c7970cbe22f49803c389cb7fbfd/2041579`,
          "spotify_key": "0xxZY5C9xxij3D1HkzbnfC"
  },
  {
    "song_name": `Ho Hey`,
    "artist": `Lumineers`,
      "genre": `folk-rock`,
      "moods": [`chill`, `upbeat`],
      "release_date": `April 3, 2012`,
      "decade": "Tens",
      "bio": `This gentle folk-rock tune was everywhere in the autumn of 2012 and while the band's 2016 album Cleopatra made Number 1 in the LP charts, none of the songs cut through like Ho Hey did.`,
      "cover_image": `https://lastfm.freetls.fastly.net/i/u/500x500/9d07b9a1c242469d995ae629977a6103.jpg`,
      "spotify_key": "0W4Kpfp1w2xkY3PrV714B7"
  }
  
  ].map(song => {
  song.moods = JSON.stringify(song.moods)
  return song
  }));
};
