import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getData() {
      const response = await fetch(
        "https://api.github.com/repos/microsoft/typescript/contributors?per_page=10"
      );

      const FinalResponse = await response.json();

      setData(FinalResponse);
    }
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Pic</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((res) => {
            return (
              <tr key={res.id}>
                <td>{res.login}</td>
                <td>{res.avatar_url}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default App;
