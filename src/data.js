export const data = {
  en: {
    config: {
      name: 'Opan-Jessica',
      bgm: 'https://cdngarenanow-a.akamaihd.net/gstaticid/BMG/wildwet/sounds/love-song-3.mp3',
    },
    header: {
      bgImageLandscape: [require('./assets/images/bg1.jpg'), require('./assets/images/bg2.jpg')],
      bgImagePortrait: [require('./assets/images/bg1.jpg'), require('./assets/images/bg2.jpg')],
      bridegroom: 'Opan & Jessica',
      desc: 'ARE GETTING MARRIED',
      date: 'MARCH 09TH, 2024',
      timestamp: 1709990262000,
      ongoing: 'ONGOING',
      days: 'DAYS',
      hours: 'HOURS',
      minutes: 'MINUTES',
      seconds: 'SECONDS',
      line1: 'Kindly deliver to: Mr. / Mrs. / Ms.',
      line2: 'We invite you to celebrate our wedding',
      button: 'Open Invitation',
    },
    navbar: {
      brand: 'O & J',
      nav: [
        { to: 'header', text: 'Home' },
        { to: 'couple', text: 'Couple' },
        { to: 'events', text: 'Events' },
        { to: 'moment', text: 'Moment' },
        { to: 'gifts', text: 'Gifts' },
        { to: 'location', text: 'Location' },
      ],
    },
    couple: {
      title: 'Meet Happy Couple',
      groom: {
        name: 'HOT TIOPAN TAMPUBOLON',
        photo: 'https://i.postimg.cc/J7T77ThY/groom.png',
        status: 'GROOM',
        socmed: {
          facebook: '',
          twitter: '',
          instagram: 'https://www.instagram.com/opan.mo/',
        },
        description: 'The forth son of Efendi Tampubolon and Lasma Silitonga',
      },
      bride: {
        name: 'JESSICA BERLIANA',
        photo: 'https://i.postimg.cc/htmKrc1N/bride.png',
        status: 'BRIDE',
        socmed: {
          facebook: '',
          twitter: '',
          instagram: 'https://www.instagram.com/jessicaberlianaa_/',
        },
        description: 'The first daughter of Jefri Rosman and Eva Liana',
      },
    },
    events: {
      ceremony: {
        type: 'ceremony',
        foto: require('./assets/images/events/ceremony.png'),
        title: 'THE CEREMONY',
        date: 'Saturday, March 09th 2024',
        time: '10.00 AM - 12.00 PM',
        address: {
          line1: 'Gereja Kristen Kebenaran (Rajawali)',
          line2: 'Kec. Kertasari Kab. BandungJl. Rajawali Selatan XII No.2, RT.001/RW.2,',
          line3: 'Gn. Sahari Sel., Utara, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10720',
        },
      },
      reception: {
        type: 'reception',
        foto: require('./assets/images/events/reception.png'),
        title: 'THE RECEPTION',
        date: 'Saturday, March 09th 2024',
        time: '12.00 PM - 03.00 PM',
        address: {
          line1: 'Gereja Kristen Kebenaran (Rajawali)',
          line2: 'Kec. Kertasari Kab. BandungJl. Rajawali Selatan XII No.2, RT.001/RW.2,',
          line3: 'Gn. Sahari Sel., Utara, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10720',
        },
      },
      combinedData: {
        type: 'combinedData',
        foto: require('./assets/images/events/ceremony.png'),
        title: 'THE CEREMONY & RECEPTION',
        date: 'Saturday, March 09th 2024',
        time: 'Ceremony, 10.00 AM - 12.00 PM',
        time2: 'Reception, 12.00 PM - 15.00 PM',
        address: {
          line1: 'Gereja Kristen Kebenaran (Rajawali)',
          line2: 'Jl. Rajawali Selatan XII No.2, RT.001/RW.2,',
          line3: 'Gn. Sahari Sel., Utara, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10720',
        },
      },
    },
    moment: {
      images: [
        {
          src: require('./assets/images/moment/DSCF0032.png'),
          thumbnail: require('./assets/images/moment/thumbnails/DSCF0032.png'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/DSCF0032.png'),
          thumbnail: require('./assets/images/moment/thumbnails/DSCF0032.png'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/DSCF0032.png'),
          thumbnail: require('./assets/images/moment/thumbnails/DSCF0032.png'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/DSCF0032.png'),
          thumbnail: require('./assets/images/moment/thumbnails/DSCF0032.png'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/DSCF0032.png'),
          thumbnail: require('./assets/images/moment/thumbnails/DSCF0032.png'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
      ],
    },
    gifts: {
      title: 'Gifts',
      bank1: {
        name: 'Bank Mandiri',
        icon: 'https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/Mandiri-512.png',
        account: 'Hot Tiopan Tampubolon',
        number: '1250013844741',
      },
      bank2: {
        name: 'Bank BCA',
        icon: 'https://cdn3.iconfinder.com/data/icons/banks-in-indonesia-logo-badge/100/BCA-512.png',
        account: 'Jessica Berliana',
        number: '64603266',
      },
    },
    location: {
      maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9072976633406!2d106.83734447585958!3d-6.143153260223065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d76b0ef909%3A0xe2dbbae86e5645bc!2sGereja%20Kristen%20Kebenaran%20(%20GKK)%20Rajawali!5e0!3m2!1sen!2sid!4v1707894628544!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    },
  },
};
