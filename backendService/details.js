const getData = (pageSize) => {
    let arr = []
    const imgLists = [ 
        'bag.png', 'bao.png', 'bj.jpg', 'book.png', 'canju.png', 
        'ert.png', 'lg.png', 'jiaju.jpg', 'm1.jpg', 'm2.jpg', 
        'm3.jpg', 'ship.png', 'nv.png', 'wai.png', 'xie.png', 
    ]
    for( var i = 1; i <= pageSize; i++ ) {
        arr.push({
            id: i,
            title: `商品${i}`,
            img: imgLists[i-1],
            price: Math.ceil(Math.random() * 1000) // 1-1000
        })
    }
    return arr
}

console.log(exports === module.exports)

exports.getData = getData