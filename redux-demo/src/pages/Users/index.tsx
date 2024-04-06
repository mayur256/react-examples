import { ReactElement } from "react";

const Users = (): ReactElement => {
    return (
      <div>
        <h1 data-testid="heading">Users</h1>
        <ul>
          <li>name 1</li>
          <li>name 2</li>
        </ul>
      </div>
    );
  };
  
  export default Users;