const travelerCollection = {
   getAlltravels () {
      return fetch ("")
      .then(response => response.json())
         
   },
   getAlltravels () {

      return fetch ("")
   },


   postAllTravels(travelToSave) {
      return fetch("", {
        method: "POST",
        headers: {
           "Content-Type": "application/json"
        },
         body: JSON.stringify(travelToSave)

      })
      
   },

   deleteTravels(eventId){

      return fetch (``, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json"
         }
      })
   },

   getTravel(eventId) {
      return fetch(``)
      .then(response => response.json())
   },

   editTravels(eventId, eventToEdit) {
      return fetch (``, {
         method: "PUT",
         header: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(eventToEdit)
      })
   },
}


export default travelerCollection