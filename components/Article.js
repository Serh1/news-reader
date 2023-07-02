import React from 'react'
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';

const Article = (props) => {
    return (
        <View style={styles.article}>
            <View style={styles.inner}>
                <ImageBackground source={{ uri: props.urlToImage }} resizeMode="cover" style={styles.image} blurRadius={10}>
                    <View style={styles.content}>
                        <View style={styles.title_wrapper}>
                            <Text style={styles.title}>{props.title}</Text>
                        </View>
                        <View style={styles.content_wrapper}>
                            <Text style={styles.description}>{props.description}</Text>
                            <Text style={styles.author}>{props.author}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    article: {
        width: '100%',
        padding: 5,
        borderRadius: 15,
    },

    inner: {
        flex: 1,
        backgroundColor: '#c8c8c8',
        justifyContent: 'center',
        borderRadius: 15,
        height: 200,

    },

    content:{
        flex: 1,
        alignContent:'center',
        justifyContent: 'center',
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        overflow: 'hidden',
    },

    title_wrapper: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    content_wrapper: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },


    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowRadius: 4
    },

    author: {
        color: 'white',
        fontStyle: 'italic',
        justifyContent: 'flex-end',
        right: 0,
        bottom: 0,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowRadius: 4
    },

    description: {
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowRadius: 4
    },
});
export default Article