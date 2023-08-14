import {instance2} from './axios';

export const getNameDeck = async () => instance2.get(`new/shuffle/?deck_count=1`);

export const getInfoCard = async (deck, numcard) => instance2.get(`${deck}/draw/?count=${numcard}`);
