// ex-js-async-chef

import dayjs from 'dayjs';

// Sanck 1
 
async function getChefBirthday(id) {
    return await new Promise((result, reject) => {
        try {
            fetch(`https://dummyjson.com/recipes/${id}`)
                .then(res => res.json())
                .then(recipe => {
                    const userId = recipe.userId;
                    
                    return fetch(`https://dummyjson.com/users/${userId}`)
                        .then(userRes => userRes.json())
                        .then(user => {
                            const dataCustom = dayjs(user.birthDate).format('MMMM D, YYYY')
                            console.log("dati utente", { ...recipe, user, dataCustom })})
                        .catch(reject);
                })
                .catch(reject);
        } catch (error) {
            console.error(error);
        };
    });
}

getChefBirthday(1)
.then(ricetta => console.log("questa è la ricetta dello chef", ricetta))
.then(birthday => console.log('', birthday))
.catch(error => console.error("impossibile ottenere la ricetta", error.message));
    
