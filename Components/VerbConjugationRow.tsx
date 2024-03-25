import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { PRONOUNS } from '../consts';
import { InputFieldState } from '../utils';
import { List } from 'immutable';

interface VerbConjugationRowProps {
    person: number;
    userConjugation: List<string>;
    onTextChange: (text: string) => void;
    fieldState: InputFieldState;
}

type backgroundcolorMapType = { [key in InputFieldState]: string };

const INPUTFIELDSTATE_TO_BACKGROUNDCOLOR_MAP: backgroundcolorMapType = {
    [InputFieldState.Wrong]: 'tomato',
    [InputFieldState.Neutral]: 'lightgrey',
    [InputFieldState.Correct]: 'lightgreen',
}

export default function VerbConjugationRow({ person, userConjugation, onTextChange, fieldState }: VerbConjugationRowProps) {
    console.log('FieldState: ' + fieldState)
    console.log('Background color for ' + person + ' should be ' + INPUTFIELDSTATE_TO_BACKGROUNDCOLOR_MAP[fieldState])


    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'right', // TODO: Check IDE error message here
            alignItems: 'center',
            margin: 5
        }}>
            <Text style={{ fontSize: 16 }}>
                {PRONOUNS[person]}
            </Text>
            <TextInput
                style={{
                    backgroundColor: INPUTFIELDSTATE_TO_BACKGROUNDCOLOR_MAP[fieldState],
                    height: 40, marginLeft: 10
                }}
                placeholder="Conjugated verbform"
                value={userConjugation.get(person)}
                onChangeText={onTextChange}
            // defaultValue="Conjugated verbform"
            />
        </View>
    );
}
