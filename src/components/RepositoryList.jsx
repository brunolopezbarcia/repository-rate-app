import react from 'react';
import {View, Text, FlatList} from 'react-native';
import Repository from '../data/repositories.js';

const RepositoryList = () => {
    return (
        <FlatList data={Repository} renderItem={({item: repo}) =>(
            <View key={repo.id} style={{padding: 20, paddingBottom:5, paddingTop:5}}>
                <Text style={{fontWeight: 'bold', marginBottom:5}}>Id: {repo.id}</Text>
                <Text>Fullname: {repo.fullName}</Text>
                <Text>Description: {repo.description}</Text>
                <Text>Language: {repo.language}</Text>
                <Text>Forks: {repo.forksCount}</Text>                    
                <Text>Starts: {repo.stargazersCount}</Text>
                <Text>Rating: {repo.ratingAverage}</Text>
                <Text>ReviewCount: {repo.reviewCount}</Text>
            </View>
        )}/>        
    );
}

export default RepositoryList;

