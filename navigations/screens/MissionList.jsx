import React, { Component } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconLogo from 'react-native-vector-icons/MaterialCommunityIcons';

export class MissionList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: []
        }
    }

    handleTampil(data) {

        this.setState({ nama: data })
    }

    render() {
        return (
            <View className="p-4">

                {/* MISI 1 */}
                <View className="container bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">

                    <View className="flex-row gap-3 items-start">
                        {/* LOGO */}
                        <View className="bg-green-100 p-2 rounded-xl">
                            <IconLogo name={'air-filter'} size={32} color={'rgb(74, 222, 128)'} />
                        </View>

                        {/* TEKS */}
                        <View>
                            <Text className="font-visbyMedium text-lg w-44 mb-2">3 Hari tanpa AC</Text>

                            <View className="flex-row">
                                {/* KOIN */}
                                <View className="flex-row gap-[3px] mr-3">
                                    <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                                    <Text className="font-visbyBold text-sm text-amber-400 mb-1">500</Text>
                                </View>

                                {/* WAKTU */}
                                <View className="flex-row gap-[3px]">
                                    <Icon name={'schedule'} size={14} color={'rgb(96, 165, 250)'} />
                                    <Text className="font-visbyBold text-sm text-blue-400 mb-1">3 Hari</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    {/* AKSI */}
                    <Pressable
                        className="bg-green-400 rounded-xl px-3 py-2"
                        // onPress={() => Alert.alert('cancel Button pressed')}
                        onPress={() => this.props.navigation.navigate('Mission')}
                    >
                        <Text className="font-visbyBold text-white">Terima</Text>
                    </Pressable>
                </View>


                {/* MISI 2 */}
                <View className="container bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">

                    <View className="flex-row gap-3 items-start">
                        {/* LOGO */}
                        <View className="bg-green-100 p-2 rounded-xl">
                            <IconLogo name={'car'} size={32} color={'rgb(74, 222, 128)'} />
                        </View>

                        {/* TEKS */}
                        <View>
                            <Text className="font-visbyMedium text-lg w-44 mb-2">Tanpa kendaraan pribadi</Text>

                            <View className="flex-row">
                                {/* KOIN */}
                                <View className="flex-row gap-[3px] mr-3">
                                    <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                                    <Text className="font-visbyBold text-sm text-amber-400 mb-1">500</Text>
                                </View>

                                {/* WAKTU */}
                                <View className="flex-row gap-[3px]">
                                    <Icon name={'schedule'} size={14} color={'rgb(96, 165, 250)'} />
                                    <Text className="font-visbyBold text-sm text-blue-400 mb-1">1 Hari</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    {/* AKSI */}
                    <Pressable
                        className="bg-green-400 rounded-xl px-3 py-2"
                        // onPress={() => this.props.navigation.navigate('Mission')}
                        onPress={this.handleTampil.bind(this, 'kendaraan')}
                    >
                        <Text className="font-visbyBold text-white">Terima</Text>
                    </Pressable>
                </View>

                {/* MISI 3 */}
                <View className="container bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">

                    <View className="flex-row gap-3 items-start">
                        {/* LOGO */}
                        <View className="bg-green-100 p-2 rounded-xl">
                            <IconLogo name={'car'} size={32} color={'rgb(74, 222, 128)'} />
                        </View>

                        {/* TEKS */}
                        <View>
                            <Text className="font-visbyMedium text-lg w-44 mb-2">Tanpa kendaraan pribadi</Text>

                            <View className="flex-row">
                                {/* KOIN */}
                                <View className="flex-row gap-[3px] mr-3">
                                    <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                                    <Text className="font-visbyBold text-sm text-amber-400 mb-1">500</Text>
                                </View>

                                {/* WAKTU */}
                                <View className="flex-row gap-[3px]">
                                    <Icon name={'schedule'} size={14} color={'rgb(96, 165, 250)'} />
                                    <Text className="font-visbyBold text-sm text-blue-400 mb-1">1 Hari</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    {/* AKSI */}
                    <Pressable
                        className="bg-green-400 rounded-xl px-3 py-2"
                        onPress={
                            () => {
                                Alert.alert('Simple Button pressed');
                                this.props.navigation.navigate('Mission');
                                this.handleTampil.bind(this, 'Ac');
                            }}
                    >
                        <Text className="font-visbyBold text-white">Terima</Text>
                    </Pressable>
                </View>

                <Text>{this.state.nama}</Text>

            </View >
        )
    }
}

export default MissionList