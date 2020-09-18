// File: src/redux/api/story.js
// Date: 9/15/2020
// Note: Proxy Design Pattern and Participants
// ................................................................................
console.log("Mounting src/redux/api/story.js...\n");

export const WS_ROOT = 'ws://echo.websocket.org/';
export const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';
console.log("HN_BASE_URL: " + HN_BASE_URL);

const fetchStories = query =>
    fetch(HN_BASE_URL + query)
        .then(response => response.json());

export {
    fetchStories,
};

// eof
