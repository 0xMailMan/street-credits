const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.LUMA_API_KEY;

// Fetch details for a specific event
async function getEventDetails(eventId) {
  const url = `https://api.lu.ma/v1/events/${eventId}`;

  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${API_KEY}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
}

// Fetch the list of attendees for a specific event
async function getAttendees(eventId) {
  const url = `https://api.lu.ma/v1/events/${eventId}/attendees`;

  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${API_KEY}` }
    });
    return response.data.attendees;
  } catch (error) {
    console.error('Error fetching attendees:', error);
    throw error;
  }
}

module.exports = {
  getEventDetails,
  getAttendees,
};
