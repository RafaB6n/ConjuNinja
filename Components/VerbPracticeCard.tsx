import { List } from "immutable";
import React from "react";
import { Text, View } from "react-native";
import { PRONOUNS } from '../consts';
import { InputFieldState, VerbTense } from "../utils";
import VerbConjugationRow from "./VerbConjugationRow";


type VerbPracticeCardProps = {
    userConjugation: List<string>;
    setUserConjugation: (newUserConjugation: List<string>) => void;
    fieldStates: List<InputFieldState>;
    setFieldStates: (newFieldStates: List<InputFieldState>) => void;
    verbTense: VerbTense
};

export default function VerbPracticeCard({ userConjugation, setUserConjugation, fieldStates, setFieldStates, verbTense }: VerbPracticeCardProps) {

    function clearTextInputField(indexToClear: number) {
        handleTextChange(indexToClear, '');
    }

    function handleTextChange(modifiedIndex: number, newText: string) {
        console.log('Modifying index ' + modifiedIndex + ' to ' + newText)
        const newUserConjugation = userConjugation.map((conjugation, i) => {
            return i === modifiedIndex ? newText : conjugation;
        }
        );
        setUserConjugation(newUserConjugation);
        const newFieldStates = List(fieldStates.toArray().map((fieldState, i) => {
            return i === modifiedIndex ? InputFieldState.Neutral : fieldState;
        }))
        setFieldStates(newFieldStates);
    }
    console.log('FieldStates: ' + fieldStates.toArray())
    console.log('verbTense = ' + verbTense)

    return <View>
        <Text style={{ padding: 5, fontSize: 16, textAlign: 'center' }}>
            {'Conjugate in the verb in '}
            <Text style={{ fontWeight: 'bold' }}>
                {verbTense.toLowerCase()}
            </Text>
        </Text>
        {Array.from({ length: Object.keys(PRONOUNS).length / 2 }, (val, i) => i).map(person =>
            <VerbConjugationRow
                person={person}
                userConjugation={userConjugation}
                onTextChange={(updatedText) => {
                    handleTextChange(person, updatedText);
                    console.log('Input field ' + person + " updated to: " + updatedText)
                }}
                fieldState={fieldStates.get(person, InputFieldState.Neutral)}
            />)}
    </View>
}