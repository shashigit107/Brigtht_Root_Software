import {View,TextInput,Text,StyleSheet} from "react-native";
import React from "react";

const SearchBar = ({searchText,onChangeText,placeholder="" ,searchStyle=false})=>{
    return(
        <View style={{...searchStyle}}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={searchText}
                onChangeText={onChangeText}
                // onSubmitEditing={props.onSubmit}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
   
    input:{
        backgroundColor:"#b3e6ff",
        padding: 10,
        // borderRadius: 10,
        color: "#000",
        fontSize:20,
        fontWeight:"bold",
        // borderWidth: 1
    }
});