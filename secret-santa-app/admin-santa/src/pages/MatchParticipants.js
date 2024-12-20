import React, { useEffect, useState } from "react";
import axios from "axios";
import MatchedDataDetail from "../components/MatchedDataDetail";

const MatchParticipants = () => {
  const [matchedData, setMatchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://secret-santa-nn49.onrender.com/matched-data")
      .then((response) => {
        setMatchedData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error Fetching Users", err);
        setError(err.message, 
          "test"
        );
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading participants...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return  <>
  {console.log(matchedData)}
  <section className="participants-section">
    <span className="participants-header">
      🎁 Total Matches - {matchedData.length} 🎅
    </span>
  </section>
  {matchedData?.map((elem) => {
    return <MatchedDataDetail participant={elem} />;
  })}
</>;
};

export default MatchParticipants;
