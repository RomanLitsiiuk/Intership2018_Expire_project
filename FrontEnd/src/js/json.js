const jsonObject = {
  posts: [
    {
      post: 'post1',
      title: 'Coffee is good, coffee is great',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Officiis at,' +
        'voluptatem similique tem pora voluptate quia in ea minima earum con sequatur' +
      'eveniet, praesentium illum error de lectus optio',
      imageLink: '../img/coffee.jpg',
      imageName: 'coffee',
      label: 'ti-image',
      text: {
        field1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        'Neque veniam in nobis nulla, excepturi necessitatibus maxime sapiente' +
        'laborum, rerum asperiores ipsa similique quos, deserunt beatae aliquam' +
        'maiores alias sed dolorum? Rerum recusandae culpa nobis ipsa dolores' +
        'consequatur voluptate. Est commodi amet dolores atque autem sapiente' +
        'quidem numquam assumenda. Veritatis corrupti minima omnis nobis quos,' +
        'repellat sed voluptate facere, nisi eum labore, dolor quam autem quisquam' +
        'hic, quasi placeat doloribus laudantium.',
        field2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        'Nequeveniam in nobis nulla, excepturi neces sitatibus maximesapiente' +
        'laborum, rerum asperiores ipsa similique quos, deserunt beatae aliquammaiores' +
        ' alias sed dolorum? Rerum recusandae culpa nobis ipsa dolores consequatur ' +
        'voluptate. Est commodi amet dolores atque autem sapiente quidem numquam ' +
        'assumenda.',
        field3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque' +
        'veniam in nobis nulla, excepturi neces sitatibus maxime sapiente laborum,' +
        'rerum asperiores ipsa similique quos, deserunt beatae aliquam maiores alias' +
        'sed dolorum? Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
        'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
        'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere.',
        blockquote: 'We are not simply in the universe, we are part of it. We are' +
        'born from it. One might even say we have been empowered by the universe to' +
        'figure itself out — and we have only just begun.',
        field4: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
        'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
        'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere...'
      },
      author: 'By Author',
      comments: [
        {
          author: 'Sandra Rickon',
          gender: 'woman',
          photo: '../img/icon1.jpg',
          feedback: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
          'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
          'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere...',
          comments: [
            {
              author: 'John Deer',
              gender: 'man',
              photo: '../img/icon2.jpg',
              comment: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
              'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.'
            }
          ]
        },
        {
          author: 'Rita Rider',
          gender: 'woman',
          photo: '../img/icon3.jpg',
          feedback: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
          'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
          'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere...'
        }
      ],
      date: {
        year: '2014',
        month: 'November',
        day: '09'
      }
    },
    {
      post: 'post2',
      title: 'Blog Post With Youtube video',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Officiis at,' +
      'voluptatem similique tem pora voluptate quia in ea minima earum con sequatur' +
      'eveniet, praesentium illum error de lectus optio',
      text: {
        field1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Neque veniam in nobis nulla, excepturi necessitatibus maxime sapiente' +
        'laborum, rerum asperiores ipsa similique quos, deserunt beatae aliquam' +
        'maiores alias sed dolorum? Rerum recusandae culpa nobis ipsa dolores' +
        'consequatur voluptate. Est commodi amet dolores atque autem sapiente' +
        'quidem numquam assumenda. Veritatis corrupti minima omnis nobis quos,' +
        'repellat sed voluptate facere, nisi eum labore, dolor quam autem quisquam' +
        'hic, quasi placeat doloribus laudantium.',
        blockquote: 'We are not simply in the universe, we are part of it. We are' +
        'born from it. One might even say we have been empowered by the universe to' +
        'figure itself out — and we have only just begun.',
        field4: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
        'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
        'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere...'
      },
      imageLink: '../img/Mustang.jpg',
      imageName: 'car',
      label: 'ti-video-clapper',
      author: 'By Author',
      comments: [
        {
          author: 'Sandra Rickon',
          gender: 'woman',
          photo: '../img/icon1.jpg',
          feedback: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
          'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
          'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere...'
        }
      ],
      date: {
        year: '2014',
        month: 'December',
        day: '29'
      }
    },
    {
      post: 'post3',
      title: 'Just a post, a simple post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Officiis' +
      'at, voluptatem similique tem pora voluptate quia in ea minima earum con ' +
      'sequatur eveniet, praesentium illum error de lectus optio nobis eaque ' +
      'distinctio! Suscipit nostrum?',
      text: {
        field1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Neque veniam in nobis nulla, excepturi necessitatibus maxime sapiente' +
        'laborum, rerum asperiores ipsa similique quos, deserunt beatae aliquam' +
        'maiores alias sed dolorum? Rerum recusandae culpa nobis ipsa dolores' +
        'consequatur voluptate. Est commodi amet dolores atque autem sapiente' +
        'quidem numquam assumenda. Veritatis corrupti minima omnis nobis quos,' +
        'repellat sed voluptate facere, nisi eum labore, dolor quam autem quisquam' +
        'hic, quasi placeat doloribus laudantium.',
        blockquote: 'We are not simply in the universe, we are part of it. We are' +
        'born from it. One might even say we have been empowered by the universe to' +
        'figure itself out — and we have only just begun.',
      },
      label: 'ti-comment',
      author: 'By Author',
      comments: [
        {
          author: 'Rita Rider',
          gender: 'woman',
          photo: '../img/icon3.jpg',
          feedback: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
          'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
          'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere...'
        }
      ],
      date: {
        year: '2014',
        month: 'July',
        day: '17'
      }
    },
    {
      post: 'post4',
      title: 'This Could be Great',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Officiis' +
      'at, voluptatem similique tem pora voluptate quia in ea minima earum con ' +
      'sequatur eveniet, praesentium illum error de lectus optio nobis eaque ' +
      'distinctio! Suscipit nostrum?',
      text: {
        field1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Neque veniam in nobis nulla, excepturi necessitatibus maxime sapiente' +
        'laborum, rerum asperiores ipsa similique quos, deserunt beatae aliquam' +
        'maiores alias sed dolorum? Rerum recusandae culpa nobis ipsa dolores' +
        'consequatur voluptate. Est commodi amet dolores atque autem sapiente' +
        'quidem numquam assumenda. Veritatis corrupti minima omnis nobis quos,' +
        'repellat sed voluptate facere, nisi eum labore, dolor quam autem quisquam' +
        'hic, quasi placeat doloribus laudantium.',
        field2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        'Nequeveniam in nobis nulla, excepturi neces sitatibus maximesapiente' +
        'laborum, rerum asperiores ipsa similique quos, deserunt beatae aliquammaiores' +
        ' alias sed dolorum? Rerum recusandae culpa nobis ipsa dolores consequatur ' +
        'voluptate. Est commodi amet dolores atque autem sapiente quidem numquam ' +
        'assumenda.',
        field3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque' +
        'veniam in nobis nulla, excepturi neces sitatibus maxime sapiente laborum,' +
        'rerum asperiores ipsa similique quos, deserunt beatae aliquam maiores alias' +
        'sed dolorum? Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
        'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
        'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere.'
      },
      imageLink: '../img/girl.jpg',
      imageName: 'girl',
      label: 'ti-music-alt',
      author: 'By Author',
      comments: [],
      date: {
        year: '2014',
        month: 'June',
        day: '10'
      }
    },
    {
      post: 'post5',
      title: 'Just Another Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Officiis' +
      'at, voluptatem similique tem pora voluptate quia in ea minima earum con ' +
      'sequatur eveniet, praesentium illum error de lectus optio nobis eaque ' +
      'distinctio! Suscipit nostrum?',
      text: {
        field1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        'Neque veniam in nobis nulla, excepturi necessitatibus maxime sapiente' +
        'laborum, rerum asperiores ipsa similique quos, deserunt beatae aliquam' +
        'maiores alias sed dolorum? Rerum recusandae culpa nobis ipsa dolores' +
        'consequatur voluptate. Est commodi amet dolores atque autem sapiente' +
        'quidem numquam assumenda. Veritatis corrupti minima omnis nobis quos,' +
        'repellat sed voluptate facere, nisi eum labore, dolor quam autem quisquam' +
        'hic, quasi placeat doloribus laudantium.',
        field3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque' +
        'veniam in nobis nulla, excepturi neces sitatibus maxime sapiente laborum,' +
        'rerum asperiores ipsa similique quos, deserunt beatae aliquam maiores alias' +
        'sed dolorum? Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
        'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
        'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere.',
        blockquote: 'We are not simply in the universe, we are part of it. We are' +
        'born from it. One might even say we have been empowered by the universe to' +
        'figure itself out — and we have only just begun.',
      },
      imageLink: '../img/mayak.jpg',
      imageName: 'lighthouse',
      label: 'ti-image',
      author: 'By Author',
      comments: [
        {
          author: 'Sandra Rickon',
          gender: 'woman',
          photo: '../img/icon1.jpg',
          feedback: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
          'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
          'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere...',
          comments: [
            {
              author: 'John Deer',
              gender: 'man',
              photo: '../img/icon2.jpg',
              comment: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
              'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.'
            }
          ]
        },
        {
          author: 'Rita Rider',
          gender: 'woman',
          photo: '../img/icon3.jpg',
          feedback: 'Rerum recusandae culpa nobis ipsa dolores consequatur voluptate.' +
          'Est commodi amet dolores atque autem sapiente quidem numquam assumenda.' +
          'Veritatis corrupti minima omnis nobis quos, repellat sed voluptate facere...'
        }
      ],
      date: {
        year: '2014',
        month: 'November',
        day: '09'
      }
    }
  ],
  socialNetworks: [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/',
      icon: 'ti-facebook'
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/',
      icon: 'ti-linkedin'
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/',
      icon: 'ti-twitter'
    },
    {
      name: 'google',
      link: 'https://www.google.com/',
      icon: 'ti-google'
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/',
      icon: 'ti-instagram'
    }
  ],
  slider: [
    {
      slide: 'slide1',
      imageLink: '../img/Mustang1.jpg',
      imageName: 'mustang'
    },
    {
      slide: 'slide2',
      imageLink: '../img/girl1.jpg',
      imageName: 'girl'
    }
  ],
  categories: [
    {
      category: 'Tales of a different kind',
      link: '#'
    },
    {
      category: 'In the middle of a scary story',
      link: '#'
    },
    {
      category: 'Lyrics in line',
      link: '#'
    },
    {
      category: 'Water and glass',
      link: '#'
    }
  ],
  tags: [
    {
      tagName: 'love',
      link: '#'
    },
    {
      tagName: 'signs',
      link: '#'
    },
    {
      tagName: 'waterfall',
      link: '#'
    },
    {
      tagName: 'inspiration',
      link: '#'
    },
    {
      tagName: 'quotes',
      link: '#'
    },
    {
      tagName: 'sea',
      link: '#'
    },
    {
      tagName: 'sense',
      link: '#'
    },
    {
      tagName: 'coffee',
      link: '#'
    },
    {
      tagName: 'images',
      link: '#'
    },
    {
      tagName: 'gold',
      link: '#'
    },
    {
      tagName: 'dancing',
      link: '#'
    },
    {
      tagName: 'courage',
      link: '#'
    }
  ],
  recentPosts: [
    {
      title: 'Blog Post With Youtube video',
      date: '29 November 2014',
      imageLink: '../img/Mustang1.jpg',
      imageName: 'mustang'
    },
    {
      title: 'This Could Be Great',
      date: '29 November 2014',
      imageLink: '../img/girl1.jpg',
      imageName: 'girl'
    }
  ],
  hashtags: [
    {
      name: 'twitter',
      title: 'Twitter feed',
      icon: 'ti-twitter-alt',
      text: 'Check out our new theme Expire on themeforest',
      linkName1: 'dingo_design',
      link1: '#',
      linkName2: '#themeforest #theme #Expire',
      link2: '#',
      linkName3: 'about 3 days ago',
      link3: '#'
    }
  ],
  headerSlider: [
    {
      name: 'Expire',
      title: 'Professionaly designed, carefully made for your enjoyement',
      button1: 'Explore',
      link1: '#',
      button2: 'Learn more',
      link2: '#'
    },
    {
      name: 'Expire2',
      title: 'Professionaly designed, carefully made for your enjoyement',
      button1: 'Explore2',
      link1: '#',
      button2: 'Learn more2',
      link2: '#'
    },
    {
      name: 'Expire3',
      title: 'Professionaly designed, carefully made for your enjoyement',
      button1: 'Explore3',
      link1: '#',
      button2: 'Learn more3',
      link2: '#'
    }
  ],
  aboutUs: [
    {
      symbol: 'ti-paragraph',
      title: 'Typography',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis' +
      'at, voluptatem similique tempora voluptate quia in ea minima earum consequatur' +
      'eveniet, praesentium illum error delectus optio nobis eaque'
    },
    {
      symbol: 'ti-vector',
      title: 'Full icon set',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis' +
      'at, voluptatem similique tempora voluptate quia in ea minima earum consequatur' +
      'eveniet, praesentium illum error delectus optio nobis eaque'
    },
    {
      symbol: 'ti-ruler-alt-2',
      title: 'Accurate',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis' +
      'at, voluptatem similique tempora voluptate quia in ea minima earum consequatur' +
      'eveniet, praesentium illum error delectus optio nobis eaque'
    }
  ],
  parallax: [
    {
      author: '— Erik Adigard',
      blockquote: 'Design is in everything we make, but it\'s also between those' +
      'things. It\'s a mix of craft, science, storytelling, propaganda, and philosophy.'
    }
  ],
  statistics: [
    {
      icon: 'ti-user',
      statistic: '1000+',
      name: 'Happy users'
    },
    {
      icon: 'ti-shopping-cart',
      statistic: '200',
      name: 'Solid products'
    },
    {
      icon: 'ti-comment',
      statistic: '5632',
      name: 'Comments'
    },
    {
      icon: 'ti-files',
      statistic: '25000+',
      name: 'Lines of code'
    }
  ],
  portfolio: [
    {
      imageLink: '../img/portfolio/1butterfly.jpg',
      imageName: 'butterfly',
      title: 'Amazing butterfly',
      category: 'Art, Photography, Butterfly',
      link: '#'
    },
    {
      imageLink: '../img/portfolio/2forest.jpg',
      imageName: 'forest',
      title: 'First snow',
      category: 'Art, Photography, Girl',
      link: '#'
    },
    {
      imageLink: '../img/portfolio/3earth.jpg',
      imageName: 'earth',
      title: 'The Earth',
      category: 'Art, Photography, Earth',
      link: '#'
    },
    {
      imageLink: '../img/portfolio/4pyramids.jpg',
      imageName: 'pyramids',
      title: 'Pyramids',
      category: 'Art, Photography, Pyramids',
      link: '#'
    },
    {
      imageLink: '../img/portfolio/5relax.jpg',
      imageName: 'relax',
      title: 'Relaxation place',
      category: 'Art, Photography, Hammock',
      link: '#'
    },
    {
      imageLink: '../img/portfolio/6lambo.jpg',
      imageName: 'lambo',
      title: 'Purple storm',
      category: 'Art, Photography, Lambo',
      link: '#'
    },
    {
      imageLink: '../img/portfolio/7water.jpg',
      imageName: 'water',
      title: 'Graceful girl',
      category: 'Art, Photography, Diving',
      link: '#'
    },
    {
      imageLink: '../img/portfolio/8ship.jpg',
      imageName: 'ship',
      title: 'British ship',
      category: 'Art, Photography, Ship',
      link: '#'
    }
  ],
  partners: [
    {
      logo: '../img/partners.png',
      link: '#',
      name: 'partner__logo--first'
    },
    {
      logo: '../img/partners.png',
      link: '#',
      name: 'partner__logo--second'
    },
    {
      logo: '../img/partners.png',
      link: '#',
      name: 'partner__logo--third'
    },
    {
      logo: '../img/partners.png',
      link: '#',
      name: 'partner__logo--fourth'
    },
    {
      logo: '../img/partners.png',
      link: '#',
      name: 'partner__logo--fifth'
    },
    {
      logo: '../img/partners.png',
      link: '#',
      name: 'partner__logo--sixth'
    }
  ],
  tabs: [
    {
      author: 'Astrid Jorgensen ',
      photo: '../img/icon1.jpg',
      gender: 'female',
      position: ' CEO at Runway inc.',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis at,' +
      'voluptatem similique tempora voluptate quia in ea minima earum consequatur'
    },
    {
      author: 'Cecil Singleton ',
      photo: '../img/icon2.jpg',
      gender: 'female',
      position: ' BE at Watermelon inc.',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis at,' +
      'voluptatem similique tempora voluptate quia in ea minima earum consequatur'
    },
    {
      author: 'Dorothy Johnston ',
      photo: '../img/icon3.jpg',
      gender: 'female',
      position: ' FE at SoftData inc.',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis at,' +
      'voluptatem similique tempora voluptate quia in ea minima earum consequatur'
    }
  ],
  accordion: [
    {
      tab: 'Expanded',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perferendis' +
      'voluptatum maiores quos sit unde labore sed ratione ut fugiat veniam, tempora, aliquam,' +
      'tenetur in vero. Suscipit quod deleniti dolor. Ex quo reiciendis consectetur magnam sed' +
      'neque aut pariatur, iusto harum impedit. Harum vitae asperiores expedita excepturi' +
      'deserunt eos aspernatur omnis. In, repudiandae aliquam assumenda. Qui consequatur' +
      'culpa, praesentium amet dolore dignissimos quam eum! Illum mollitia et maiores unde. Amet!'
    },
    {
      tab: 'Hovered',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perferendis' +
      'voluptatum maiores quos sit unde labore sed ratione ut fugiat veniam, tempora, aliquam,' +
      'tenetur in vero. Suscipit quod deleniti dolor. Ex quo reiciendis consectetur magnam sed' +
      'neque aut pariatur, iusto harum impedit. Harum vitae asperiores expedita excepturi' +
      'deserunt eos aspernatur omnis. In, repudiandae aliquam assumenda. Qui consequatur' +
      'culpa, praesentium amet dolore dignissimos quam eum! Illum mollitia et maiores unde. Amet!'
    },
    {
      tab: 'Inactive',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perferendis' +
      'voluptatum maiores quos sit unde labore sed ratione ut fugiat veniam, tempora, aliquam,' +
      'tenetur in vero. Suscipit quod deleniti dolor. Ex quo reiciendis consectetur magnam sed' +
      'neque aut pariatur, iusto harum impedit. Harum vitae asperiores expedita excepturi' +
      'deserunt eos aspernatur omnis. In, repudiandae aliquam assumenda. Qui consequatur' +
      'culpa, praesentium amet dolore dignissimos quam eum! Illum mollitia et maiores unde. Amet!'
    }
  ]
};

export default jsonObject;
