// Define the getFullYear function
function getFullYear() {
  return new Date().getFullYear();
}

// Export the getFullYear function as named export

// Define the getFooterCopy function
function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

// Export the getFooterCopy function as default export
export { getFooterCopy };
export { getFullYear };
