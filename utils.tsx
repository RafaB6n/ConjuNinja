import { List } from 'immutable';

export enum VerbTense {
  PresenteInd = 'Presente Indicativo',
  FuturoInd = 'Futuro Indicativo',
  ImperfectoInd = 'Imperfecto Indicativo',
  PreteritoInd = 'Pretérito Indicativo',
  CondicionalInd = 'Condicional Indicativo',
  PresentePerfectoInd = 'Presente perfecto Indicativo',
  FuturoPerfectoInd = 'Futuro perfecto Indicativo',
  PluscuamperfectoInd = 'Pluscuamperfecto Indicativo',
  PreteritoAnteriorInd = 'Pretérito anterior Indicativo',
  CondicionalPerfectoInd = 'Condicional perfecto Indicativo',
  PresenteSub = 'Presente Subjuntivo',
  ImperfectoSub = 'Imperfecto Subjuntivo',
  FuturoSub = 'Futuro Subjuntivo',
  PresentePerfectoSub = 'Presente perfecto Subjuntivo',
  FuturoPerfectoSub = 'Futuro perfecto Subjuntivo',
  PluscuamperfectoSub = 'Pluscuamperfecto Subjuntivo',
  PresenteImperativoAfirmativo = 'Presente Imperativo Afirmativo',
  PresenteImperativoNegativo = 'Presente Imperativo Negativo',
}

export const VERB_TENSES: VerbTense[] = Object.values(VerbTense);


export interface Verb {
  infinitive: string;
  infinitive_english: string;
  pastparticiple_english: string;
  conjugations: Record<VerbTense, List<string>>
}

export enum InputFieldState {
  Wrong = -1,
  Neutral = 0,
  Correct = 1,
}