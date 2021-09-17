import React from 'react';
import {
    Modal,
    ModalProps,
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & ModalProps & {
    textModal: string;
    firstOptionText: string;
    secondOptionText: string;
    isVisible: boolean;
    onClose: () => void;
}

export function ConfirmationModal({ textModal, firstOptionText, secondOptionText, isVisible, onClose, ...rest }: Props) {
    return (
        <Modal
            transparent={true}
            animationType={"slide"}
            visible={isVisible}>

            <View style={styles.container}>
                <View style={styles.modalWindow}>
                    <View style={styles.modalTitle}>
                        <Text>
                            {textModal}
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer} >
                        <TouchableOpacity
                            style={styles.confirmationButton}
                            activeOpacity={0.7}
                            {...rest}>
                            <Text>
                                {firstOptionText}
                            </Text>
                        </TouchableOpacity>
                        <View style={ styles.buttonsLine }/>
                        <TouchableOpacity
                            style={styles.confirmationButton}
                            activeOpacity={0.7}
                            onPress={onClose}>
                            <Text>
                                {secondOptionText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}