import React from 'react';
import { View, Text } from 'react-native';


const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    )
}

const styles = {
    viewStyle:{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;