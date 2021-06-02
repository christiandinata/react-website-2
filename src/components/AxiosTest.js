import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosTest() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res) => {
				console.log(res);
                setPosts(res.data)
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<ul style={{color:"pink", backgroundColor:"black", zIndex:99}}>
				{posts.map(posting => (
                    <li style={{color: "pink"}} key={posting.id}>{posting.title}</li>
                ))}
			</ul>
            <button onClick={() => console.log(posts)}>hello?</button>
		</div>
	);
}

export default AxiosTest;
