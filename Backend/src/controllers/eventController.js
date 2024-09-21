const { getEventDetails, getAttendees } = require('../services/lumaService');
const { mintEventNFT } = require('../services/hederaService');

async function handleEventCheckin(req, res) {
  const { eventId, userId } = req.body;

  try {
    // Fetch event details and attendees
    const eventDetails = await getEventDetails(eventId);
    const attendees = await getAttendees(eventId);

    // Calculate attendance ratio
    const totalSignups = eventDetails.total_signups;
    const checkedIn = attendees.filter(attendee => attendee.checked_in).length;
    const attendanceRatio = (checkedIn / totalSignups).toFixed(2);  // Limit to 2 decimals

    // Mint NFT for checked-in user
    await mintEventNFT(eventId, userId, eventDetails, attendanceRatio);

    res.status(200).send({ message: 'NFT minted successfully!', attendanceRatio });
  } catch (error) {
    console.error('Error handling event check-in:', error);
    res.status(500).send({ error: 'An error occurred while minting NFT' });
  }
}

module.exports = {
  handleEventCheckin,
};
