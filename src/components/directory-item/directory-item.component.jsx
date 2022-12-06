import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({directory}) =>{
    const {title, imageUrl, route} = directory;
    const navigate = useNavigate();
    const navigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={navigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;