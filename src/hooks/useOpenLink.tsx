
export const useOpenLink = (term: string) => {
    return window.open(term, '_blank', 'noopener,noreferrer');
}
