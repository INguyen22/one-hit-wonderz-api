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
    "song_name": "Wipeout",
    "artist": "The Surfaris",
      "genre": "Surf Rock",
      "moods": ["upbeat" ],
      "release_date": "January 8, 1963",
      "decade": "Sixties",
      "bio": `Bob Berryhill, Pat Connolly, Jim Fuller and Ron Wilson wrote "Wipe Out" almost on the spot while at Pal Recording Studio in Cucamonga, California, in late 1962, when they realized they needed a suitable B-side for the intended "Surfer Joe" single. One of the band members suggested introducing the song with a cracking sound, imitating a breaking surfboard, followed by a manic voice babbling, "ha ha ha ha ha, wipe out". The voice was that of the band's manager, Dale Smallin.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/e/e4/Surfaris_Wipeout_single.jpg",
      "spotify_key": "4anUinKv803lyDD1vaSXhU"
  },
  {
    "song_name": "In-A-Gadda-Da-Vida",
    "artist": "Iron Butterfly",
      "genre": "Psych Rock",
      "moods": ["heavy", "funky" ],
      "release_date": "June 14, 1968",
      "decade": "Sixties",
      "bio":  `At slightly over 17 minutes, it occupies the entire second side of the album. The lyrics, a love song from the biblical Adam to his mate Eve, are simple and are heard only at the beginning and the end. The middle of the song features a two-and-a-half-minute Ron Bushy drum solo.
  "In-A-Gadda-Da-Vida" was Iron Butterfly's only song to reach the top 40, reaching number 30,  while the album itself reached number four on the album chart and sold over a million copies. An 8-minute-20-second edit of the song was included in the soundtrack to the 1986 film Manhunter. In 2009, it was named the 24th-greatest hard rock song of all time by VH1. It is also often regarded as an influence on heavy metal music and one of the firsts of the "genre".`,
      "cover_image": "https://m.media-amazon.com/images/I/81vyCcicw9L._SL1408_.jpg",
      "spotify_key": "1exUq8aG2OMbSeZeTwz06k"
  },
  {
    "song_name": "Spirit in the Sky",
    "artist": "Norman Greenbaum",
      "genre": "Gospel Rock",
      "moods": ["chill", "upbeat"],
      "release_date": "December 10, 1969",
      "decade": "Sixties",
      "bio": `"Spirit in the Sky" makes several religious references to Jesus, although Greenbaum himself is Jewish. In a 2006 interview with The New York Times, Greenbaum told a reporter he was inspired to write the song after watching Porter Wagoner singing a gospel song on TV. Greenbaum said: "I thought, Yeah, I could do that,' knowing nothing about gospel music, so I sat down and wrote my own gospel song. It came easy. I wrote the words in 15 minutes".`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Norman_Greenbaum_-_Spirit_in_the_Sky.jpg/220px-Norman_Greenbaum_-_Spirit_in_the_Sky.jpg",
      "spotify_key": "0jvN7eQJJt4nxQzgQfZ1SP"
  },
  {
    "song_name": "Teen Angel",
    "artist": "Mark Dinning",
      "genre": "Pop",
      "moods": [`sad`, `smooth`],
      "release_date": "January 21, 1960",
      "decade": "Sixties",
      "bio": `The song is about a girl and her boyfriend (the song's narrator) who go out for a ride together. He pulls her to safety when their car is stalled on a railroad track in the path of an oncoming train. But then she runs back to the car, and is killed in the collision. When her body is recovered, the narrator's high school class ring is in her hand, which was apparently the reason she ran back. The last verse ends with the lyrics: "I'll never kiss your lips again/They buried you today." The final line in the coda asks the Teen Angel to: "Answer me, please."
      "Teen Angel" and its two predecessors at the Hot 100's top spot, "El Paso" by Marty Robbins and "Running Bear" by Johnny Preston, continued a string of pop tunes in which someone dies tragically.`,
      "cover_image": "https://m.media-amazon.com/images/I/71O08mn-L5L._SY355_.jpg",
      "spotify_key": "3PymNAkWROfyEVeYq6XtjD"
  },
  {
    "song_name": "Telstar",
    "artist": "The Tornados",
      "genre": "Instrumental Rock",
      "moods": ["upbeat", "smooth", "chill" ],
      "release_date": `August 17, 1962`,
      "decade": "Sixties",
      "bio": ` "Telstar" was named after the Telstar communications satellite, which was launched into orbit on 10 July 1962. Written and produced by Joe Meek, it featured either a clavioline or the similar Jennings Univox, both keyboard instruments with distinctive electronic sounds. It was recorded in Meek's studio in a small flat above a shop in Holloway Road, North London. "Telstar" won an Ivor Novello Award and is estimated to have sold at least five million copies worldwide.
  In 2007, Tim Wheeler of Ash wrote that "Telstar" was one of the earliest pop tracks influenced by science fiction, and that "for its time it was so futuristic and it still sounds pretty weird today". He observed the influence of "Telstar" in the 2006 single "Knights of Cydonia" by Muse; Muse's singer and guitarist, Matt Bellamy, is the son of the Tornados guitarist George Bellamy.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/d/d5/Tornados-telstar-german-sleeve.jpg",
      "spotify_key": "2rtaHm5SkgFzVa5Gr8oTW6"
  },
  {
    "song_name": "Na Na Hey Hey Kiss Him Goodbye",
    "artist": "Steam",
      "genre": "Classic Rock",
      "moods": ["sad", "upbeat"],
      "release_date": "November 15, 1969",
      "decade": "Sixties",
      "bio": `Paul Leka, Gary DeCarlo and Dale Frashuer wrote a blues shuffle version of the song in the early 1960s when they were members of a doo-wop group from Bridgeport, Connecticut, called the Glenwoods, the Citations, and the Chateaus, of which Leka was the piano player. The group disbanded when Leka talked Frashuer into going into New York City with him to write and possibly produce. In 1969, DeCarlo (using the professional name Garrett Scott) recorded four songs at Mercury Records in New York with Leka as producer. The singles impressed the company's executives, who wanted to issue all of them as A-side singles. In need of a B-side, Leka and DeCarlo resurrected an old song from their days as the Glenwoods, "Kiss Him Goodbye", with their old bandmate, Frashuer.
  With DeCarlo as lead vocalist, they recorded the song in one recording session. Instead of using a full band, Leka played keyboards and had engineer Warren Dewey splice together a drum track from one of DeCarlo's four singles and a conga drum solo by Ange DiGeronimo recorded in Leka's Bridgeport, Connecticut, studio for an entirely different session. "I said we should put a chorus to it (to make it longer)", Leka told Fred Bronson in The Billboard Book of Number One Hits. "I started writing while I was sitting at the piano going 'na, na, na, na, na, na, na, na'... Everything was 'na na' when you didn't have a lyric." Gary added "hey hey".`,
      "cover_image": "https://m.media-amazon.com/images/I/41zYiXn6dtL._SY580_.jpg",
      "spotify_key": "5xMLcSEstX1jN4arpNXqtX"
  },
  {
    "song_name": "In the Year 2525",
    "artist": "Zager and Evans",
      "genre": "Pop-Rock",
      "moods": ["chill", "saucy" ],
      "release_date": "April 29, 1969",
      "decade": "Sixties",
      "bio": " “In the Year 2525” opens with an introductory verse explaining that if mankind has survived to that point, they would witness the subsequent events in the song. The following verses pick up the story at 1,010-year intervals from 3535 to 6565. In each succeeding millennium, life becomes increasingly sedentary and automated: thoughts are pre-programmed into pills for people to consume, eyes, teeth, and limbs all lose their purposes due to machines replacing their functions, and marriage becomes obsolete because children are conceived in test tubes. The song ends after 10,000 years. By that time, humans have finally become extinct. But the narrator notes that somewhere “so very far away”, possibly in an alternative universe, the scenarios told in the song have still yet to play out, as the song repeats from the top (but in the same key, tone, and speed as the previous verse) and the recording fades out. The overriding theme, of a world doomed by its passive acquiescence to and overdependence on its own overdone technologies, struck a resonant chord in millions of people around the world in the late 1960s.",
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/In_the_Year_2525_Single.jpg/220px-In_the_Year_2525_Single.jpg",
      "spotify_key": "3LdLGNKCW0dNr14JQlZPQt"
  },
  {
    "song_name": "Harper Valley PTA",
    "artist": "Jeannie C. Reilly",
      "genre": "Country",
      "moods": ["upbeat", "smooth" ],
      "release_date": "August 2, 1968",
      "decade": "Sixties",
      "bio": "Riley sings a story about Mrs. Johnson, a `Harper Valley widowed wife` whose teenage daughter, a student at the junior high school, comes home one day with a note for her mother signed by the parent teacher association (PTA) secretary, in which they scold her for `wearing your dresses way too high`, for reports about her drinking and running around with multiple men, and that she shouldn't be raising her daughter that way. Outraged, Mrs. Johnson decides to pay an unannounced visit to the PTA, who happened to be holding a meeting that afternoon. Riley, who was working as a secretary in Nashville for Jerry Chesnut, got to hear the song and recorded it herself and it became a massive hit for her. The single's jump from 81 to 7 in its second week on the Billboard Hot 100 in late August 1968 is the decade's highest climb into that chart's Top Ten. Riley's version won her a Grammy for the Best Country Vocal Performance, Female. Her recording was also nominated for `Record of the Year` and `Song of the Year` in the pop field.",
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/d/da/Harper_Valley_P.T.A._-_Jeannie_C._Riley.jpg",
      "spotify_key": "2sZIclzhHlH8tzf7wry9hK"
  },
  {
    "song_name": "Hey Baby",
    "artist": "Bruce Channel",
      "genre": "Pop-Rock",
      "moods": ["upbeat" ],
      "release_date": "December 8, 1961",
      "decade": "Sixties",
      "bio": `"Hey! Baby" is a song written by Margaret Cobb and Bruce Channel, and recorded by Channel in 1961, first released on LeCam Records, a local Fort Worth, Texas label. It reached number 1 on the Billboard Hot 100 for three weeks, starting the week ending March 10, 1962.
  The song features a prominent riff from well-known harmonica player Delbert McClinton, and drums played by Ray Torres. Other musicians on the record included Bob Jones and Billy Sanders on guitar and Jim Rogers on bass. According to a CNN article from 2002, while touring the UK in 1962 with the Beatles, McClinton met John Lennon and gave him some harmonica tips. Lennon put the lessons to use right away on "Love Me Do" and later "Please Please Me". Lennon included the song in his jukebox, and it is also featured on the 2004 related compilation album John Lennon's Jukebox. "Hey! Baby" was used in the 1987 hit film Dirty Dancing in the scene in which Johnny and Baby dance on top of a log.`,
      "cover_image": "https://m.media-amazon.com/images/I/410492GEX7L.jpg",
      "spotify_key": "5ATFGyF7RbheJ76neYI55u"
  
  },
  {
    "song_name": "My Sharona",
    "artist": "The Knack",
      "genre": "Power pop",
      "moods": ["saucy", "upbeat", "funky"],
      "release_date": "June 1979",
      "decade": "Seventies",
      "bio": "In 2006, during a performance in Las Vegas, Fieger became disoriented, developing a dull headache, and grasping for the words to the songs that he had written and performed for years. Diagnosed with two brain tumors, Fieger underwent surgery and radiosurgery and returned to performing. However, he still continued to battle brain and lung cancer until his death on February 14, 2010, in Woodland Hills, California, at the age of 57, effectively bringing the band to an end",
      "cover_image": "https://i.pinimg.com/736x/cc/82/9e/cc829e91f9afd6b198b29ca78c3c7e06--walking-song-my-sharona.jpg",
      "spotify_key": "1HOMkjp0nHMaTnfAkslCQj"
  },
  {
    "song_name": "Kung Fu Fighting",
    "artist": "Carl Douglas",
      "genre": "Disco",
      "moods": ["upbeat", "funky" ],
      "release_date": "1974",
      "decade": "Seventies",
      "bio": `Carl had another top 30 hit in England with "Run Back" in 1977. He released the albums "Love, Peace and Happiness" in 1979 and "Keep Pleasing Me" in 1983. One of the most beloved of funky disco novelty one-hit wonder songs of the 70's, "Kung Fu Fighting" has been featured on the soundtracks to such films as "Rush Hour 3," "Epic Movie," "Daddy Day Care," "Bowfinger," "Beverly Hills Ninja," "Mortal Thoughts," and "Spirit of '76." Carl Douglas now lives in Hamburg, Germany and owns a production company that supplies music for films and advertisements.`,
      "cover_image": "https://i.discogs.com/At0wYNeJznv_BsmSkiiT42rbaxikP3iE9vQO5FC3cTU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTc4/MS0xMzA2NDAzMDMz/LmpwZWc.jpeg",
      "spotify_key": "40NRm1ZLvZpUSCUXAGGZ8J"
  },
  {
    "song_name": "Play That Funky Music",
    "artist": "Wild Cherry",
      "genre": "Disco Funk",
      "moods": ["upbeat", "funky"],
      "release_date": "April 10, 1977",
      "decade": "Seventies",
      "bio": "Wild Cherry was a hard rock cover band, but with the advent and popularity of the disco era, it began to be difficult to get bookings because audiences wanted to dance. Parissi told the band that if they wanted to get bookings, they were going to have to start to include dance tunes in their sets, but the band resisted becoming a disco band. While playing at the 2001 Club on the North Side of Pittsburgh to a predominantly black audience, a patron said to band member Beitle during a break, `Are you going to play some funky music, white boys?` Parissi grabbed a pen and order pad and wrote the song in about five minutes. The lyrics literally describe the predicament of a hard rock band adjusting to the disco era.",
      "cover_image": "https://static.stereogum.com/uploads/2019/09/Wild-Cherry-Play-That-Funky-Music-1568308462.jpg",
      "spotify_key": "5uuJruktM9fMdN9Va0DUMl"
  },
  {
    "song_name": "Stuck in the Middle With You",
    "artist": "Stealer's Wheel",
      "genre": "Folk Rock",
      "moods": ["upbeat", "smooth", "saucy"],
      "release_date": "April 27, 1973",
      "decade": "Seventies",
      "bio": " “Stuck in the Middle with You” was released on Stealers Wheel's 1973 eponymous debut album. Gerry Rafferty provided the lead vocals, with Joe Egan singing harmony. It was produced by Jerry Leiber and Mike Stoller. Rafferty's lyrics are a dismissive tale of a music industry cocktail party written (i.e. the clowns and jokers would be all the music executives and hangers on), and performed as a parody of Bob Dylan's style (the vocal impression, subject, and styling were so similar, listeners have wrongly attributed the song to Dylan since its release). The band was surprised by the single's chart success. The single sold over one million copies, eventually peaking at No. 6 on the US Billboard Hot 100 chart, No. 8 in the UK, and No. 2 in Canada. Billboard ranked it as the No. 30 song for 1973.",
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/8/89/Stuck_in_the_Middle_with_You.png",
      "spotify_key": "3Vby4nGmtbDo7HDJamOWkT"
  },
  {
    "song_name": "Afternoon Delight",
    "artist": "Starland Vocal Band",
      "genre": "Folk Rock",
      "moods": ["chill", "smooth", "saucy"],
      "release_date": "April 25, 1976",
      "decade": "Seventies",
      "bio": `"Afternoon Delight" is a hit song recorded by Starland Vocal Band, known for its close harmony and sexually suggestive wordplay. It was written by Bill Danoff, one of the members of the band.
  "Afternoon Delight" charted well in New Zealand, peaking at #5. In Australia it was a #6 hit (Adelaide radio station 5KA was first to pick up the single, making it #1 in South Australia). In the UK, it reached #18 and was used as theme to a weekly show of the same title on London's Capital Radio, hosted by Duncan Johnson, and from 1980 on an afternoon show using the same title, broadcast every weekday at Mercia Sound in Coventry, presented by Stuart Linnell. It became a US #1 single on July 10, 1976 and earned a gold record. "Afternoon Delight" also reached #1 in Canada.
  In 2010 Billboard named "Afternoon Delight" the 20th sexiest song of all time.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/9/9a/Afternoon_Delight_by_The_Starland_Vocal_Band.jpg",
      "spotify_key": "1pBAsoHy7eN9aeVCTAiKua"
  },
  {
    "song_name": "Video Killed the Radio Star",
    "artist": "The Buggles",
      "genre": "Electro Rock",
      "moods": ["upbeat"],
      "release_date": "September 7, 1979",
      "decade": "Seventies",
      "bio": `The song relates to concerns about, and mixed attitudes towards 20th-century inventions and machines for the media arts. The track has been positively received, with reviewers praising its unusual musical pop elements.
  On release, the single topped sixteen international music charts, including those in the UK, Australia, and Japan. It also peaked in the top 10 in Canada, Germany, New Zealand and South Africa, but only reached number 40 in the US. It has also been covered by many recording artists.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Video_Killed_the_Radio_Star_single_cover.jpg/220px-Video_Killed_the_Radio_Star_single_cover.jpg",
      "spotify_key": "6t1FIJlZWTQfIZhsGjaulM"
  },
  {
    "song_name": "Mississippi Queen",
    "artist": "Mountain",
      "genre": "Classic Rock",
      "moods": ["upbeat", "heavy"],
      "release_date": "February 28, 1970",
      "decade": "Seventies",
      "bio": " Considered a rock classic, it was Mountain’s most successful single, reaching number 21 in the Billboard Hot 100 in 1970. The song is included on the group's debut album and several live recordings have been issued. `Mississippi Queen` has been recorded by several artists, including W.A.S.P., Sam Kinison, Amanda Ayala, Bachman-Turner Overdrive, and Ozzy Osbourne, who had a hit with the song in 2005",
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/7/76/MississippiQueen45.jpg",
      "spotify_key": "4vO9dmzNRqDhFY3jD1a3P7"
  },
  {
    "song_name": "American Pie",
    "artist": "Don McLean",
      "genre": "Classic Rock",
      "moods": ["upbeat", "chill"],
      "release_date": "October 10, 1971",
      "decade": "Seventies",
      "bio": `At 8 minutes and 42 seconds, McLean's combined version is the sixth longest song to enter the Billboard Hot 100 (at the time of release it was the longest). The song also held the record for almost 50 years for being the longest song to reach number one before Taylor Swift's "All Too Well (10 Minute Version)" broke the record in 2021. Due to its exceptional length, it was initially released as a two-sided 7-inch single. "American Pie" has been described as "one of the most successful and debated songs of the 20th century".
  The repeated phrase "the day the music died" refers to a plane crash in 1959 that killed early rock and roll stars Buddy Holly, The Big Bopper, and Ritchie Valens, ending the era of early rock and roll; this became the popular nickname for that crash. The theme of the song goes beyond mourning McLean's childhood music heroes, reflecting the deep cultural changes and profound disillusion and loss of innocence of his generation`,
      "cover_image": "https://m.media-amazon.com/images/I/51PNnoJ+qfL.jpg",
      "spotify_key": "1fDsrQ23eTAVFElUMaf38X"
  },
  {
    "song_name": "Hooked on a Feeling",
    "artist": "Blue Swede",
      "genre": "Classic Rock",
      "moods": ["upbeat", "smooth", "funky"],
      "release_date": "1974",
      "decade": "Seventies",
      "bio": " Not much information is available about Blue Swede. They were a Swedish band that produced two albums of cover songs, with this song being their only successful single. Covering the original version by Mark James, they added the eponymous ‘Ooga-Chaka’ introduction, and the rest is history.",
      "cover_image": "https://static.stereogum.com/uploads/2019/05/Blue-Swede-Hooked-On-A-Feeling-1557766356.jpg",
      "spotify_key": "6Ac4NVYYl2U73QiTt11ZKd"
  },
  {
    "song_name": "The Devil Went Down To Georgia",
    "artist": "The Charlie Daniels Band",
      "genre": "Southern Rock",
      "moods": ["upbeat", "heavy", "saucy"],
      "release_date": "May 21, 1979",
      "decade": "Seventies",
      "bio": `The song's verses are closer to being spoken rather than sung (i.e., recitation), and tell the story of a young man named Johnny, in a variant on the classic deal with the Devil. The performances of the Devil and Johnny are played as instrumental bridges. The song was the band's biggest hit, reaching No. 3 on the Billboard Hot 100, prevented from further chart movement by "After The Love Has Gone" by Earth, Wind and Fire and "My Sharona" by The Knack.
  The ballad's story is a derivative of the traditional deal with the Devil motif. Charlie Daniels has stated in interviews, "I don't know where it came from, but it just did. Well, I think I might know where it came from, it may have come from an old poem called 'The Mountain Whippoorwill' that Stephen Vincent Benét wrote many, many years ago (1925), that I had in high school." `,
      "cover_image": "https://m.media-amazon.com/images/I/41bfleplSiL.jpg",
      "spotify_key": "383Xl5QTigwj3QiA3Qc6S7"
  },
  {
    "song_name": "Rock On",
    "artist": "Michael Damian",
      "genre": "Rock",
      "moods": ["chill", "saucy"],
      "release_date": "1989",
      "decade": "Eighties",
      "bio": `He won the BMI Song-writing Award for his hit single Was It Nothing At All and also wrote and produced tracks on Flicka 2 & 3, Marley & Me:The Puppy Years and A Princess For Christmas soundtracks.`,
      "cover_image": "https://i.discogs.com/vkcvmoxEjkzX4PZczojnny8cwltfmt7lr5vtAiHIXC0/rs:fit/g:sm/q:90/h:450/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NTgw/MzEtMTIyMTIyMDky/NC5qcGVn.jpeg",
      "spotify_key": "6e3O5XkMEhMAatdKnOlZPh"
  },
  {
    "song_name": "Party All The Time",
    "artist": "Eddie Murphy",
      "genre": "Funk",
      "moods": ["upbeat", "funky" ],
      "release_date": "September 23, 1985",
      "decade": "Eighties",
      "bio": `More recently, Eddie Murphy and his Eddie Murphy Productions company signed a deal with Amazon Studios. On March 31, 2022, it was announced that Murphy will portray George Clinton in an untitled  "bio"pic, with John Davis and Catherine Davis producing through Davis Entertainment.`,
      "cover_image": "http://www.liketotally80s.com/wp-content/uploads/2015/12/party-all-the-time.jpg",
      "spotify_key": "6N5DRCQUSXT1qQqmqsO92B"
  },
  {
    "song_name": "Come On Eileen",
    "artist": "Dexy`s Midnight Runners",
      "genre": "Pop",
      "moods": ["upbeat", "happy" ],
      "release_date": "June 25, 1982",
      "decade": "Eighties",
      "bio": `Come On Eileen" won Best British Single at the 1983 Brit Awards, and in 2015 the song was voted by the British public as the nation's sixth favourite 1980s number one single in a poll for ITV. It was ranked number eighteen on VH1's "100 Greatest Songs of the '80s" and was Britain's best-selling single of 1982.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/DexysMidnightRunnerComeOnEileen7InchSingleCover.jpg/220px-DexysMidnightRunnerComeOnEileen7InchSingleCover.jpg",
      "spotify_key": "3MrWxJaD2AT0W9DjWF64Vm"
  },
  {
    "song_name": "I Ran",
    "artist": "A Flock Of Seagulls",
      "genre": "Pop",
      "moods": ["upbeat", "happy" ],
      "release_date": "March, 1982",
      "decade": "Eighties",
      "bio": `In an article for Rolling Stone titled, Anglomania: The Second British Invasion, Parke Puterbaugh wrote of the impact of the song's music video on its US chart success, "Fronted by a singer-synth player with a haircut stranger than anything you'd be likely to encounter in a month of poodle shows, A Flock of Seagulls struck gold on the first try.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/I_Ran_-_A_Flock_of_Seagulls.jpg/220px-I_Ran_-_A_Flock_of_Seagulls.jpg",
      "spotify_key": "4s0QpaeB5a3C9cxNGqPXxk"
  },
  {
    "song_name": "You Spin Me Round (Like a Record)",
    "artist": "Dead or Alive",
      "genre": "Pop",
      "moods": ["upbeat", "saucy" ],
      "release_date": "November 5, 1984",
      "decade": "Eighties",
      "bio": `You Spin Me Round (Like a Record)" is a song by English pop band Dead or Alive, featured on their second album, Youthquake (1985). Released as a single in November 1984, it reached No. 1 in the UK in March 1985, taking 17 weeks to get there. It was the first UK number-one hit by the Stock Aitken Waterman production trio.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Dead_Or_Alive_Pete_Burns.jpg/220px-Dead_Or_Alive_Pete_Burns.jpg",
      "spotify_key": "1ChulFMnwxoD74Me8eX2TU"
  },
  {
    "song_name": "Pass the Dutchie",
    "artist": "Musical Youth",
      "genre": "Reggae",
      "moods": ["happy", "chill" ],
      "release_date": "August, 1982",
      "decade": "Eighties",
      "bio": `The song was the band's first release on a major label. Following a shouted intro taken from U Roy's "Rule the Nation" with words slightly altered, the track combined two songs: "Gimme the Music" by U Brown, and "Pass the Kouchie" by Mighty Diamonds, which deals with the recreational use of cannabis (kouchie being slang for a cannabis pipe).`,
      "cover_image": "https://i.discogs.com/SHey5teUZxEHv0tTiwcEYWn5Aie5lzuvY9Yn1TVX5lk/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyNDAy/NDQtMTU0NDczNjg4/OC02NjcxLmpwZWc.jpeg",
      "spotify_key": "1BkY0N8ChFk2mdLbAUu8ZK"
  },
  {
    "song_name": "I Melt with You",
    "artist": "Modern English",
      "genre": "new-wave",
      "moods": ["happy", "upbeat" ],
      "release_date": "August, 1982",
      "decade": "Eighties",
      "bio": `The song, produced by Hugh Jones, was the second single from their 1982 album After the Snow. It became the band's most successful single, largely in the United States, where it was featured in the film Valley Girl and on MTV. It reached number seven on Billboard's Mainstream Rock chart in 1983 and a re-release reached number 76 on its Hot 100 chart in 1990 (after reaching number 78 in 1983).`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/I_Melt_with_You_by_Modern_English_1982_original_release.jpeg/220px-I_Melt_with_You_by_Modern_English_1982_original_release.jpeg",
      "spotify_key": "6J2rMSRhgb4HuX6dWgM3nJ"
  },
  {
    "song_name": "What I Am",
    "artist": "Edie Brickell & New Bohemians",
      "genre": "pop",
      "moods": ["smooth", "chill" ],
      "release_date": "November, 1988",
      "decade": "Eighties",
      "bio": `"What I Am" is a song written by Edie Brickell and Kenny Withrow and recorded by Edie Brickell & New Bohemians for their debut album, Shooting Rubberbands at the Stars (1988). The song is highlighted by a guitar solo that notably features an envelope filter. It peaked at number seven on the US Billboard Hot 100, topped the Canadian RPM Top Singles chart, and became a top-twenty hit in Australia and New Zealand.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Edie_Brickell_-_What_I_Am_7-inch.gif/220px-Edie_Brickell_-_What_I_Am_7-inch.gif",
      "spotify_key": "6hHUiDe461VUoTHnsplRYs"
  },
  {
    "song_name": "Funkytown",
    "artist": "Lipps, Inc.",
      "genre": "Disco",
      "moods": ["funky", "upbeat" ],
      "release_date": "March 1980",
      "decade": "Eighties",
      "bio": `Lipps, Inc. released its final album, 4, in 1983. It did not chart. The following year, 1984, their single “Does Anybody Know” reached no. 32 on U.S. Dance. Lipps released two singles, “Power” and “Gossip Song,” in 1985 but neither charted. The group stopped touring and disbanded in 1985.`,
      "cover_image": "https://i1.sndcdn.com/artworks-000216533099-hpyvq9-t500x500.jpg",
      "spotify_key": "0KQh7AuuZvpTKWhcJa8Pbr"
  },
  {
    "song_name": "Hey Mickey",
    "artist": "Toni Basil",
      "genre": "New wave",
      "moods": ["funky", "upbeat", "saucy"],
      "release_date": "1982",
      "decade": "Eighties",
      "bio": `In 1984, Toni Basil's self-titled follow-up album was released, which included the American Top 40 hit "Over My Head". Although she found future chart success elusive, Basil remained busy appearing in such films as Rockula (1990) and has appeared in a guest shot on Baywatch (1989) in the late 1990s. Her choreographer talents have also been utilized lately by superstars Bette Midler and David Bowie and, in 1998, she choreographed a successful ad for "The Gap".`,
      "cover_image": "https://static.qobuz.com/images/covers/vc/qs/eye08zhzaqsvc_600.jpg",
      "spotify_key": "5G9KcZaxfCysfv4EryCB9b"
  },
  {
    "song_name": "MMMBop",
    "artist": "Hanson",
      "genre": "Pop rock",
      "moods": ["chill", "upbeat"],
      "release_date": "April 15, 1997",
      "decade": "Nineties",
      "bio": `bandmember Zac was slammed after his leaked Pinterest account was found to contain memes of a sexist, homophobic, and racist nature.
  Some of the posts supported George Zimmerman's killing of Trayvon Martin, while others compared his right to own guns to Rosa Park's rights to sit on a bus.After initially defending the posts, which included suggestions that men who dress as women were mentally ill, he later released an apology.In 2021, the group appeared on the US version of The Masked Singer and performed as the Russian Dolls.The band members are all married and have 15 kids among them - Taylor has seven, while Zac has five.`,
      "cover_image": "https://1.bp.blogspot.com/-1EZ1SJjWBZQ/T0KYlzAacbI/AAAAAAAADeA/i71PS0CbT9c/s1600/Front.jpeg",
      "spotify_key": "0lnxrQAd9ZxbhBBe7d8FO8"
  },
  {
    "song_name": "Jump Around",
    "artist": "House of Pain",
      "genre": "Hip Hop",
      "moods": ["upbeat", "heavy", "saucy"],
      "release_date": "May 5, 1992",
      "decade": "Nineties",
      "bio": `"Jump Around" is a song by the American hip hop group House of Pain, produced by DJ Muggs of the hip hop group Cypress Hill, who has also covered the song. It became a hit in 1992, reaching number 3 in the United States. A 1993 re-release of the song in the United Kingdom, where the initial release had been a minor hit, peaked at number 8. The song is popular among dancehall DJs and is widely regarded in the United Kingdom as a club classic.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Jump_Around_HOP.jpg/220px-Jump_Around_HOP.jpg",
      "spotify_key": "6JymsaWDHk2Yj4e0yNBIFH"
  },
  {
    "song_name": "No Rain",
    "artist": "Blind Melon",
      "genre": "Alternative Rock",
      "moods": ["sad", "chill"],
      "release_date": "September 14, 1992",
      "decade": "Nineties",
      "bio": `Although the song is credited to the whole band, it was bassist Brad Smith who wrote the greater part of "No Rain". He said: "The song is about not being able to get out of bed and find excuses to face the day when you have really, in a way, nothing." At the time, Smith had been dating a girl who was going through depression (she would sleep through sunny days and complain when it didn't rain), and for a while he told himself that he was writing the song from her perspective, though Smith later realized that he was also writing it about himself.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/0/03/No_Rain_by_Blind_Melon.jpg",
      "spotify_key": "6txWz9UapYHVxEd7dDIHXT"
  },
  {
    "song_name": "What Is Love",
    "artist": "Haddaway",
      "genre": "Eurodance",
      "moods": ["happy", "upbeat"],
      "release_date": "August 1993",
      "decade": "Nineties",
      "bio": `"What Is Love" was written and produced by German music producer and composer Dee Dee Halligan (Dieter Lünstedt a.k.a. Tony Hendrik) and his partner/wife Junior Torello (Karin Hartmann-Eisenblätter a.k.a. Karin van Haaren) of Coconut Records in Hennef (Sieg) near Cologne. They had previously produced songs for successful groups like Bad Boys Blue and Londonbeat, and were waiting for the right singer for their new song. Trinidadian-born singer Nestor Alexander Haddaway was then chosen to sing it. He used to work as a producer, dancer and choreographer before he was signed to the label.[5] The producers wanted Haddaway to try singing the song like Joe Cocker. He told them, "I love Joe Cocker, but I'm no Joe Cocker." He then came up with his own idea on how to sing it and after the producers let the singer try it his way, "What Is Love" was created.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/HaddawayWhatIsLoveMaxiCDCover.jpg/220px-HaddawayWhatIsLoveMaxiCDCover.jpg",
      "spotify_key": "2IHaGyfxNoFPLJnaEg4GTs"
  },
  {
    "song_name": "What`s Up",
    "artist": "4 Non Blondes",
      "genre": "Alternative Rock",
      "moods": ["sad", "chill", "heavy"],
      "release_date": "June 11, 1993",
      "decade": "Nineties",
      "bio": `The song had its origins well before 4 Non Blondes were formed. During the time when the two were struggling musicians in San Francisco, Third Eye Blind frontman Stephan Jenkins recalled sitting in a room with Linda Perry, who worked as a waitress down the street, performing their original compositions to one another. The two played each other early versions of "Semi-Charmed Life" and "What's Up?", both of which would become massive hits for their respective bands. It would be decades later that Jenkins realized the songs performed in that private session would sell a combined 17 million records.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/e/e1/WhatsUpCover.jpg",
      "spotify_key": "0jWgAnTrNZmOGmqgvHhZEm"
  },
  {
    "song_name": "Whoomp! (There It is)",
    "artist": "Tag Team",
      "genre": "Miami Bass",
      "moods": ["upbeat", "saucy", "funky"],
      "release_date": "May 7, 1993",
      "decade": "Nineties",
      "bio": `Tag Team recorded "Whoomp! (There It Is)" in August 1992. At that time, Glenn was working as the main DJ at Magic City, an Atlanta gentlemen's club that would later become recognized as a hub of Atlanta hip-hop and rap music. The song sampled a synthesizer line from the 1980 Italo disco hit "I'm Ready" by Kano. Glenn played the track in the club on the same day it was mixed and received a positive reaction from the audience. In the following months, people requested the song so often that it became clear the song had the potential to become a hit. The single was shopped to and rejected by multiple record labels because executives were unfamiliar with southern bass and were unsure if the sound would sell well around the country. Glenn instead borrowed $2,500 from his parents to press eight hundred records. The singles quickly sold out in Atlanta on word of mouth alone.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Tag_Team_-_Whoomp%21_%28There_It_Is%29.jpg/220px-Tag_Team_-_Whoomp%21_%28There_It_Is%29.jpg",
      "spotify_key": "3oWXoSkjdbTlQlteizN7Hb"
  
  },
  {
    "song_name": "I Wish",
    "artist": "Skee-Lo",
      "genre": "Alternative Hip Hop",
      "moods": ["smooth", "saucy", "funky"],
      "release_date": "April 10, 1995",
      "decade": "Nineties",
  "bio": `The song's lyrics are self-deprecating, with Skee-Lo lamenting a variety of personal shortcomings that he says are to blame for his unsuccessful love life. He wishes he were of taller stature ("like 6'9") and a basketball player ("a baller"). He wishes for a better car, specifically a '64 Impala, instead of his 1974 Ford Pinto with "an 8-Track and a spare tire in the backseat, but that's flat!" The lyrics also mention the Los Angeles neighborhood of Crenshaw, and a signpost featuring the street name appears in the background of the music video. Additionally, the song references Buffalo Springfield's "For What It's Worth" in the lyrics "Hey, you, what's that sound?/ Everybody look what's going down".`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Skee-Lo_I_Wish.jpg/220px-Skee-Lo_I_Wish.jpg",
      "spotify_key": "3LklW07tvdx2AHsgfi1Mng"
  },
  {
    "song_name": "Possum Kingdom",
    "artist": "Toadies",
      "genre": "Grunge",
      "moods": ["heavy"],
      "release_date": "August 30, 1994",
      "decade": "Nineties",
      "bio": `"Possum Kingdom" is a song by American alternative rock band Toadies released as the second single from their 1994 album, Rubberneck.
  The song's origins lie in folklore from the band's native state of Texas. Possum Kingdom Lake is a lake in North Texas near Fort Worth. In the documentary "Dark Secrets: The Stories of Rubberneck", Lewis further elaborates that he intended "Possum Kingdom" to be a continuation of the story told in the song "I Burn". While he envisioned "I Burn" to be a story about cult members immolating themselves in order to ascend to a higher plane, "Possum Kingdom" was about one of the immolated people becoming "just smoke, and ...he goes to Possum Kingdom [Lake] and tries to find somebody to join him."`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Possum_Kingdom.jpg/220px-Possum_Kingdom.jpg",
      "spotify_key": "56SkdBKyR2zOkjk6wVFI9s"
  },
  {
    "song_name": "Flagpole Sitta",
    "artist": "Harvey Danger",
      "genre": "Alternative Rock",
      "moods": ["heavy", "upbeat"],
      "release_date": "April 27, 1998",
      "decade": "Nineties",
      "bio": `The title of the song was inspired by the 1930 Marx Brothers film Animal Crackers, which features a line of dialogue about the pole sitting fad of the 1920s.[2] The band was inspired to spell     "sitter" as "sitta" by the Pavement song "Fame Throwa" and the N.W.A album Straight Outta Compton.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Flagpole_Sitta.jpg/220px-Flagpole_Sitta.jpg",
      "spotify_key": "7cz70nyRXlCJOE85whEkgU"
  },
  {
    "song_name": "Sex and Candy",
    "artist": "Marcy Playground",
      "genre": "Post-Grunge",
      "moods": ["chill", "saucy"],
      "release_date": "September 15, 1997",
      "decade": "Nineties",
      "bio": `Lead singer John Wozniak was inspired to write the song after a woman told him that a room smelled like "sex and candy." The song's abstract lyrics reference the disco era and include hippie lingo. In 1997, Wozniak said that "Sex and Candy" is an unorthodox love song; later, he said he does not know what the song means. It was released to radio on the week of September 15, 1997.
  Music critics mostly praised the song. Some found it sensual; many compared it to the music of Nirvana. Some critics interpreted the track as a love song, while others thought its lyrics were nonsensical.`,
      "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Scsingle.jpg/220px-Scsingle.jpg",
      "spotify_key": "5mkGfmJGFZpwK9nA5amOhv"
  },
  {
    "song_name": "Bad Day",
    "artist": "Daniel Powter",
      "genre": "Pop",
      "moods": ["sad", "smooth" ],
      "release_date": "January 9, 2005",
      "decade": "Aughts",
      "bio": `After a brief promo tour of the world, Daniel went back on hiatus and became a father. But what's he up to these days? Well, since 2015 he's been in the studio in Los Angeles working on brand new music. He even took a trip back to Vancouver to team up with Jeff Dawson for the first time since they collaborated on his self-titled album back in 2005 for the 'Bad Day' era`,
      "cover_image": "https://cps-static.rovicorp.com/3/JPG_500/MI0001/789/MI0001789894.jpg?partner=allrovi.com",
      "spotify_key": "0mUyMawtxj1CJ76kn9gIZK"
  },
  {
    "song_name": "Bleeding Love",
    "artist": "Leona Lewis",
      "genre": "Pop",
      "moods": ["sad", "smooth", "saucy" ],
      "release_date": "October 19, 2007",
      "decade": "Aughts",
      "bio": `Most recently, Leona Lewis appeared in six episodes of The Oath in February 2019 and then performed at The Power of Love Gala in March.
  And in June 2018 she took to the stage alongside Chaka Khan at the Butterfly Ball.Leona hasn't released a studio album since I Am in 2015, which reached the top 40 internationally including in the US, Spain and Germany as well as the UK.`,
      "cover_image": "https://3.bp.blogspot.com/-ffTyCqr9LTE/TesS6fnMqbI/AAAAAAAAANM/_Prh8FhkIGg/s1600/LLBL.jpg",
      "spotify_key": "7wZUrN8oemZfsEd1CGkbXE"
  },
  
  {
    "song_name": "Stacy`s Mom",
    "artist": "Fountains of Wayne",
      "genre": "Power pop",
      "moods": ["saucy", "upbeat"],
      "release_date": "May 19, 2003",
      "decade": "Aughts",
      "bio": `Adam Schlesinger died of complications from COVID-19 on April 1, 2020. The surviving members of Fountains of Wayne performed together for the first time since 2013 on April 22, 2020, as part of a charity livestream event to raise funding for the New Jersey Pandemic Relief Fund. The performance was a tribute to Schlesinger, and featured Sharon Van Etten taking his place on bass guitar.`,
      "cover_image": "http://images.eil.com/large_image/FOUNTAINS_OF_WAYNE_STACYS%2BMOM-276400.jpg",
      "spotify_key": "27L8sESb3KR79asDUBu8nW"
  },
  {
    "song_name": "Who Let the Dogs Out",
    "artist": "Baha Men",
      "genre": "Miami Bass",
      "moods": ["saucy", "upbeat", "funky"],
      "release_date": "July 26, 2000",
      "decade": "Aughts",
      "bio": `Baha Men are still playing “Who Let The Dogs Out.” However, fans might be disappointed to know that the rap verses are no longer rapped by blond-haired Marvin Prosper. Leroy Butler, who now does the rap section, “sings what he thinks it is,” bandleader Isaiah told VICE in an interview earlier in 2015. It seems like the rap verse, as well as the answer to who actually let the dogs out, might stay lost in the over-saturated haze of late-90s banality.`,
      "cover_image": "https://i.discogs.com/umF_qrKsmleDmQs4b9UPVAn4ixeJU6Gt-8BXPTZSdpQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4OTE0/My0xMzk3OTk4MDEx/LTIzOTcuanBlZw.jpeg",
      "spotify_key": "1H5tvpoApNDxvxDexoaAUo"
  },
  
  {
    "song_name": "Beautiful Girls",
    "artist": "Sean Kingston",
      "genre": `Doo-wop`,
      "moods": ["saucy", "upbeat", "chill" ],
      "release_date": "May 26, 2007",
      "decade": "Aughts",
      "bio": `According to Urban Islandz, on Nov. 5, 2021, Kingston allegedly punched a video director and pulled a gun on him inside Kingston’s home in Los Angeles. Apparently, the video director, who goes by the Instagram handle GXDLIKE, had been staying in Kingstons home for three months to film video footage. He claims that on Nov. 5 of last year, Kingston asked him to shoot some footage in the home around 2am. However, the director said that his phone was dead at the time, leading the singer to become enraged and punch him in the face. Afterward, Kingston allegedly pulled his firearm on him while demanding that he collect his things and leave the house.`,
      "cover_image": "https://i0.wp.com/newscentral.africa/wp-content/uploads/Sean-Kingstons-%E2%80%98Beautiful-Girls-Hits-1-Billion-Youtube-Views-News-Central-TV.jpg?resize=686%2C514&is-pending-load=1#038;ssl=1",
      "spotify_key": "1hGy2eLcmC8eKx7qr1tOqx"
  },
  {
    "song_name": "I`m A New Soul",
    "artist": "Yael Naim",
      "genre": "Indie folk",
      "moods": ["chill", "smooth", "sad" ],
      "release_date": "February 15, 2008",
      "decade": "Aughts",
      "bio": `Naim became a global sensation when Apple used her song “New Soul” for its 2008 Macbook Air commercials.In 2016, she won her second Female "artist" of the Year award at Victoires de la Musique, the French equivalent of the Grammys. She previously won the award in 2011. She is married to David Donatien [fr], a Martiniquais musician, with whom she has two children.`,
      "cover_image": "https://images.genius.com/1c42d934712415148c88eac280c473b1.618x618x1.jpg",
      "spotify_key": "476JcJ3TpAuCOlGdCmomGm"
  },
  
  {
    "song_name": "Wherever You Will Go",
    "artist": "The Calling",
      "genre": "Post-grunge",
      "moods": ["chill", "upbeat" ],
      "release_date": "May 22, 2001",
      "decade": "Aughts",
      "bio": `The groups lead singer, Alex Band, was faced with a Parkinson’s diagnosis and a near-fatal kidnapping. And while The Calling has been revitalized with a new lineup, it hasn’t been without more drama: Band and his estranged Calling co-founder, guitarist Aaron Kamin, have filed lawsuits against each other.`,
      "cover_image": "https://i.discogs.com/zXhXnFz4AYz6-pLFm1Ah6LS-GRGikfvMykkB0WeghdQ/rs:fit/g:sm/q:90/h:525/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODAz/MDcwLTE1MjU5Mzc1/NzMtNjg5OS5qcGVn.jpeg",
      "spotify_key": "5QpaGzWp0hwB5faV8dkbAz"
  },
  {
    "song_name": "Teenage Dirtbag",
    "artist": "Wheatus",
      "genre": "Pop rock",
      "moods": [`saucy`, `upbeat`],
      "release_date": "June 20, 2000",
      "decade": "Aughts",
      "bio": `Due to disagreements with their record label, primarily caused by Brendan Brown’s insistence on self-producing the album (as he had done with their debut), Wheatus’ second album “Hand over your loved ones”, received little or no promotion and did not sell well, with the single “American in Amsterdam” failing to significantly impact the music charts.`,
      "cover_image": "https://i.discogs.com/Y2BKhCIdxTMpUqzzL-4SowJ2ZzouXNqNRxlArS3_0fw/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4NTcz/MTktMTUzMjkxMDE1/Ni0zMDUwLmpwZWc.jpeg",
      "spotify_key": "3LI4MmibTkXH5cGpCGZgyw"
  },
  
  {
    "song_name": "Laffy Taffy",
    "artist": "D4L",
      "genre": "Snap",
      "moods": ["saucy", "smooth"],
      "release_date": "October 18, 2005",
      "decade": "Aughts",
      "bio": `Fabo, now known as 2$ Fabo continues to perform as a solo "artist" and in recent years has not only performed for fans, but he’s also performed at military bases for serving military personnel in Iraq, Japan and Germany. Stoney has kept a low profile since the D4L days, but still catches up with Fabo and Mook-B for the occasional BBQ or card game, and as for Mook-B, he’s still promoting Hip-hop music and new styles at the internet radio station ‘Nuradio Station’, based in the place where it all started, Atlanta Georgia, which thanks to D4L, will always be known as the home of Snap Music.`,
      "cover_image": "https://cps-static.rovicorp.com/3/JPG_400/MI0002/114/MI0002114369.jpg?partner=allrovi.com",
      "spotify_key": "2ajhenDRiiAnCHHjsIOHhJ"
  },
  
  {
    "song_name": "You're Beautiful",
    "artist": "James Blunt",
      "genre": "Pop rock",
      "moods": ["smooth", "chill"],
      "release_date": "May 30, 2005",
      "decade": "Aughts",
      "bio": `James Blunt was never a public person. He only expresses himself through his music as an "artist" should. Blunt is alive and still making music.
  What ever happened to James Blunt? Absolutely nothing happened to James Blunt. America simply forgot about him.`,
      "cover_image": "http://images.eil.com/large_image/JAMES_BLUNT_YOURE+BEAUTIFUL-542825.jpg",
      "spotify_key": "0vg4WnUWvze6pBOJDTq99k"
  },
  
  {
    "song_name": `Somebody That I Used To Know`,
    "artist": `Gotye`,
      "genre": `Art pop`,
      "moods": [`sad`, `chill`],
      "release_date": `July 5,  2011`,
      "decade": "Tens",
      "bio":  `Pretty much the ultimate 2010s One Hit Wonder, Australians Wally De Backer (Gotye) has failed to follow-up the worldwide success of his heartfelt hit. New Zealand singer Kimbra, who also appears on the record, has mainly kept herself to the Southern hemisphere.`,
      "cover_image": `https://4.bp.blogspot.com/-ApIbk3t_-Ho/T07wtGyTXVI/AAAAAAAABwQ/AWJjth6tvwg/w1200-h630-p-k-no-nu/gotye_somebody_that_i_used_to_know_.jpg`,
      "spotify_key": `4wCmqSrbyCgxEXROQE6vtV`
  },
  {
    "song_name": `Ex's And Oh's`,
    "artist": `Elle King`,
      "genre": `Pop rock`,
      "moods": [`saucy`, `upbeat`],
      "release_date": `September 23, 2014`,
      "decade": "Tens",
      "bio": `Tanner Elle Schneider is the daughter of comedian Rob Schneider and had a smash in January 2016 with this swaggering tune. She released a second album, Shake The Spirit, in 2018 but it didn't do much in the UK charts.`,
      "cover_image": "https://i.discogs.com/uKeqWfJ_p66tTe2zWTgNTwBJ7rrPwHmFdpqHPxLuJy0/rs:fit/g:sm/q:90/h:512/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwMTc5/NzMtMTQ1MzU3MTgw/Mi04ODY0LmpwZWc.jpeg",
      "spotify_key": `70eDxAyAraNTiD6lx2ZEnH`
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
  },
  {
    "song_name": `Little Talks`,
    "artist": `Of Monsters And Men`,
      "genre": `indie-Pop`,
      "moods": [`upbeat` ],
      "release_date": `December 20, 2011`,
      "decade": "Tens",
      "bio": `While it seems Of Monsters and Men aren't being too active in the music world, fans are still able to get updates from the band on social media. The group uses both their Instagram and Twitter to communicate with fans. The most recent post on their Instagram, as of right now, shows the band once again working hard in the studio and giving fans that much more hope for some new music`,
      "cover_image": "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fBHLfAEV/SharedImage-58281.jpg?t=d254b14683fe35f15f11",
      "spotify_key": "2ihCaVdNZmnHZWt0fvAM7B"
      },
  {
    "song_name": "Sail",
    "artist": "AWOLNation",
      "genre": "Electronic rock",
      "moods": ["upbeat", "heavy" ],
      "release_date": "November 8, 2010",
      "decade": "Tens",
      "bio": `This quirky tune made the Top 20 a year after its initial release in 2010. But while Aaron Bruno has released two more albums in the 2010s, they've not made any major impression.`,
      "cover_image": "https://i1.sndcdn.com/artworks-000009695417-cuaks5-t500x500.jpg",
      "spotify_key": "7ueP5u2qkdZbIPN2YA6LR0"
  },
  {
    "song_name": "Cheerleader",
    "artist": "Omi",
      "genre": "Reggae fusion",
      "moods": ["chill", "saucy", "Upbeat" ],
      "release_date": "September 2, 2012. But more known remix was released sometime in 2014",
      "decade": "Tens",
      "bio": `"Me 4 U," the debut LP by “Cheerleader” singer Omi, is out today. Omi: Where is he now? Eventually, Patrick Moxey, the president of Ultra Records, heard it on a mixtape made by his radio promoter, so he signed Omi and commissioned a remix by German DJ Felix Jaehn.`,
      "cover_image": "http://new-transcendence.com/wp-content/uploads/2015/10/OMI-Me-4-U-2015-US-Edition-1400x1400.png",
      "spotify_key": "023OVLNzXhX0j7CxswUt6D"
  },
  {
    "song_name": "Shut Up and Dance",
    "artist": "Walk the Moon",
      "genre": "Pop Rock",
      "moods": [ "saucy", "upbeat"],
      "release_date": "September 10, 2014",
      "decade": "Tens",
      "bio": `Walk The Moon's Nicholas Petricca said Monday the band is “moving into a new chapter” without bassist Kevin Ray. “We've received some firsthand information that leads us to conclude that Kevin Ray has acted out of alignment with our values it's become clear that we must part ways.”`,
      "cover_image": "https://i.pinimg.com/originals/83/d7/a6/83d7a644c36e05230dd142a233d96cf7.jpg",
      "spotify_key": "4kbj5MwxO1bq9wjT5g9HaA"
  },
  {
    "song_name": "Rude",
    "artist": "Magic!",
      "genre": "Reggae fusion",
      "moods": ["funky", "saucy"],
      "release_date": "October 11, 2013",
      "decade": "Tens",
      "bio": `The song was Magic!'s debut single and describes an eager young man's failed attempts to ask his girlfriend's father's blessing so they can marry. When Dad flatly declines, the rejected suitor tells him he'll marry the daughter anyway. Although Magic! released some successful singles on the Canadian charts, "Rude" is their only Top 40 song on the Billboard Hot 100.`,
      "cover_image": "https://s.mxmcdn.net/images-storage/albums/8/4/9/1/7/7/30771948_800_800.jpg",
      "spotify_key": "6RtPijgfPKROxEzTHNRiDp"
  },
  {
    "song_name": "What Does the Fox Say",
    "artist": "Ylvis",
      "genre": "EDM",
      "moods": ['saucy', 'upbeat', 'funky'],
      "release_date": "September 3, 2013",
      "decade": "Tens",
      "bio": `On heels of "The Fox" success, they performed on "The Ellen DeGeneres Show marking their first ever show Stateside. They also made a surprise appearance at the iHeartRadio Music Festival in Las Vegas and made a live performance on Jimmy Fallon's late night show. Besides that, they have not made any recent debuts since January 2022, after the participants for Melodi Grand Prix 2022 were revealed. They have been one of the duos rumoured to be behind Subwoolfer, who won the contest and represented Norway in the Eurovision Song Contest 2022`,
      "cover_image": `https://images.genius.com/e3e086bfec1e253322e8a4ef1e031b33.1000x1000x1.jpg`,
      "spotify_key": `5HOpkTTVcmZHnthgyxrIL8`
  },
  {
    "song_name": `Harlem Shake`,
    "artist": `Baauer`,
      "genre": `Hip hop`,
      "moods": [`saucy`, `upbeat`, `funky`],
      "release_date": `May 22, 2012`,
      "decade": "Tens",
      "bio": `In 2019 he featured on two songs on Rico Nasty's Anger Management mixtape, alongside the Atlanta hip hop duo Earth Gang. The tracks were co-produced by Kenny Beats. Baauer's music was also   featured in numerous campaigns and video games this year, including FIFA 20 and with an original song for Grand Theft Auto Online alongside Danny Brown and Channel Tres. Baauer's track "GoGo!" was used in a 2018 trailer for the League of Legends European Championship. His track "3AM" was later featured as theme music on KSI's YouTube.`,
      "cover_image": `https://hiphop-n-more.com/wp-content/uploads/2013/02/Baauer-Harlem-Shake.jpg`,
      "spotify_key": "01XFgRZfZI7oBagNf1Loml"
      }
  ].map(song => {
  song.moods = JSON.stringify(song.moods)
  return song
  }));
};
