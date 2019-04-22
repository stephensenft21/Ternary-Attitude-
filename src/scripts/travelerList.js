import travelerCollection from "./travelerCollection";


const editForm = {
    createEditForm (travelToEdit) {
        let travelNameField = document.createElement("p")
        let travelnameLabels = document.createElement("label")
        travelnameLabels.textContent = "Cost"
        let travelNameInput = document.createElement("input")
        travelNameInput.value = travelToEdit.cost


        travelNameField.appendChild(travelnameLabels)
        travelNameField.appendChild(travelNameInput)




        let travelReviewField = document.createElement("p")
        let travelReviewLabel = document.createElement("label")
        travelReviewLabels.textContent = "Review"

        travelReviewInput = document.createElement("input")
        travelReviewInput.value = travelToEdit.review 

        travelReviewField.appendChild(travelReviewLabel)
        travelReviewField.appendChild(travelReviewLabel)


        let updateButton = document.createElement("button")
        updateButton.textContent = "Update"



        updateButton.addEventListener("click", () => {
            let editedEvents = {
                cost: travelNameInput.value,
                review: travelReviewInput.value,
                name: travelToEdit.name,
                description: travelToEdit.description,
                placeId:travelToEdit.placeId
            }
            
            })
        }


        



    }
}