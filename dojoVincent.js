function crypto(motdepasse, hash) {
  let tabMDP = [...motdepasse];
  let tabHash = [...hash];
  //console.log(tabHash);

  let resultab = [];
  tabMDP.forEach(elementMDP => {
    const result = tabHash.filter(
      elementhash => elementhash.toLowerCase() === elementMDP
    );
    resultab.push(result[0].toLowerCase());
  });
  return Object.is(motdepasse, resultab.join(""));
}

crypto("mdp", "daMdtp");
