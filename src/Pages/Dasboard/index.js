import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const getUserList = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleDelete = () => {
    axios
      .delete(`https://reqres.in/api/users/${selectedId}`)
      .then((res) => {
        if (res.status === 204) {
          handleCloseModal();
          handleShowAlert();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserList();
  }, []);

  console.log(data);

  return (
    <div style={{display:'flex',flexWrap:"wrap"}}>
      
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={"success"}
          sx={{ width: "100%" }}
        >
          {"User is deleted"}
        </Alert>
      </Snackbar>
      <Dialog
        open={showModal}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          {"Confirm to delete user?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Confirm to delete user with ID {selectedId}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="flex justify-end gap-6">
            <button onClick={handleCloseModal}>Cancel</button>
            <button onClick={handleDelete}>Confirm</button>
          </div>
        </DialogActions>
      </Dialog>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.avatar} alt={"avatar"} />
          <p>{item.email}</p>
          <p>
            {item.first_name} {item.lastname}
          </p>
          <Link to={`/detail/${item.id}`}>
            <button>Edit</button>
          </Link>
          <button
            onClick={() => {
              setSelectedId(item.id);
              handleShowModal();
            }}
          >
            Delete
          </button>
        </div>
        
      ))}
      <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  );
};

export default Dashboard;
