import { useNavigate } from 'react-router-dom';
import * as schematicsAPI from '../../utilities/schematic-api';
import PostSchematic from '../PostSchematic/PostSchematic';

export default function CreateScematic({ schematics, setSchematics }) {

    const navigate = useNavigate();

    async function addSchematic(schematic) {
        const newSchematic = await schematicsAPI.createSchematic(schematic);
        setSchematic([...schematics, newSchematic]);
    }
    
    function handleSchematic(formData) {
        addSchematic(formData);
        navigate('/schematics');
    }

    return (
        <PostSchematic mode={"create"} onSubmit={handleSchematic}/>
    );
}