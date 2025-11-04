function parseQueryString(queryString) {
  if (!queryString) {
    return {};
  }

  const pairs = queryString.replace(/^\?/, '').split('&');
  const result = {};

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return result;
}

module.exports = {
  parseQueryString,
};
