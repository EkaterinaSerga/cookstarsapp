import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native'
import Modal from 'react-native-modal'
import Icons from './Icons'
import { colors } from '../../utils/constants'

const UpdateProfileImage = ({
    profileModalVisible,
    setProfileImage,
    setProfileModalVisibility,
    onUpdateProfileImage,
} = {}) => {
    return (
        <Modal
            visible={profileModalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.')
            }}
            transparent={true}
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: -20,
                left: -21,
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Icons setProfileImage={setProfileImage} />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            width: '90%',
                            paddingTop: 15,
                            justifyContent: 'space-between',
                        }}
                    >
                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: colors.orange,
                            }}
                            onPress={() => {
                                setProfileModalVisibility()
                                onUpdateProfileImage()
                            }}
                        >
                            <Text style={styles.textStyle}>Update</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: colors.buttonCancel,
                            }}
                            onPress={() => {
                                setProfileModalVisibility()
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.textStyle,
                                    color: colors.offWhite,
                                }}
                            >
                                Cancel
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default UpdateProfileImage

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 10,
        backgroundColor: colors.background,
        borderRadius: 20,
        padding: 80,
        alignItems: 'center',
        shadowColor: colors.placeHolder,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        maxHeight: 550,
    },
    openButton: {
        backgroundColor: colors.buttonConfirm,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: '45%',
        height: 40,
    },
    textStyle: {
        color: colors.offWhite,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
