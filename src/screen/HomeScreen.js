import { View, Text, FlatList, StatusBar, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import movieData from '../MovieData.json'
import SearchBar from '../component/SearchBar'
const { height, width } = Dimensions.get("window")
import { connect, useDispatch } from 'react-redux'
import { setMovieData, searchItems, filterItems } from '../redux/action/MovieAction'

const HomeScreen = (props) => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setMovieData(movieData))
    }, [])


    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemCard} >
                <Text style={styles.textStyle}>{item.movieName}</Text>
            </View>
        )
    }
    const inputHander = (text) => {
        setInputValue(text)
        dispatch(searchItems(inputValue, props.MovieData))
    }
    const onClickFliter = () => {
        console.log("MovieData",props.MovieData)
        dispatch(filterItems(props.MovieData))
    }
    return (

        <View>
            <StatusBar
                backgroundColor="#b3e6ff"
                barStyle="dark-content"
            />
            <View style={styles.inputContainer}>
                <View style={{
                    flexDirection: "row", alignItems: "center",
                    justifyContent: 'space-between', width, height: 60,
                    backgroundColor: "#b3e6ff", padding: 10
                }}>

                    <SearchBar

                        searchStyle={{ flex: .85 }}
                        placeholder='Search Movie By Name'
                        searchText={inputValue}
                        onChangeText={(text) => inputHander(text)} />


                    <TouchableOpacity onPress={onClickFliter} style={styles.filterStyle}>
                        <Text style={styles.filterTitle}>filter</Text>
                        <Text style={{ position: 'absolute', bottom: -5 }}>A-Z</Text>

                    </TouchableOpacity>
                </View>



            </View>
            <FlatList
                data={props.filterData}
                renderItem={renderItem}
                keyExtractor={(item) => `${item.id}`}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }}></View>}
            />
        </View>
    )
}
const mapStateToProps = (state) => {
    const { MovieData, filterData } = state.MovieReducer
    console.log("store", MovieData)
    return {
        MovieData,
        filterData
    }
}

export default connect(mapStateToProps, {
    setMovieData, searchItems,
    filterItems
})(HomeScreen)



const styles = StyleSheet.create({
    itemCard: {
        backgroundColor: '#fff5ee',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputStyle: {
        width,
        height: 60,
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        backgroundColor: '#b3e6ff'
    },
    inputContainer: {
        marginBottom: 10
    },
    filterStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
        // alignSelf:'center'
    }
})