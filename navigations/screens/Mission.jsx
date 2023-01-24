import React, { Component } from 'react'
import { Text, StatusBar, View, Pressable, Alert, FlatList, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Mission extends Component {
    constructor(props) {
        super(props)

        this.state = {
            misi: [
                // {
                //     judul: 'tanpa AC',
                //     koin: 80,
                //     id: 1,
                // },
                // {
                //     judul: 'tanpa AC',
                //     koin: 69,
                //     id: 2,
                // },


            ],
            nama: []

        }


    }

    MisiBerjalan = (data) =>
        <View className="bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">
            <View>
                <View className="flex-row gap-[3px]">
                    <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                    <Text className="font-bold text-sm text-amber-400 mb-1">{data.koin}</Text>
                </View>
                <Text className="font-visbyMedium text-lg">{data.judul}</Text>
            </View>
            <View className="flex-row items-center gap-3">
                <Text className="font-visbyMedium text-xl">21:00:17</Text>
                <Pressable onPress={() => Alert.alert('cancel Button pressed')}>
                    <Icon name={'cancel'} size={24} color={'rgb(239, 68, 68)'} />
                </Pressable>
            </View>
        </View>

    tambah = () => {
        const newData = [
            { judul: 'changeTes', koin: 79 },
            ...this.state.misi,
        ];
        this.setState({ misi: newData });
    }

    render() {
        return (
            <SafeAreaView className="h-screen px-4">
                <View View className="flex-row justify-between py-4" >
                    <Text className="font-visbyBold text-xl">Misi Saya</Text>

                    <View className="flex-row items-center px-2 rounded-md bg-white">
                        <Icon style={{ marginRight: 4 }} name={'stars'} size={16} color={'rgb(251, 191, 36)'} />
                        <Text className="font-visbyBold text-sm">250</Text>
                    </View>
                </View >

                {/* ADD MISSION */}
                <Pressable onPress={() => this.props.navigation.navigate('MissionList')} className="z-10 absolute bottom-6 right-6 rounded-xl bg-green-400 p-3">
                    <Icon name={'add'} size={24} color={'white'} />
                </Pressable>

                <Button
                    title='halo'
                    onPress={this.tambah}
                >
                </Button>

                {/* KONTEN */}
                <View className="container">
                    <FlatList
                        className="mb-24"
                        data={this.state.misi}
                        // extraData={this.state.misi}
                        numColumns={1}
                        renderItem={({ item }) => this.MisiBerjalan(item)}
                    // keyExtractor={item => item.id.toString()}
                    />
                </View>


                {/*
            <Text className="text-3xl font-visbyHeavy">Misi a</Text>
            <Text className="text-3xl font-visbyExtraBold">Misi</Text>
            <Text className="text-3xl font-visbyBold">Misi Shop</Text>
            <Text className="text-3xl font-visbyMedium" style={{ fontFamily: "visbyMedium" }}>Misi</Text>
            <Text className="text-3xl font-visbyRegular">Misi</Text>
            <Text className="text-3xl font-visbyThin">Misi</Text> */}

                <StatusBar style="auto" />
            </SafeAreaView>
        )
    }
}
