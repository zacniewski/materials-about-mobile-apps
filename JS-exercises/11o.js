const mapArray = [3, 12, 33, 2, 8, 5]
const newMapArray = mapArray.map(mapItem => {
    return (mapItem * 3)/2
})

console.log(newMapArray)