import React, { useState, useEffect } from "react";
import axios from "axios";

import Title from "../components/Title";

const Rsvpmaster = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [guestList, setGuestList] = useState([]);

  const handleSubmit = async () => {
    if (!name || !attendance) {
      alert("Please fill in your name and attendance before submitting");
      return;
    }

    try {
      await axios.post("https://server-rsvpoj.vercel.app/api/addRsvp", {
        name,
        attendance,
        message,
      });

      // Ambil ulang daftar tamu setelah RSVP ditambahkan
      fetchGuestList();

      // Reset form fields
      setName("");
      setAttendance("");
      setMessage("");
    } catch (error) {
      console.error("Error adding RSVP:", error);
    }
  };

  const fetchGuestList = async () => {
    try {
      const response = await axios.get(
        "https://server-rsvpoj.vercel.app/guestlist"
      );
      setGuestList(response.data);
    } catch (error) {
      console.error("Error fetching guest list:", error);
    }
  };

  useEffect(() => {
    // Ambil daftar tamu saat komponen dimuat
    fetchGuestList();
  }, []);

  return (
    <div className="form-container"
    data-aos="zoom-in"
    data-aos-duration="1500">
      <Title title="Greeting Card" />
      <div className="form">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />

          <label>Attendance:</label>
          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Attending">Attending</option>
            <option value="Not Attending">Not Attending</option>
          </select>

          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          ></textarea>

          <div className="button-container">
            <button onClick={handleSubmit} className="send-button">
              Submit RSVP
            </button>
          </div>
        </form>

        <h2>Guest List</h2>
        <div id="guestList" className="chatContainer">
          {guestList.map((guest) => (
            <div key={guest._id} className="chatBalloon">
              <p className="pesan">
                <strong></strong>"{guest.message}"
              </p>
              <p className="nama">
                <strong>Name:</strong> {guest.name}
              </p>
              <p className="kehadiran">
                <strong>Attendance:</strong> {guest.attendance}
              </p>
              <p className="tanggal">
                {new Date(guest.eventDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rsvpmaster;
