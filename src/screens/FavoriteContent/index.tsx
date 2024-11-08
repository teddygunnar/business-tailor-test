import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { FavoriteContentProps } from '../../core/_models';

const categories = [
    ['Hawker', 'Restaurant', 'Bistro'],
    ['Food Truck', 'Bakeries', 'Pub'],
    ['Bistro', 'Cafe', 'Restaurant'],
    ['Food Truck', 'Bakeries', 'Pub'],
    ['Bistro', 'Cafe', 'Restaurant'],
];

const FavoriteContent: React.FC<FavoriteContentProps> = (props) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const { navigation } = props;

    const modifiedCategories = useMemo(() => {
        return categories.map((val: string[], index: number) => {
            return val.map((_val: string, _index: number) => {
                return {
                    name: _val,
                    id: (_val + (index).toString())
                }
            })
        })
    }, [categories]);

    const toggleCategory = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else if (selectedCategories.length < 5) {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const isSelected = (category: string) => selectedCategories.includes(category);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Your Favorite Content</Text>
            <Text style={styles.subtitle}>Please select at least 3 categories</Text>
            <View style={styles.grid}>
                {modifiedCategories.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map(({ name, id }) => (
                            <TouchableOpacity
                                key={id}
                                style={[styles.category, isSelected(id) && styles.selectedCategory]}
                                onPress={() => toggleCategory(id)}
                            >
                                <Text style={[styles.categoryText, isSelected(id) && styles.selectedCategoryText]}>
                                    {name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
            <View style={styles.footer}>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('BusinessForm')}
                    style={styles.nextButton}
                    disabled={selectedCategories.length < 3}
                >
                    Next
                </Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 20,
    },
    grid: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    category: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        width: 'auto',
        minWidth: 100,
    },
    selectedCategory: {
        backgroundColor: '#4B34C3',
        borderColor: '#4B34C3',
    },
    categoryText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    selectedCategoryText: {
        color: '#fff',
    },
    footer: {
        width: '100%',
    },
    nextButton: {
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: '#4f62c0',
    },
});

export default FavoriteContent;
