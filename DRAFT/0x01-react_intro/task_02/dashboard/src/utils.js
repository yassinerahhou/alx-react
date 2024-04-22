// Define the getFullYear function
function getFullYear() {
  return new Date().getFullYear();
}

// Export the getFullYear function as named export

// Define the getFooterCopy function
function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

// Export the getFooterCopy function as default export
export { getFooterCopy };
export { getFullYear };
export { getLatestNotification };
