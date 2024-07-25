'use client'
// import { useEffect, useState } from 'react';
// import { fetchData } from '../../../services/dataService'; // Adjust the path based on your project structure

// interface DataType {
//   id: number;
//   name: string;
// }

const App: React.FC = () => {
  // const [data, setData] = useState<DataType[] | null>(null);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchDataFromAPI = async () => {
  //     try {
  //       // Set `useLocal` to `false` to fetch from the API
  //       const data = await fetchData<DataType[]>('/api/dummy', false);
  //       setData(data);
  //     } catch (err) {
  //       setError('Failed to fetch data');
  //       console.error(err);
  //     }
  //   };

  //   fetchDataFromAPI();
  // }, []);

  // if (error) return <div>Error: {error}</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {/* {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default App;
