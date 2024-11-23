import { useEffect, useState } from "react";
import AddProperty from "../components/Dashboard/AddProperty";
import AllProperty from "../components/Dashboard/AllProperty";
import Container from "../components/Shared/Container";
import { imageUpload } from '../utils/index'
import toast from "react-hot-toast";
const Dashboard = () => {
    const [properties, setProperties] = useState([]);
    const [propertyType, setPropertyType] = useState();
    const [item, setitem] = useState([])
    const [status, setStatus] = useState();

    const fetchProperties = () => {
        const storedData = JSON.parse(localStorage.getItem("properties")) || [];
        setProperties(storedData);
    };
    
    const handleByNew = () => {
        if (properties && properties.length > 0) {
            const sortedByNew = [...properties].sort((a, b) => {
                const dateA = new Date(b.createAt);
                const dateB = new Date(a.createAt);
                return dateA - dateB;
            });
            setitem(sortedByNew);
        }
    };
    const handleByOld = () => {
        if (properties && properties.length > 0) {
            const sortedByOld = [...properties].sort((a, b) => {
                const dateA = new Date(b.createAt);
                const dateB = new Date(a.createAt);
                return dateB - dateA;
            });
            setitem(sortedByOld);
        }
    };

    useEffect(() => {
        setPropertyType([... new Set(properties?.map(item => item.propertyType))])
        setStatus([... new Set(properties?.map(item => item.status))])
        setitem(properties)
    }, [properties])

    const handlefilter = filter => {
        const filterItem = properties?.filter(items => items.propertyType === filter);
        setitem(filterItem);
    }
    const handleStatus = filter => {
        const filterItem = properties?.filter(items => items.status === filter);
        setitem(filterItem);
    }

    const saveData = (data) => {
        const existingData = JSON.parse(localStorage.getItem('properties')) || [];
        existingData.push(data);
        localStorage.setItem('properties', JSON.stringify(existingData));
        setProperties(existingData);
    };

    // Fetch data from localStorage
    useEffect(() => {
        fetchProperties();
       
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image_url = form.image.files[0];
        const image = await imageUpload(image_url)
        const price = form.price.value;
        const area = form.area.value;
        const location = form.location.value;
        const propertyType = form.propertyType.value;
        const status = form.status.value;
        const condition = form.condition.value;
        const description = form.description.value;
        const createAt = (new Date()).toDateString();

        const info = {
            title,
            image,
            price,
            area,
            location,
            propertyType,
            status,
            condition,
            description,
            createAt
        }
        saveData(info);
        form.reset();
        toast.success('Property saved successfully!')

    }

    return (
        <div className="my-[120px]">
            <Container>
            <AddProperty handleSubmit={handleSubmit}/>
            <AllProperty propertyType={propertyType} handlefilter={handlefilter} handleStatus={handleStatus} handleByNew={handleByNew} handleByOld={handleByOld} item ={item} status={status}></AllProperty>
            </Container>
            
        </div>
    );
};

export default Dashboard;