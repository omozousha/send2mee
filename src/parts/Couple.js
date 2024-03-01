import React from 'react';

import Title from '../components/Title';
import Bridgroom from '../components/Bridgroom';
import Quote from '../components/Quote';

const Couple = ({ data }) => {
  return (
    <section className="couple container" id="couple">
      <Quote quote={<p style={{ fontSize: '1em', fontFamily: "'Great Vibes', cursive" }}>"Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
      <br />
      Markus 10:9</p>} className="quote1 font-weight-bold" />
      <br />
      <br />
      <br />
      <Title title={data.title} />
      <div className="row mt-4">
        <Bridgroom data={data.groom} />
        <Bridgroom data={data.bride} />
      </div>
    </section>
  );
};

export default Couple;
