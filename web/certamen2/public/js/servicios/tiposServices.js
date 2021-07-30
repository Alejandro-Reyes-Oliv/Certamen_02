const getTipos = async ()=>{
    let res = await axios.get("api/tipos/get");
    return res.data;
}