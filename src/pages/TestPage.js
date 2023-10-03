import React, { useState, useEffect } from 'react';

const data = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
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
        </div>
    );
}



export default TestPage;
