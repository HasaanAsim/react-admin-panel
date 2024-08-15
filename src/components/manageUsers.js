// src/components/ManageUsers.js
import React from 'react';
import { Table } from 'react-bootstrap';

const users = [
  {
    id: 1,
    name: 'Lucy Stewart',
    membership: 'Black Pearl',
    status: 'ACTIVE',
    location: '',
    occupation: '',
    email: 'lucysuniversityapplication@gmail.com',
    userId: 'djZHlNFYkDTuHE4WIYuSWwMVT9h1',
  },
  {
    id: 2,
    name: 'Lucy S',
    membership: 'Black Pearl',
    status: 'ACTIVE',
    location: '',
    occupation: '',
    email: 'lucysc325@gmail.com',
    userId: 'nXynPqMejDSoGvlpyxSvsFhLRdH3',
  },
  {
    id: 3,
    name: 'Matthew H',
    membership: 'Black Pearl',
    status: 'ACTIVE',
    location: 'Sheung Wan',
    occupation: 'DJ',
    email: 'mt6773081@gmail.com',
    userId: 'W8VfbjBgTVRKF7Fz1WPCQzJtLn1',
  },
  {
    id: 4,
    name: 'Whizpool Test4',
    membership: 'Pearl',
    status: 'ACTIVE',
    location: '',
    occupation: '',
    email: 'whizpooltest4@gmail.com',
    userId: 'a5HiuFl8Fcb9uBTxeQWHX75ozQ2',
  },
  {
    id: 5,
    name: 'Abdul Manan',
    membership: 'Black Pearl',
    status: 'ACTIVE',
    location: 'Islamabad',
    occupation: 'Developer',
    email: 'abdulmananshahidjatt@gmail.com',
    userId: 'Il0o4z6LLOSP9GNhwEKSG0uGlYk1',
  },
  {
    id: 6,
    name: 'Whizpool 5',
    membership: 'Pearl',
    status: 'ACTIVE',
    location: 'Islamabad',
    occupation: 'Developer',
    email: 'whizpooltest5@gmail.com',
    userId: 'cZhvlWkmAyd4VxFgmyXEjXtQv23',
  },
];

const ManageUsers = () => {
  return (
    <div className="container mt-4">
      <h2>Manage Users</h2>
      <div className="d-flex justify-content-between">
        <div>Total Live Users: 0</div>
        <div>Total Users on the Map: 3</div>
        <div>Total White Pearl Users: 2</div>
        <div>Total Black Pearl Users: 4</div>
      </div>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Index</th>
            <th>User Name</th>
            <th>Membership Type</th>
            <th>Active Now</th>
            <th>Location</th>
            <th>Occupation</th>
            <th>User Email</th>
            <th>User Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.membership}</td>
              <td>{user.status}</td>
              <td>{user.location}</td>
              <td>{user.occupation}</td>
              <td>{user.email}</td>
              <td>{user.userId}</td>
              <td>
                <button className="btn btn-info btn-sm mr-2">View</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUsers;


