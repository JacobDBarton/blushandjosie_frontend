import { useState, useEffect } from "react";

function Collection(props) {

  const [earrings, setEarrings] = useState(null);

  const getEarringData = async () => {

    const response = await fetch(props.URL + "earrings");

    const data = await response.json();

    setEarrings(data);
  };

  useEffect(() => getEarringData(), []);

  const loaded = () => {
    return earrings.map((earrings) => (
      <div>
        <h1>{earrings.name}</h1>
        <img src={earrings.image} alt={earrings} />
      </div>
    ));
  };

  return earrings ? loaded() : <h1>Loading earrings</h1>;
}

export default Collection;