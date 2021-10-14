const initialState = {
    breeds: [],
    allBreeds: [],
    detail: [],
    temperaments: []
}

export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case "GET_BREEDS": 
        return {
            ...state,
            breeds: action.payload,
            allBreeds: action.payload
        }

        case "GET_BREEDS_BY_NAME":
        return {
            ...state,
            breeds: action.payload
        }

        case "GET_BREED_DETAIL":
        return {
            ...state,
            detail: action.payload
        }

        case "GET_TEMPERAMENTS":
        return {
            ...state,
            temperaments: action.payload
        }

        case "POST_BREED":
        return {
            ...state
        }

       case "ORDER_ASC":
           if(action.payload === "name") {
            return {
                ...state, 
                breeds: [...state.allBreeds].sort((a, b) => (a[action.payload].toLowerCase() > b[action.payload].toLowerCase()) ? 1 : -1)
            }
        } else {
            return {
                ...state,
                breeds: [...state.allBreeds].sort(function(a, b){
                    if (a.weight[0] > b.weight[0]) return 1;
                    if (a.weight[0] < b.weight[0]) return -1;
                    return 0;
                })
            }
        }

        case "ORDER_DES":
            if(action.payload === "name") {
                return {
                    ...state,
                    breeds: [...state.allBreeds].sort((a, b) => (a[action.payload].toLowerCase() < b[action.payload].toLowerCase()) ? 1 : -1)
                }
            } else {
                return {
                    ...state,
                    breeds: [...state.allBreeds].sort(function(a, b){
                        if (a.weight[1] > b.weight[1]) return -1;
                        if (a.weight[1] < b.weight[1]) return 1;
                        return 0;
                    })
            }
        }

        case "FILTER_BREEDS_BY_TEMPERAMENTS":
            const allBreeds = state.allBreeds;
            const filteredBreeds = action.payload === "All" ? allBreeds : allBreeds.filter(el => {
                let temps = el.temperaments?.map(t => t?.name);
                if(temps){
                    return temps.includes(action.payload)
                } else {
                    return false;
                }
            })
        return {
            ...state,
            breeds: filteredBreeds
        }

        case "FILTER_CREATED":
            const createdBreeds = action.payload === "Created" ? state.allBreeds.filter(el => el.created) : state.allBreeds.filter(el => !el.created)
        return {
            ...state,
            breeds: action.payload === "All" ? state.allBreeds : createdBreeds
        }

        default: 
        return state;
    }
}