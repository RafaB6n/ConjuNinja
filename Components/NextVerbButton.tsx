import React from 'react';
import { Button } from 'react-native-paper';
import { VERBS } from '../assets/VerbData';
import { VERB_TENSES } from '../utils';

interface NextVerbButtonProps {
    disabled: boolean;
    setVerbId: (nextVerbId: number) => void;
    setVerbTenseIdx: (nextVerbTenseIdx: number) => void;
    resetUserConjugation: () => void;
}


export default function NextVerbButton({ disabled, setVerbId, setVerbTenseIdx, resetUserConjugation }: NextVerbButtonProps) {

    function onPressHandler() {
        setVerbId(Math.floor(Math.random() * VERBS.length));
        setVerbTenseIdx(Math.floor(Math.random() * VERB_TENSES.length))
        resetUserConjugation();
    }

    return (
        <Button
            buttonColor='lightgreen'
            icon='forward'
            // mode="contained"
            disabled={disabled}
            onPress={() => { console.log('Pressed'); onPressHandler() }}
            style={{ margin: 10 }}>
            Next Verb
        </Button>
    );
}
