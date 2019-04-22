const createTravels = {
  creatingTravels(travelObject) {
    const article = document.createElement("fieldset");

    const name = document.createElement("h3");
    name.textContent = travelObject.name;

    const description = document.createElement("section");
    description.textContent = travelObject.description;
    const cost = document.createElement("section");
    cost.textContent = travelObject.cost;
    const place = document.createElement("section");
    place.textContent = travelObject.place;
    const review = document.createElement("section")
    review.textContent = travelObject.review


    let edit = document.createElement("button")
    edit.textContent = "Edit Event"

    edit.setAttribute("id", `editEvent --${travelObject.id}`)
    edit.addEventListener("click", () => {
        let articleID = evemt.target.id

    })
  }
};

const deleteButton = document.createElement("button")
deleteButton.textContent = "Delete Event"
deleteButton.setAttribute("id", `deleteEvent--${travelObject.id}`)
deleteButton.addEventListener("click", () => {
    alert("Do you really want to delete?")
    let deleteTravelID = event.target.id.split("--")[1]
    travelerCollection.delete
})

console.log(travelObject);
