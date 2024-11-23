const getStoreData = () =>{
    const storedData = localStorage.getItem('property');
    if(storedData){
        return JSON.parse(storedData)
    }  
    return [];
}

const saveStoreData = info =>{
    const storedDatas = getStoreData();
    storedDatas.push(info)
    localStorage.setItem('property', JSON.stringify(storedDatas))
    alert('property ar added successfully ') 

}
export  { getStoreData, saveStoreData, }