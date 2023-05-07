/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Row } from "reactstrap";

function Posts({ userId }) {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  };

  let filtered = posts.filter((post) => userId == post.userId);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className="row">
        <Table bordered dark hover responsive striped>
          <thead>
            <tr>
              <th>Post Title</th>
              <th>Post Body</th>
            </tr>
          </thead>
          <tbody>
            {posts && filtered.length == 0
              ? posts.map((post) => (
                  <tr key={post.id}>
                    <td scope="row">{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))
              : filtered.map((post) => (
                  <tr key={post.id}>
                    <td scope="row">{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
}

export default Posts;
