const apiCall = {
    getInterest: () =>{
     return fetch("http://http://localhost:8088/places")
        .then(response => response.json)
    },




    postInterest: (interest) => {
        return fetch ("http://localhost:8088/interests"),{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interest)
        }


    }
};
