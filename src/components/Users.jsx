/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, FormGroup, Input, Row } from "reactstrap";

function Users({ setUserId }) {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <>
      <Row className="row">
        <Form>
          <FormGroup>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              onChange={handleChange}
            >
              <option>Users List</option>
              {users &&
                users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Form>
      </Row>
    </>
  );
}

export default Users;
