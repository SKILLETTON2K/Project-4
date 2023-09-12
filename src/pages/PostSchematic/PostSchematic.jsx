import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as schematicAPI from '../../utilities/schematic-api';
import './PostSchematic.css'
import Footer from '../../components/Footer/Footer';

export default function PostSchematic({ initialState, onSubmit, mode }) {
    const [schematics, setSchematics] = useState([]);
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        const newFormData = {...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }

    function wrapSchematic(evt) {
        evt.preventDefault();
        onSubmit(formData);
    }

    useEffect(function() {
        async function getSchematics() {
            const schematics = await schematicAPI.getAll();
            setSchematics(schematics);
        }
        getSchematics();
    }, []);

    return (
        <div className="post-schem">
            { mode === "create" ? (
                <h1>List your build</h1>
            ) : (
                <h1>Post your schematic</h1>
            )
            }
            <form className="form-container" onSubmit={wrapSchematic}>
                <label><h2>Example Photo</h2></label>
                <input
                    name="img"
                    type="url"
                    value={formData.img}
                    onChange={handleChange}
                    placeholder='Photo URL'
                />
                <h2>Schematic Details</h2>
                <label><h4>Title</h4></label>
                <input
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Name of the build"
                />
                <label><h4>Description</h4></label>
                <input
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Decribe your build"
                />
                <label><h4>Blocks</h4></label>
                <input
                    name="blocks"
                    type="number"
                    value={formData.blocks}
                    onChange={handleChange}
                    placeholder="1+"
                />
                <label><h4>.schem File</h4></label>
                <input
                    name="file"
                    type="file"
                    value={formData.blocks}
                    onChange={handleChange}
                />
                    <Link to="/schematics"><button className="post-schem-btn">Go Back</button></Link>
            </form>
        <Footer />
      </div>
    );
}

PostSchematic.defaultProps = { 
    initialState: {
        title: "",
        img: "",
        description: "",
        blocks: "",
        file: ""
    }
}