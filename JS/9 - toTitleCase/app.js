function toTileCase(string) {
  return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};


console.log(toTileCase('foo bar mooo zoo sdf er we wdds '));