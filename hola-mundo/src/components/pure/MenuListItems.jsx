import { List,ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings, Task } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const getIcon = () => {
    switch (icon) {
        case 'HOME':
            return (<Home/>)
        case 'TASK':
            return (<Task/>)
        case 'SETTINGS':
            return (<Settings/>)
        default:
            return (<Home/>)
    }
}

const MenuListItems = ({list}) => {
    
    const navigate = useNavigate();

    return (

        <List>
            {list.map(({text, path, icon}, index) =>
                (
                    <ListItem key={index} button onClick={() => navigate(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )
            )}
        </List>

    )
}

export default MenuListItems;