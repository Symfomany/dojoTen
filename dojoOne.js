function crypto(motdepasse, hash) {
  let hashLowerCase = hash.toLowerCase();
  const tabMDP = [...motdepasse],
    tabHASH = [...hashLowerCase];
  let longueurMDP = tabMDP.length;
  let compteur = 0;
  console.log(tabMDP);
  tabMDP.forEach(element => {
    // console.log(element);
    if (tabHASH.includes(element)) {
      compteur++;
      //   console.log(compteur);
    }
    console.log(compteur);
  });
  if (compteur === longueurMDP) {
    return true;
  }

  return false;
  //console.log(test);
  //console.log(tabHASH.includes("M"));
}

let testFinal = crypto(
  "mdp2",
  "AZR4T4J8K64È-È4d4**6PTYR56z4J6fUM-YT4Èh6#84U@JGFHg6K6ÇÇHDG&468g9JF46GJH"
);

console.log(testFinal);
