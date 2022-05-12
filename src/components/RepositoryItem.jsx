import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItem = (props) => {
    return (
        <View
            key={props.id} style={styles.container}
        >
            <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
            <StyledText fontWeight='bold' fontSize='subheading'>
                {props.fullName}
            </StyledText>
            <StyledText>
               {props.description}
            </StyledText>
            <StyledText style={styles.language}>
                {props.language}
            </StyledText>
            <RepositoryStats {... props} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 6,
        overflow: 'hidden',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 15🖋,
    }
});

export default RepositoryItem;
