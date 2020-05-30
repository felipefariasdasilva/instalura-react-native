const lerFotos = async(callback) => {

    const fotosHTTP = await fetch("http://10.0.2.2:3030/feed")
    const fotosJSON = await fotosHTTP.json()
    callback(fotosJSON)

}

export default lerFotos