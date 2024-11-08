import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Button } from '@rneui/themed';
import CountryPicker from 'react-native-country-picker-modal';
import { LoginProps } from '../../core/_models';

const LoginScreen: React.FC<LoginProps> = (props) => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    const { navigation } = props;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Welcome Back to Your Creative Space!</Text>
                <Text style={styles.subtitle}>Log in to Generate Stunning Content Effortlessly!</Text>

                <View style={styles.phoneInputContainer}>
                    <TouchableOpacity onPress={() => setShowCountryPicker(true)} style={styles.countryCodeContainer}>
                        <CountryPicker
                            withFilter
                            countryCode="ID"
                            withFlag
                            withCallingCode
                            withCallingCodeButton
                            visible={showCountryPicker}
                            onSelect={(country) => {
                                setShowCountryPicker(false);
                            }}
                            onClose={() => setShowCountryPicker(false)}
                        />
                    </TouchableOpacity>

                    <Input
                        placeholder="8128 XXXX XXXX"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                        containerStyle={styles.phoneInput}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                    />
                </View>

                <Button
                    title="Login"
                    buttonStyle={styles.loginButton}
                    onPress={() => navigation.navigate('FavoriteContent')}
                />

                <Text style={styles.orText}>or</Text>

                <Button
                    title="Login with Google"
                    buttonStyle={styles.socialButton}
                    titleStyle={styles.socialButtonText}
                    onPress={() => console.log("Login with Google")}
                />

                <Button
                    title="Login with Facebook"
                    buttonStyle={styles.socialButton}
                    titleStyle={styles.socialButtonText}
                    onPress={() => console.log("Login with Facebook")}
                />

            </View>
            <View style={styles.footer}>
                <Text style={styles.termsText}>
                    I agree to <Text style={styles.linkText}>Terms of Service</Text> & <Text style={styles.linkText}>Privacy Policy</Text>.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 75,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#8e8e93',
        marginBottom: 24,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        height: 50
    },
    countryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginRight: 8,
    },
    countryCodeText: {
        fontSize: 16,
        marginLeft: 5,
    },
    phoneInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        paddingLeft: 15,
        height: 51,
        textAlign: 'center'
    },
    loginButton: {
        backgroundColor: '#6C63FF',
        borderRadius: 8,
        paddingVertical: 12,
        marginBottom: 16,
    },
    orText: {
        textAlign: 'center',
        marginVertical: 8,
        color: '#8e8e93',
    },
    socialButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 12,
        marginBottom: 8,
    },
    socialButtonText: {
        color: '#000000',
    },
    termsText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#8e8e93',
    },
    linkText: {
        color: '#6C63FF',
        textDecorationLine: 'underline',
    },
    footer: {
        flex: 1,
        height: 220,
        justifyContent: 'flex-end'
    }
});

export default LoginScreen;
