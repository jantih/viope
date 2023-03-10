// Ch6.3
/* Github has the API that can be used to fetch repositories.
You can send GET request to the endpoint https://api.github.com/search/repositories?q=react to fetch repositories that has keyword react.
The keyword is defined using the query parameter q (q=react).
Call the Github API and show the list of repositories by using react as a keyword (fullname + URL). See the image below. */

import React, { useEffect, useState } from 'react';

export default function GitHubAPI() {
    const [github, setGithub] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/search/repositories?q=react')
            .then(res => res.json())
            .then(data => setGithub(data.items))
    }, []);
    return (
        <div>
            <h3>GitHub API</h3>
            <h3>Repositories</h3>
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