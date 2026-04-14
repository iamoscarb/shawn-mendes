export type MediaType = 'Album' | 'Single' | 'EP' | 'Soundtrack' | 'Remix' | 'Extra';
type ValidYear = `${number}${number}${number}${number}`;

export interface MusicInfo {
    releasedYear?: ValidYear;
    releasedType?: MediaType;
}