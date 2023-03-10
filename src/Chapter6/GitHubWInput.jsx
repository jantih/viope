// Ch6.4
/* Modify the previous Github exercise and add an input element where user can type a keyword. 
When 'Search'- button is pressed, the repositories are fetched using the typed keyword. See the image below. */

import React, { useState } from 'react';

export default function GitHubAPIWInput() {
    const [github, setGithub] = useState([]);
    const [input, setInput] = useState("");
    const inputChanged = (event) => {
        setInput(event.target.value);
    }
    async function getData(){
        if(input == ""){
            alert("Please provide search criteria");
        } else {
            fetch('https://api.github.com/search/repositories?q='+input)
            .then(res => res.json())
            .then(data => setGithub(data.items))
            .catch(e => alert(e))
        }
    }

    return (
        <div>
            <h3>GitHub API with input</h3>
            <h3>Repositories</h3>
            <input placeholder='Query' name='input' value={input} onChange={inputChanged} />
            <button onClick={getData}>Search</button>
            <br/><br/>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                    </tr>
                    {
                        github.map((data, index) =>
                            <tr key={index}>
                                <td>{data.full_name}</td>
                                <td><a href={data.html_url}>{data.html_url}</a></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}