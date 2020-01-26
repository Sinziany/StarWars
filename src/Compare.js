
function Compare(a, b) {
  const UrlA = a.url.toUpperCase();
  const UrlB = b.url.toUpperCase();

  let comparison = 0;
  if (UrlA > UrlB) {
    comparison = 1;
  } else if (UrlA < UrlB) {
    comparison = -1;
  }
  return comparison;
}

export default Compare;