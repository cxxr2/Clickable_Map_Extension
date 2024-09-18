import { getContext } from "../../extensions.js";
import { eventSource, event_types } from "../../../script.js";

const context = getContext();
const mapLocations = [
    { name: 'Town Square', x: 150, y: 200, width: 50, height: 50 },
    { name: 'Forest Edge', x: 300, y: 400, width: 60, height: 60 },
    { name: 'Castle Gate', x: 500, y: 100, width: 40, height: 40 }
];

document.addEventListener('DOMContentLoaded', function() {
    const mapImage = document.createElement('img');
    mapImage.src = 'map_univ.png'; // Update with actual path
    mapImage.alt = 'Map';
    mapImage.style.width = '100%';
    mapImage.style.height = 'auto';
    document.body.appendChild(mapImage);

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
        // Example function to handle travel logic
        // Replace this with actual Silly Tavern API call
        console.log(`Traveling to ${locationName}...`);

        // Notify Silly Tavern of the new location
        context.chat.addMessage(`Traveling to ${locationName}`);

        // Example of using Extras API
        // const url = new URL(getApiUrl());
        // url.pathname = '/api/travel';
        // doExtrasFetch(url, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ location: locationName })
        // });
    }
});

// Optionally listen for specific events
eventSource.on(event_types.CHAT_CHANGED, function() {
    console.log('Chat changed event detected');
});
