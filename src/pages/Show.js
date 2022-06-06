import { useState, useEffect } from "react";

function Earring(props) {
  const [show, setShow] = useState(null);

  const getShowData = async () => {

    const response = await fetch(props.URL + "show");

    const data = await response.json();

    setShow(data);
  };

  useEffect(() => getShowData(), []);

  const loaded = () => (
    <div>
      <h2>{show.name}</h2>
      <h3>{show.price}</h3>
      <p>{show.description}</p>
    </div>
  );

  return show ? loaded() : <h1>Loading...</h1>;
}

export default Earring;