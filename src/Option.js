
const totalUnique = (links) => {
  const totalLinks = links.length;
  const myLinks = links.map((element) => element.href);
  const uniqueLinks = new Set(myLinks);
  const stats = `Total: ${totalLinks}\nUnique: ${uniqueLinks.size}`; // size devuelve el número de elementos que hay en el objeto Set.
  return stats;
};

// *******Función que verifica si hay algun link 'fail'*********//
const broken = (links) => {
  const brokenLinks = Array.from(links).filter((element) => element.status >= 400);
  const stats =`Broken: ${brokenLinks.length}`;
  return stats;
};

module.exports = { totalUnique, broken}


