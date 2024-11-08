import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { OnBoardingProps } from '../../core/_models';

const OnboardingScreen: React.FC<OnBoardingProps> = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../../assets/images/on-board.png')} style={styles.image} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>Transform Your ✨</Text>
                <Text style={styles.title2}> Vision into Reality!</Text>
                <Text style={styles.subtitle}>Welcome to the new era of AI content generator</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate("Login")}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B34C3',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    image: {
        width: 350,
        height: 350,
        borderRadius: 15,
        marginHorizontal: 10,
        marginTop: 25,
        transform: [{ rotate: '-25deg' }],
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 20,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title2: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: '#CCCCCC',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginHorizontal: 10,
        marginTop: 40,
        width: '95%',
    },
    buttonText: {
        color: '#4B34C3',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default OnboardingScreen;
