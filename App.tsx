import { StatusBar } from 'expo-status-bar';
import { List } from 'immutable';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from "react-native-paper";
import NextVerbButton from './Components/NextVerbButton';
import SubmitButton from './Components/SubmitButton';
import VerbInfinitiveCard from "./Components/VerbInfinitiveCard";
import VerbPracticeCard from './Components/VerbPracticeCard';
import { VERBS } from './assets/VerbData';
import { PRONOUNS } from './consts';
import { InputFieldState, VERB_TENSES, Verb, VerbTense } from './utils';


export default function App() {
    const [verbId, setVerbId] = useState(Math.floor(Math.random() * VERBS.length))
    const [verbTenseIdx, setVerbTenseIdx] = useState(Math.floor(Math.random() * VERB_TENSES.length))

    const [userConjugation, setUserConjugation] = useState(List(Array(Object.keys(PRONOUNS).length / 2).fill('')));
    const [fieldStates, setFieldStates] = useState(List(Array(Object.keys(PRONOUNS).length / 2).fill(InputFieldState.Neutral)));
    const [nextVerbButtonEnabled, setNextVerbButtonEnabled] = useState(false)

    const verb: Verb = VERBS[verbId]
    const tense: VerbTense = VERB_TENSES[verbTenseIdx]
    // console.log(verb)
    // console.log(tense)
    console.log(verb.conjugations[tense].toArray())

    return (
        <PaperProvider>
            <StatusBar style="light" />
            <View style={styles.container}>
                <VerbInfinitiveCard
                    infinitive={verb.infinitive}
                    translation={verb.infinitive_english} />
                <VerbPracticeCard
                    userConjugation={userConjugation}
                    setUserConjugation={setUserConjugation}
                    fieldStates={fieldStates}
                    setFieldStates={setFieldStates}
                    verbTense={tense} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <SubmitButton
                        userConjugation={userConjugation}
                        conjugationsGroundTruth={verb.conjugations[tense]}
                        fieldStates={fieldStates}
                        setFieldStates={setFieldStates}
                        setNextVerbButtonEnabled={setNextVerbButtonEnabled} />
                    <NextVerbButton
                        disabled={!nextVerbButtonEnabled}
                        setVerbId={setVerbId}
                        setVerbTenseIdx={setVerbTenseIdx}
                        resetUserConjugation={() => {
                            console.log('resetUserConjugationTriggered');
                            setNextVerbButtonEnabled(false);
                            setVerbId(Math.floor(Math.random() * VERBS.length));
                            setVerbTenseIdx(Math.floor(Math.random() * VERB_TENSES.length));
                            setUserConjugation(List(Array(Object.keys(PRONOUNS).length / 2).fill('')));
                            setFieldStates(List(Array(Object.keys(PRONOUNS).length / 2).fill(InputFieldState.Neutral)));
                        }}
                    />
                </View>
            </View>
        </PaperProvider>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
