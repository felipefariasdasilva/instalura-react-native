import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import estilo from './estilo.js'
import { curtirFoto, imgLike } from '../../api/curtidas.js';

const Foto = ( { urlFoto, descricao, qtdLikes} ) => {

    const [curtiu, setCurtiu] = useState(false)
    const [likes, setLikes] = useState(qtdLikes)

    const clicouCurtir = () => {
        const [novoEstadoCurtiu, qnt] = curtirFoto(curtiu, likes)
        setLikes(qnt)
        setCurtiu(!novoEstadoCurtiu)
    }

    return(
        <Fragment>
            
            <Image 
                source={ { uri: urlFoto } } 
                style={ estilo.imagem }  
            />

        <Text>{ descricao }</Text>
        
        <View style={ estilo.viewLike }>
            <TouchableOpacity onPress={clicouCurtir}>
                <Image 
                    source={ imgLike(curtiu) } 
                    style={ estilo.like }
                />
            </TouchableOpacity>

            <Text> curtidas { likes }</Text>

        </View>
        
        </Fragment>
        
    )

}

export default Foto
