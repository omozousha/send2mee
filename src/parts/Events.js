import React from 'react';

import Title from '../components/Title';
import Card from '../components/Card';

const Events = ({ data }) => {
  return (
    <section className="events container" id="events">
      <Title title="When & Where" />
      <div className="row mt-5" style={{ textAlign: 'center' }}>
        <Card data={data.combinedData} />
      </div>
    </section>
  );
};

export default Events;
