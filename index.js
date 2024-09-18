import { getContext } from "../../extensions.js";

// Define the base URL and endpoint
const OLLAMA_API_URL = 'http://127.0.0.1:11434/'; // Replace with actual Ollama API URL

// Fetch and display map data
async function fetchMapData() {
    try {
        const response = await fetch(OLLAMA_API_URL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY', // Replace YOUR_API_KEY with your actual API key
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('Map data:', data);
        // Process and use the data as needed
    } catch (error) {
        console.error('Error fetching map data:', error);
    }
}

// Initialize map and set up event listeners
document.addEventListener('DOMContentLoaded', function() {
    fetchMapData(); // Fetch map data when the document is loaded

    const mapImage = document.getElementById('map-image');

    mapImage.addEventListener('click', function(event) {
        const rect = mapImage.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const location = mapLocations.find(loc =>
            x > loc.x && x < loc.x + loc.width &&
            y > loc.y && y < loc.y + loc.height
        );

        if (location) {
            console.log(`Traveling to ${location.name}`);
            travelToLocation(location.name);
        } else {
            console.log('No location found at this position');
        }
    });

    function travelToLocation(locationName) {
        console.log(`Traveling to ${locationName}...`);
        context.chat.addMessage(`Traveling to ${locationName}`);
    }
});

