interface Props {
    color?: string;
    poster?: string;
    title?: string;
    videoPhoto: string;
    videoUrl: string;
}
export const PosterMediaCard = ({ color, poster, title = '', videoPhoto, videoUrl }: Props) => {
    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: color }}>
            <div className="flex flex-col md:flex-row min-h-75 md:min-h-100">
                {/* Poster Section */}
                <div className="relative w-full md:w-[28%] shrink-0">
                    <div className="relative h-112.5 md:h-full">
                        <img
                            src={poster}
                            alt={`${title} poster`}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay - bottom on mobile, right on desktop */}
                        <div
                            className="absolute inset-0 md:hidden"
                            style={{
                                background: `linear-gradient(to top, ${color}, transparent)`
                            }}
                        />
                        <div
                            className="hidden md:block absolute inset-0"
                            style={{
                                background: `linear-gradient(to right, transparent 75%, ${color})`
                            }}
                        />
                    </div>
                </div>

                {/* Video Thumbnail Section */}
                <div className="relative flex-1 p-4 md:p-6 flex items-center justify-center">
                    <div className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-neutral-700/50">
                        <img
                            src={videoPhoto}
                            alt={`${title} video thumbnail`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
