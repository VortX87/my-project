const movieData = [
    {
        movieid: '1',
        title: 'Full Metal Jacket',
        genre: 'Action',
        releasedate: '1987',
        synopsis: 'A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.',
        image: "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        movieid: '2',
        title: 'Fatel Attraction',
        genre: 'Thriller',
        releasedate: '1987',
        synopsis: "A married man's one-night stand comes back to haunt him when that lover begins to stalk him and his family.",
        image: 'https://m.media-amazon.com/images/I/91QXF7gVCOL._AC_SL1500_.jpg'
    },
    {
        movieid: '3',
        title: 'The Lost Boys',
        genre: 'Horror',
        releasedate: '1987',
        synopsis: "After moving to a new town, two brothers discover that the area is a haven for vampires.",
        image: 'https://m.media-amazon.com/images/I/51M8muTR+lL._AC_.jpg'
    },
    {
        movieid: '4',
        title: 'Dirty Dancing',
        genre: 'Romance',
        releasedate: '1987',
        synopsis: "Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle.",
        image: 'https://m.media-amazon.com/images/I/61O9M3x9N1L._AC_SY550_.jpg'
    },
    {
        movieid: '5',
        title: 'Die Hard',
        genre: 'Action',
        releasedate: '1988',
        synopsis: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
        image: 'https://m.media-amazon.com/images/I/71ag1lwtbGL._AC_SY741_.jpg'
    },
    {
        movieid: '6',
        title: 'Who framed Roger Rabbit?',
        genre: 'Comedy',
        releasedate: '1988',
        synopsis: "A toon-hating detective is a cartoon rabbit's only hope to prove his innocence when he is accused of murder.",
        image: 'https://m.media-amazon.com/images/I/81IUTgxFxwL._AC_SY679_.jpg'
    },
    {
        movieid: '7',
        title: 'Beetlejuice',
        genre: 'Fantasy',
        releasedate: '1988',
        synopsis: "The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out",
        image: 'https://m.media-amazon.com/images/I/71kUwEJq9QL._AC_SY606_.jpg'
    },
    {
        movieid: '8',
        title: 'Batman',
        genre: 'Action',
        releasedate: '1989',
        synopsis: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
        image: 'https://i.pinimg.com/736x/12/9e/8e/129e8edddf093d6386aa59e95fe1d777.jpg'
    },
    {
        movieid: '9',
        title: 'When Harry Met Sally..',
        genre: 'Romance',
        releasedate: '1989',
        synopsis: "Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.",
        image: 'https://m.media-amazon.com/images/I/51hsceP2n0L._AC_.jpg'
    },
    {
        movieid: '10',
        title: 'Dead Poets Society',
        genre: 'Comedy',
        releasedate: '1989',
        synopsis: "Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression.",
        image: 'https://m.media-amazon.com/images/I/91Vz8NECRvL._AC_SL1500_.jpg'
    },
    {
        movieid: '11',
        title: 'Total Recall',
        genre: 'Action',
        releasedate: '1990',
        synopsis: "When a man goes in to have virtual vacation memories of the planet Mars implanted in his mind, an unexpected and harrowing series of events forces him to go to the planet for real - or is he?",
        image: 'https://m.media-amazon.com/images/M/MV5BYzU1YmJjMGEtMjY4Yy00MTFlLWE3NTUtNzI3YjkwZTMxZjZmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_.jpg'
    },
    {
        movieid: '12',
        title: 'Edward Scissorhands',
        genre: 'Fantasy',
        releasedate: '1990',
        synopsis: "An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world.",
        image: 'https://m.media-amazon.com/images/I/81ZZQ0f71WL._AC_SY679_.jpg'
    },
    {
        movieid: '13',
        title: 'Ghost',
        genre: 'Romance',
        releasedate: '1990',
        synopsis: "After a young man is murdered, his spirit stays behind to warn his lover of impending danger, with the help of a reluctant psychic.",
        image: 'https://cdn.shopify.com/s/files/1/1416/8662/products/ghost_1990_original_film_art_2cc48497-c911-456d-873e-c90de476e0ee_1200x.jpg?v=1601918436'
    },
    {
        movieid: '14',
        title: 'Goodfellas',
        genre: 'Drama',
        releasedate: '1990',
        synopsis: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        image: 'https://m.media-amazon.com/images/I/71GnktS6qUS._AC_SY606_.jpg'
    },
    {
        movieid: '15',
        title: 'The Silence of the Lambs',
        genre: 'Thriller',
        releasedate: '1991',
        synopsis: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        image: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
    },
    {
        movieid: '16',
        title: 'Terminator 2: Judgement Day',
        genre: 'Action',
        releasedate: '1991',
        synopsis: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
        image: 'https://i.ebayimg.com/images/g/nPUAAOSwvx1bt3yD/s-l1600.jpg'
    },
    {
        movieid: '17',
        title: 'The Addams Family',
        genre: 'Fantasy',
        releasedate: '1991',
        synopsis: "An evil doctor finds out that Uncle Fester has been missing for 25 years and introduces a fake Fester in an attempt to get the Addams family fortune.",
        image: 'https://m.media-amazon.com/images/I/511Dcg4hwPL._AC_.jpg'
    },
    {
        movieid: '18',
        title: 'Reservoir Dogs',
        genre: 'Thriller',
        releasedate: '1992',
        synopsis: "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
        image: 'https://m.media-amazon.com/images/I/51Z9oiHZk+S._AC_.jpg'
    },
    {
        movieid: '19',
        title: 'Candyman',
        genre: 'Horror',
        releasedate: '1992',
        synopsis: "The Candyman, a murderous soul with a hook for a hand, is accidentally summoned to reality by a skeptic grad student researching the monster's myth.",
        image: 'https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    },
    {
        movieid: '20',
        title: 'Sister Act',
        genre: 'Comedy',
        releasedate: '1992',
        synopsis: "When a nightclub singer is forced to take refuge from the mob in a convent, she ends up turning the convent choir into a soulful chorus complete with a Motown repertoire, until the sudden celebrity of the choir jeopardizes her identity.",
        image: 'https://m.media-amazon.com/images/M/MV5BMTIxMzUxNDUzMV5BMl5BanBnXkFtZTYwNjk1NDA5._V1_.jpg'
    },
]

const userData = [
    {
        fullname: 'Ann Otheruser',
        username: 'Annotheruser',
        password: 'password1',
        email: 'auser@test.com'
    },
    {
        fullname: 'test user',
        username: 'testuser',
        password: 'password12',
        email: 'testuser@mytest.com'
    },
]

module.exports = {
    movieData,
    userData
}





















