import React from "react";
import { useFetch } from "../hooks/useFetch";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Inicio = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h2>loading...</h2>;
  }

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Inicio</h1>
      {data.map((item) => (
        <h4 key={item.id}>
          <Link to={`/inicio/${item.id}`}>
            {item.id} - {item.title}
          </Link>
        </h4>
      ))}
    </div>
  );
};

export default Inicio;
