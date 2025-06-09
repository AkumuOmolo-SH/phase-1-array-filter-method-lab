function findMatching(drivers, nameToMatch) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === nameToMatch.toLowerCase();
  });
}

function fuzzyMatch(drivers, queryString) {
  return drivers.filter(function(driver) {
    return driver.startsWith(queryString);
  });
}

function matchName(drivers, matchString) {
  return drivers.filter(function(driver) {
    return driver.name === matchString;
  });
}