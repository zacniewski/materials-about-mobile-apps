var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  materials.map(function(material) {
    return material.length;
  }); // [8, 6, 7, 9]
  console.log({materials})
  
  materials.map((material) => {
    return material.length;
  }); // [8, 6, 7, 9]

  materials.map(material => material.length); // [8, 6, 7, 9]

  materials.map(({ length }) => length); // [8, 6, 7, 9]
 