import React from 'react';
import { Text, View } from 'react-native';

interface VerbInfinitiveCardProps {
    infinitive: string;
    translation: string;
}

export default function VerbInfinitiveCard({ infinitive, translation }: VerbInfinitiveCardProps) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={{ padding: 5, fontSize: 16, textAlign: 'center' }}>
                {'Infinitivo: '}
                <Text style={{ fontWeight: 'bold' }}>{infinitive}</Text>
                {'\n'}
                <Text style={{ fontStyle: 'italic' }}>
                    'Inglés: ' {translation}
                </Text>
            </Text>
        </View>
    );
}

