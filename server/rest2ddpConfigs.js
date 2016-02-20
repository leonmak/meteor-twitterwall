REST2DDP.configs.push({
  name: "loklak-tweets",
  collectionName: "tweets",
  jsonPath: "$.statuses.*",
  pollInterval: 10,
  restUrl: "${apiURL}/search.json?timezoneOffset=-480&q=${queryString}"
});
