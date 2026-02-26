import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
interface Images {
  img: string,
  title: string
}

interface Props {
  photoList: Images[]
}

export const ImagesList = ({ photoList }: Props) => {
  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} variant="woven" cols={3} gap={8}>
      {photoList.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={item.img}
            src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
