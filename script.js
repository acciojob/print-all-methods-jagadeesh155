function allMethods() {
  return Object.getOwnPropertyNames(Math)
    .filter(key => typeof Math[key] === "function") // keep only functions
    .sort() // alphabetize
    .join(", "); // join into a comma-separated string
}

// Example usage
alert(allMethods());
