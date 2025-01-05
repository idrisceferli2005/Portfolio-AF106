import React, { useEffect, useState } from "react";
import styles from "./UserPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import BasicModal from "../../../utils/modal/Modal"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser, getUsers } from "../../../redux/features/productSlice";

const UserPanel = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.wishlist); 
  console.log(users)// Ensure the correct state slice is used

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    notify("User added", "success");
    handleClose();
    setFormData({
      name: "",
      email: "",
      role: "",
    });
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
    notify("User deleted", "success");
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  function notify(text, type) {
    toast(text, {
      type: type,
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="user-container">
      <main className={styles.content}>
        <header>
          <h1>İstifadəçilərin Siyahısı</h1>
          <button className={styles.addbtn} onClick={handleOpen}>
            Create User
          </button>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="user-id">{user.id}</td>
                    <td className="user-name">{user.name}</td>
                    <td className="user-email">{user.email}</td>
                    <td className="user-role">{user.role}</td>
                    <td>
                      <button
                        className={styles.editbtn}
                        onClick={() => {
                          setFormData(user);
                          handleOpen();
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.deletebtn}
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No users</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <BasicModal
          open={open}
          handleClose={handleClose}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={formData.id ? handleAddUser : handleAddUser}
        />
      </main>
    </div>
  );
};

export default UserPanel;