import { ImageList, ImageListItem } from "@mui/material"
import { useNumColsImgList } from "../../../hooks/useNumColsImgList"
interface Images {
  img: string,
  title: string
}

interface Props {
  photoList: Images[]
}

export const ImagesList = ({ photoList }: Props) => {

  const { getCols } = useNumColsImgList('photo');

  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} variant="masonry" cols={getCols()} gap={8}>
      {photoList.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={item.img}
            src={item.img} alt={item.title} loading="lazy"
            className='rounded-md' />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
