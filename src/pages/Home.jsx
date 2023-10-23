import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Nextbtn from '../components/Nextbtn';

function Home() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote',
        {
          headers: {
            Accept: 'application/hal+json',
            'X-RapidAPI-Key':process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_URL,
          },
        }
      );

      setQuote(response.data.value);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="home-wrapper h-screen  p-10 ">
        <Card quote={quote} loading={loading} />

        {loading?'':<Nextbtn handleClick={fetchData} />}
      </div>
    </>
  );
}

export default Home;
