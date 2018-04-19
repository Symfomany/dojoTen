function crypto(motdepasse, hash) {
  //const regexp = /[mdp]/i;
  const regexp = new RegExp(`[${motdepasse}]`, "ig");
  const minHash = hash.toLowerCase();

  let tableau_correspondances = minHash.match(regexp);
  tableau_correspondances = tableau_correspondances.map(element =>
    element.toLowerCase()
  );

  //suppression des doublons
  const tbUniq = tableau_correspondances.filter(
    (item, pos, self) => self.indexOf(item) == pos
  );

  if (tbUniq.length === motdepasse.length) {
    return true;
  }

  return false;
}

console.log(
  crypto(
    "mugj4p",
    "AZR4T4J8K64È-È4d4**6PTYR56z4J6fUM-YT4Èh6#84U@JGFHg6K6ÇÇHDG&468g9JF46GJH"
  )
);
