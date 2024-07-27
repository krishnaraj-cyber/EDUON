import  { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../shared/component/utils/api'; 
import './admin.css'

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        alert('Error fetching users: ' + error.response?.data || error.message);
      }
    };
    fetchUsers();
  }, []);

  // const handleUpdateStatus = async (userId, status) => {
  //   try {
  //     await axios.put(
  //       `${API_URL}/api/users/${userId}/status`,
  //       { status },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         },
  //       }
  //     );
  //     // Update the user status in the local state
  //     setUsers((prevUsers) =>
  //       prevUsers.map((user) =>
  //         user._id === userId ? { ...user, User_Status: status } : user
  //       )
  //     );
  //   } catch (error) {
  //     console.error('Error updating user status:', error);
  //   }
  // };

  return (<>
    <h2 className="admin-dashboard-title">Users Details</h2>
    <div className="admin-dashboard-container">

    <div className="user-count">
          <p className='font-medium text-lg mb-4'>Total Users: {users.length}</p>
        </div>
      
      <table className="admin-dashboard-table">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Status</th>
            <th>Registered Date</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user.Username}</td>
              <td>{user.Email}</td>
              <td>{user.MobileNumber}</td>
              <td>{user.User_Status}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>

              {/* <td>
                <button
                  className="admin-dashboard-button bg-green-700"
                  onClick={() => handleUpdateStatus(user._id, 'Active')}
                >
                  Activate
                </button>
                <button
                  className="admin-dashboard-button bg-red-700"
                  onClick={() => handleUpdateStatus(user._id, 'Inactive')}
                >
                  Deactivate
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminDashboard;