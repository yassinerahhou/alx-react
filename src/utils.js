// Define the getFullYear function
export function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

export { getFooterCopy };
function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD!";
}
export { getLatestNotification };
