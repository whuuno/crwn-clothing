import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles.jsx';

const DirectoryItem = ({directory}) =>{
    const {title, imageUrl} = directory;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;