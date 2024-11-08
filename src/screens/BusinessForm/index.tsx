import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { Formik } from 'formik';
import * as Yup from 'yup';

const BusinessForm: React.FC = () => {
    const validationSchema = Yup.object().shape({
        businessName: Yup.string().required('Business name is required'),
        location: Yup.string().required('Location is required'),
        seatingCapacity: Yup.number().required('Seating capacity is required'),
        cuisine: Yup.string().required('Cuisine is required'),
    });

    return (
        <ScrollView style={styles.container}>
            <Formik
                initialValues={{
                    businessName: '',
                    location: '',
                    seatingCapacity: '',
                    cuisine: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Form Data:', values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <Text style={styles.title}>Complete Your Business Details</Text>
                        <Text style={styles.subtitle}>Provide complete details to help customers find your business easily</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                mode='outlined'
                                label='Business Name'
                                outlineColor='#ccc'
                                activeOutlineColor='#4B34C3'
                                onChangeText={handleChange('businessName')}
                                onBlur={handleBlur('businessName')}
                                value={values.businessName}
                            />
                            {touched.businessName && errors.businessName && <Text style={styles.error}>{errors.businessName}</Text>}
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                mode='outlined'
                                label="Location"
                                outlineColor='#ccc'
                                activeOutlineColor='#4B34C3'
                                onChangeText={handleChange('location')}
                                onBlur={handleBlur('location')}
                                value={values.location}
                            />
                            {touched.location && errors.location && <Text style={styles.error}>{errors.location}</Text>}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                mode='outlined'
                                outlineColor='#ccc'
                                activeOutlineColor='#4B34C3'
                                label='Seating Capacity'
                                onChangeText={handleChange('seatingCapacity')}
                                onBlur={handleBlur('seatingCapacity')}
                                value={values.seatingCapacity}
                                keyboardType='number-pad'
                                maxLength={4}
                            />
                            {touched.seatingCapacity && errors.seatingCapacity && <Text style={styles.error}>{errors.seatingCapacity}</Text>}
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                mode='outlined'
                                label='Enter Cuisine'
                                outlineColor='#ccc'
                                activeOutlineColor='#4B34C3'
                                onChangeText={handleChange('cuisine')}
                                onBlur={handleBlur('cuisine')}
                                value={values.cuisine}
                            />
                            {touched.cuisine && errors.cuisine && <Text style={styles.error}>{errors.cuisine}</Text>}
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button mode="contained" onPress={() => handleSubmit()} buttonColor='#4B34C3' style={styles.button}>
                                Submit
                            </Button>
                        </View>
                    </View>
                )}
            </Formik>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    label: {
        marginVertical: 10,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 10,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
    button: {
        margin: 4,
    },
    buttonContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: '#8e8e93',
        marginBottom: 15,
    },
});

export default BusinessForm;
