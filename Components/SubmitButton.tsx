import { List } from 'immutable';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { InputFieldState } from '../utils';
import { PRONOUNS } from '../consts';

interface SubmitButtonProps {
    userConjugation: List<string>;
    conjugationsGroundTruth: List<string>;
    fieldStates: List<InputFieldState>;
    setFieldStates: (updatedCorrectFields: List<InputFieldState>) => void;
    setNextVerbButtonEnabled: (nextVerbButtonEnabled: boolean) => void;
}


export default function SubmitButton({ userConjugation, conjugationsGroundTruth, fieldStates: correctFields, setFieldStates: setCorrectFields, setNextVerbButtonEnabled }: SubmitButtonProps) {

    function onPressHandler() {
        setCorrectFields(List(userConjugation.toArray().map((value, index) => {
            return value === conjugationsGroundTruth.toArray()[index] ? InputFieldState.Correct : InputFieldState.Wrong;
        })))
        const isCorrect = userConjugation.equals(conjugationsGroundTruth)
        setNextVerbButtonEnabled(isCorrect);
        console.log(isCorrect ? 'Correct' : 'Incorrect')
    }

    return (
        <Button
            buttonColor='green'
            icon={correctFields.every(val => val === InputFieldState.Correct) ? "check" : "send"}
            mode="contained"
            disabled={correctFields.every(val => val === InputFieldState.Correct)}
            onPress={() => { console.log('Pressed'); onPressHandler() }}
            style={{ margin: 10 }}>
            Submit
        </Button>
    );
}
