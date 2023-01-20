import * as types from "./actiontypes"

const initialState = {
    alldata: null,
    massage: null,
    otpDetail:null,
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.REGISTRATION_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case types.REGISTRATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                massage: payload
            }

        case types.REGISTRATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                // massage: ""
            }

        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                alldata: payload
            }

        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                alldata: null
            }

            case types.OTP_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                    isError: false
                }
    
            case types.OTP_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    otpDetail: payload
                }
    
            case types.OTP_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                    otpDetail: null
                }


        default:
            return state
    }
}