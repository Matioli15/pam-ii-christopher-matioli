import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "Grey",
            
          }}
        >
          Camaro 69 
        </Text>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.39f26bc71a20047e8abaa0913caff3a8?rik=LGAF2Rnf1FnIyQ&pid=ImgRaw&r=0://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png',
          }}
          style={{ width: 500, height: 210, alignSelf: "center" }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1, 
          padding: 5,
          margin: 15,
        }}
        defaultValue="O que você acha desse carro?"
      />
    </ScrollView>
  );
}

export default Pokemon;