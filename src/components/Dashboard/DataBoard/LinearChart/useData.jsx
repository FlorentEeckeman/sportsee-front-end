import React, { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"] * 1000;
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData([
        { name: 1, value: 30 },
        { name: 2, value: 10 },
        { name: 3, value: 50 },
        { name: 4, value: 20 },
        { name: 5, value: 80 },
        { name: 6, value: 30 },
        { name: 7, value: 0 },
        { name: 8, value: 20 },
        { name: 9, value: 100 },
        { name: 10, value: 55 },
        { name: 11, value: 60 },
        { name: 12, value: 80 },
      ]);
    });
  }, []);

  return data;
};
