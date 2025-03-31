const Track = require('../models/Track');

const tracksController = {
  // Create a new track (POST /tracks)
  create: async (req, res) => {
    try {
      const { title, artist } = req.body;
      
      // Create new track
      const newTrack = await Track.create({ title, artist });
      
      // Return the created track with 201 status
      res.status(201).json(newTrack);
    } catch (error) {
      console.error('Error creating track:', error);
      res.status(500).json({ message: 'Failed to create track', error: error.message });
    }
  },

  // Get all tracks (GET /tracks)
  index: async (req, res) => {
    try {
      // Fetch all tracks from database
      const tracks = await Track.find().sort({ createdAt: -1 });
      
      // Return tracks with 200 status
      res.status(200).json(tracks);
    } catch (error) {
      console.error('Error fetching tracks:', error);
      res.status(500).json({ message: 'Failed to fetch tracks', error: error.message });
    }
  },

  // Get a single track by ID (GET /tracks/:id)
  show: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Find track by ID
      const track = await Track.findById(id);
      
      // Check if track exists
      if (!track) {
        return res.status(404).json({ message: 'Track not found' });
      }
      
      // Return the track with 200 status
      res.status(200).json(track);
    } catch (error) {
      console.error('Error fetching track:', error);
      res.status(500).json({ message: 'Failed to fetch track', error: error.message });
    }
  },

  // Update a track (PUT /tracks/:id)
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, artist } = req.body;
      
      // Find and update track
      const updatedTrack = await Track.findByIdAndUpdate(
        id, 
        { title, artist }, 
        { new: true, runValidators: true }
      );
      
      // Check if track exists
      if (!updatedTrack) {
        return res.status(404).json({ message: 'Track not found' });
      }
      
      // Return the updated track with 200 status
      res.status(200).json(updatedTrack);
    } catch (error) {
      console.error('Error updating track:', error);
      res.status(500).json({ message: 'Failed to update track', error: error.message });
    }
  },

  // Delete a track (DELETE /tracks/:id)
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Find and delete track
      const deletedTrack = await Track.findByIdAndDelete(id);
      
      // Check if track exists
      if (!deletedTrack) {
        return res.status(404).json({ message: 'Track not found' });
      }
      
      // Return the deleted track with 200 status
      res.status(200).json(deletedTrack);
    } catch (error) {
      console.error('Error deleting track:', error);
      res.status(500).json({ message: 'Failed to delete track', error: error.message });
    }
  }
};

module.exports = tracksController;