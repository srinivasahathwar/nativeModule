import React, { useState } from 'react';
import { NativeModules, Button, View, Text } from 'react-native';

const { RandomNumberManager } = NativeModules;

const App = () => {
    const [randomNumber, setRandomNumber] = useState(null);
    const [error, setError] = useState(null);

    const fetchRandomNumber = () => {
        RandomNumberManager.getRandomNumber((err:any, num:any) => {
            if (err) {
                setError(err);
                setRandomNumber(null);
            } else {
                setError(null);
                setRandomNumber(num);
            }
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Generate Random Number" onPress={fetchRandomNumber} />
            {error && <Text>Error: {error}</Text>}
            {randomNumber && <Text>Random Number: {randomNumber}</Text>}
        </View>
    );
};

export default App;