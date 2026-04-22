export type MediaType = 'Album' | 'Single' | 'EP' | 'Soundtrack' | 'Remix' | 'Extra';

export interface MusicInfo {
    releasedYear?: number;
    releasedType?: MediaType;
}