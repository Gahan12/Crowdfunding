import '../App.css';
import HomeIcon from '@mui/icons-material/Home';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';

const SidebarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: '/'
    },
    {
        title: 'Registration',
        icon: <FormatAlignCenterIcon />,
        link: '/Registration'
    },
    {
        title: 'Completed',
        icon: <ChecklistRtlIcon />,
        link: '/success'
    }
]

export default SidebarData;