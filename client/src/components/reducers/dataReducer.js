
export const initialState ={
    hasData: false,
    serverData: [],
    stylistData: [],
    stylist: '',
    clientData: [],
    reviews: [],
    imageUrl: '',
    images: [],
    cities: [],
    city: '',
    isGetting: false,
    error: '',
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        
        case 'INITIALIZE_DATA':
            return{ ...initialState};

        case 'GET_DATA_START':
            return{
                ...state,
                isGetting: true,
                error: ''
            };

        case 'GET_DATA_SUCCESS':
            return{
                ...state,
                isGetting: false,
                serverData: action.payload
            }

        case 'GET_DATA_FAILURE':
            return{
                ...state,
                error: action.payload
            }

        case 'IMPORT_CUSTOMER_DATA':
            return {
                ...state,
                customerData: action.payload,
                hasData: true,
            }
        
        case 'IMPORT_STYLIST_DATA':
            return {
                ...state,
                stylistData: action.payload,
                hasData: true,
            }

        case 'SET_CITIES':
            return{
                ...state,
                cities: action.payload
            }
        case 'SET_CITY':
            return{
                ...state,
                city: action.payload
            }

        case 'SET_STYLIST':
            return{
                ...state,
                stylist: action.payload
            }

        case 'SET_CUSTOMER':
            return{
                ...state,
                customer: action.payload
            }
        case 'DELETE_SAVED_STYLIST':
            return {
                ...state,
                savedStylist: state.savedStylist.filter(el=> el !== action.payload)
            }
        case 'ADD_REVIEW':
            return{
                ...state,
                reviews: [...state.reviews, action.payload]
            }
        case 'DELETE_REVIEW':
            return{
                ...state,
                reviews: state.reviews.filter(el=> el !== action.payload),
                stylistData: state.stylistData.filter(obj => obj.review !== action.payload),
            };

        case 'ADD_IMAGE':
            return{
                ...state,
                photos: [...state.photos, action.payload]
            };
        case 'DELETE_PHOTO':
            return{
                ...state,
                photos: state.photos.filter(el=> el !== action.payload),
            };
        
        case 'RESET_DATA':
            return {
                ...initialState
            };
        
        default: return state;

    }
}