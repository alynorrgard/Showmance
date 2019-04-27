const showsDummyData = [
  {
    name: 'Breaking Bad',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    genre: 'Drama',
    seasons: 5,
    viewingMethod: ['Netflix', 'Amazon Prime'],
  },
  {
    name: 'Friends',
    imageUrl:
      'https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/03/SEC_57544369.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1',
    genre: 'Sitcom',
    seasons: 10,
    viewingMethod: ['Netflix', 'Amazon Prime'],
  },
  {
    name: 'The Office',
    imageUrl:
      'https://www.nbc.com/sites/nbcunbc/files/files/images/2016/1/19/MDot-TheOffice-640x360-MP.jpg',
    genre: 'Sitcom',
    seasons: 9,
    viewingMethod: ['Netflix', 'Amazon Prime'],
  },
  {
    name: 'The Americans',
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/TaDOfHmeehngjh6K67a4l8_o_q0=/129x0:1074x709/1200x675/filters:focal(129x0:1074x709)/cdn.vox-cdn.com/uploads/chorus_image/image/49496897/americans.0.png',
    genre: 'Thriller',
    seasons: 9,
    viewingMethod: ['Amazon Prime'],
  },
  {
    name: '24',
    imageUrl:
      'https://www.24spoilers.com/wp-content/uploads/2010/09/24-Complete-Series-Box-Art-800x450.jpg',
    genre: 'Drama',
    seasons: 9,
    viewingMethod: ['Hulu', 'Amazon Prime'],
  },
  {
    name: 'Entourage',
    imageUrl:
      'https://static.next-episode.net/tv-shows-images/huge/entourage.jpg',
    genre: 'Comedy',
    seasons: 8,
    viewingMethod: ['Amazon Prime', 'HBO Now'],
  },
  {
    name: 'Anthony Bourdain: Parts Unknown',
    imageUrl:
      'https://i.pinimg.com/originals/39/bf/33/39bf3392d9ebbde7c25d69a98aa812f2.jpg',
    genre: 'Documentary',
    seasons: 5,
    viewingMethod: ['Amazon Prime', 'Netflix'],
  },
  {
    name: 'Vanderpump Rules',
    imageUrl:
      'https://bravo-video.nbcuni.com/image/NBCU_Bravo/835/239/181128_3837039_Your_First_Look_At_the_Vanderpump_Rules_Seas.jpg',
    genre: 'Reality',
    seasons: 6,
    viewingMethod: ['Amazon Prime', 'Hulu'],
  },
  {
    name: 'The Voice',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/27/TheVoiceTitleCard.png',
    genre: 'Reality',
    seasons: 16,
    viewingMethod: ['NBC', 'Hulu'],
  },
  {
    name: 'Game of Thrones',
    imageUrl:
      'https://img.huffingtonpost.com/asset/5c77fadb260000f903fde279.jpeg?cache=oav6hctmoq&ops=crop_0_263_1196_650,scalefit_720_noupscale',
    genre: 'Drama',
    seasons: 7,
    viewingMethod: ['HBO Now', 'Amazon Prime'],
  },
];

const tagsDummyData = [
  {
    name: 'chill',
    similar: ['relax'],
  },
  {
    name: 'happy',
    similar: ['feel good', 'good vibes'],
  },
  {
    name: 'sad',
    similar: [],
  },
  {
    name: 'drama',
    similar: [],
  },
  {
    name: 'funny',
    similar: [],
  },
  {
    name: 'action',
    similar: [],
  },
  {
    name: 'comedic relief',
    similar: [],
  },
  {
    name: 'sitcom',
    similar: [],
  },
  {
    name: 'reality',
    similar: [],
  },
  {
    name: 'competition',
    similar: [],
  },
  {
    name: 'relax',
    similar: ['chill'],
  },
  {
    name: 'violent',
    similar: [],
  },
  {
    name: 'horror',
    similar: [],
  },
  {
    name: 'crime',
    similar: [],
  },
  {
    name: 'feel good',
    similar: ['happy', 'good vibes'],
  },
  {
    name: 'motivational',
    similar: [],
  },
  {
    name: 'upbeat',
    similar: [],
  },
  {
    name: 'romance',
    similar: [],
  },
  {
    name: 'serious',
    similar: [],
  },
  {
    name: 'light',
    similar: [],
  },
  {
    name: 'good vibes',
    similar: ['happy', 'feel good'],
  },
  {
    name: 'background noise',
    similar: [],
  },
  {
    name: 'epic',
    similar: [],
  },
  {
    name: 'fantasy',
    similar: [],
  },
  {
    name: 'cartoon',
    similar: [],
  },
  {
    name: 'adult',
    similar: [],
  },
  {
    name: 'game show',
    similar: [],
  },
  {
    name: 'DIY',
    similar: [],
  },
  {
    name: 'food',
    similar: [],
  },
  {
    name: 'sport',
    similar: [],
  },
  {
    name: 'historic',
    similar: ['time period'],
  },
  {
    name: 'time period',
    similar: ['historic'],
  },
  {
    name: 'music',
    similar: [],
  },
  {
    name: 'dance',
    similar: [],
  },
  {
    name: 'biographical',
    similar: [],
  },
  {
    name: 'travel',
    similar: [],
  },
];

module.exports = { showsDummyData, tagsDummyData };
