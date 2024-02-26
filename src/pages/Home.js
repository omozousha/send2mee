import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import { Howler } from 'howler';

import Header from '../parts/Header';
import Navbar from '../parts/Navbar';
import Couple from '../parts/Couple';
import Events from '../parts/Events';
import Moment from '../parts/Moment';
import Gifts from '../components/Gifts';
import Location from '../parts/Location';
import Footer from '../parts/Footer';
import GreetingCard from '../parts/GreetingCard';
import UserDisplay from '../components/UserDisplay';

const Home = ({ data }) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const { line2, ...headerWithoutLine2 } = data.header;

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      Howler.mute(document.visibilityState === 'visible' ? false : true);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <Navbar data={data.navbar} />
      <Header data={headerWithoutLine2} firstLoad={firstLoad} setFirstLoad={setFirstLoad} bgm={data.config.bgm} UserDisplay={<UserDisplay />} />
      {!firstLoad && (
        <>
          <Couple data={data.couple} />
          <Events data={data.events} />
          <Moment data={data.moment} />
          <Gifts data={data.gifts} />
          <Location data={data.location} />
          <GreetingCard data={data.events} />
          <Footer data={data.footer} />
          <Snowfall
            color="#d19ba763"
            snowflakeCount={25}
            speed={[0, 0.5]}
            wind={[0, 0.5]}
            radius={[0, 5]}
            style={{ position: 'fixed', width: '100vw', height: '100vh' }}
          />
        </>
      )}
    </div>
  );
};

export default Home;
