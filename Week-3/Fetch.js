function fetchDataFromApi(url, callback){
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`Error! : ${response.status}`);

        }
        return response.json();

    })
    .then(data=>{
        callback(null,data);

    })
    .catch(error => {
        callback(error,null);
    })
}
