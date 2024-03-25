import { List } from "immutable";
import { Verb, VerbTense } from "../utils";
import jsonData from './id_dict.json'


// Map JSON data to the Verb interface
export const VERBS: Verb[] = Object.values(jsonData).map((verb: any) => {
    const conjugations: Record<VerbTense, List<string>> = {} as Record<VerbTense, List<string>>;

    Object.keys(VerbTense).forEach((key: string) => {
        const verbTense = VerbTense[key as keyof typeof VerbTense];
        conjugations[verbTense] = List(verb[verbTense]);
    });

    return {
        infinitive: verb.Inifitivo,
        infinitive_english: verb.infinitive_english,
        pastparticiple_english: verb.pastparticiple_english,
        conjugations
    };
});