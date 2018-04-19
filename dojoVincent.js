function crypto(motdepasse, hash) {
  let tabMDP = [...motdepasse];
  let tabHash = [...hash];
  //console.log(tabHash);

  let resultab = [];
  tabMDP.forEach(elementMDP => {
    const result = tabHash.filter(
      elementhash => elementhash.toLowerCase() === elementMDP
    );
    result.length > 0 ? resultab.push(result[0].toLowerCase()) : null;
  });
  return Object.is(motdepasse, resultab.join(""));
}

console.log(crypto("amdepa", "daMdtp"));
