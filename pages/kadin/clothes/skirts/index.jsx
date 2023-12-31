import React, { useEffect, useState } from 'react';

//API
import { getSkirts } from '../../../api/skirts'; 

//Componets
import Card from '../../../../components/card';
import Loading from '../../../../components/loading';

function Feature() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const apiData = await getSkirts();

      if (apiData) {
        setData(apiData);
      }
    };

    fetchDataFromApi();
  }, [data]);

  useEffect(() => {
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="feature">
      <div className="row">
        {data &&
          data.map((item) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4 bg-white" key={item.id}>
                <Card data={item} pages="skirts" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Feature;
