import React, { useState, useEffect } from 'react';

const data = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

const data2 = [
    {
        "spotvalue": 26,
        "email": "123@123",
        "latitude": 33.946033,
        "longitude": -84.249161,
        "altitude": 0,
        "spotname": "1",
        "spotnumber": "1",
        "spotlevel": 1,
        "streetname": "11",
        "spotnotes": "1",
        "createtime": "2023-10-01T16:47:27.000Z"
    },
    {
        "spotvalue": 26,
        "email": "123@123",
        "latitude": 33.946033,
        "longitude": -84.249161,
        "altitude": 0,
        "spotname": "1",
        "spotnumber": "1",
        "spotlevel": 1,
        "streetname": "11",
        "spotnotes": "1",
        "createtime": "2023-10-01T16:47:27.000Z"
    }


];

function TestPage() {
    // This is the state for the search input
    const [searchInput, setSearchInput] = useState('');

    // This is the state for the filtered data
    const [filteredData, setFilteredData] = useState([]);

    // This is the effect hook that runs whenever the search input changes
    useEffect(() => {
        // This is the function that filters the data based on the search input
        const filterData = () => {
            // If the search input is empty, return the original data
            if (!searchInput) {
                return data;
            }

            // Otherwise, use a regular expression to match the search input with the name or email fields of the data
            const regex = new RegExp(searchInput, 'i');
            return data.filter((input) => regex.test(input.name) || regex.test(input.email));
        };

        // Set the filtered data state to the result of the filter function
        setFilteredData(filterData());
    }, [searchInput]); // The effect hook depends on the search input state

    // This is the function that handles the change event of the input element
    const handleChange = (event) => {
        // Set the search input state to the value of the input element
        setSearchInput(event.target.value);
    };

    // This is the JSX that renders the component
    return (
        <div>
            <input type="text" placeholder="Search..." value={searchInput} onChange={handleChange} />
            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.email}
                    </li>
                ))}
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
             {data2.map((item, index) => (
                <h2 key={index} style={{
                    color: "white",
                    width: "200px",
                    margin: "10px",
                    border: "2px solid var(--primary-color)",
                    borderRadius: "5px",
                    padding: "5px",
                    boxShadow: "0 0 5px var(--secondary-color)",
                }}>
                    <tr > Spot Name: {item.spotname} {item.createtime} </tr>
                    <tr>Streetname: {item.streetname}</tr>
                    Notes: {item.spotnotes}
                    <br></br><button  > Open in maps</button>
                </h2>
            ))}
                
            </div>
        </div>
    );
}



export default TestPage;
