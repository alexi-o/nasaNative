import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';

const NasaDetail = ({ rover }) => {

    const { 
        headerContentStyle, 
        headerTextStyle, 
        thumbnailContainerStyle, 
        thumbnailStyle,
        imageStyle
    } = styles;

    return(
        <Card>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{rover.rover.name}</Text>
                    <Text>Landing Date: {rover.rover.landing_date}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    source={{ uri: rover.img_src }}
                    style={imageStyle}
                />
            </CardSection>
            <CardSection>
                <Button>
                    Learn More
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle :{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default NasaDetail;