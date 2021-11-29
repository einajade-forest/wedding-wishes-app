import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

export default function CreditsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Application Icons{'\n'}</Text>
            <Text style={styles.credit}>
                <Text>
                    <Text>'home-outline' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Home screen when tab is in focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <Text>
                    <Text>'home' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Home screen when tab is out of focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <Text>
                    <Text>'bulb-outline' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Topics screen when tab is in focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <Text>
                    <Text>'bulb' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Topics screen when tab is out of focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <Text>
                    <Text>'bookmark-outline' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Quotes screen when tab is in focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <Text>
                    <Text>'bookmark' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Quotes screen when tab is out of focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <Text>
                    <Text>'wine-outline' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Descriptions of Wine screen when tab is in focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <Text>
                    <Text>'wine' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Descriptions of Wine screen when tab is in focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <Text>
                    <Text>'add-circle-outline' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Add More screen when tab is in focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <Text>
                    <Text>'add-circle' by </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://ionic.io') }}>Iconic</Text><Text> licenced under the </Text><Text style={styles.hyperlink} onPress={() => { Linking.openURL('https://github.com/ionic-team/ionicons/blob/main/LICENSE') }}>MIT License</Text><Text> is used to represent the Add More screen when tab is in focus on the navigation bar
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
            </Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '3%',
    },
    h1: {
        padding: '3%',
        fontSize: 16,
        fontWeight: 'bold',
    },
    credit: {
        fontSize: 13,
    },
    hyperlink: {
        color: '#713597',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
});