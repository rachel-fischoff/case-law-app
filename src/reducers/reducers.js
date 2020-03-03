import { FETCH_CASES} from '../actions/index';

// export default function(state = {}, action) {
//   switch (action.type) {
//     case FETCH_CASE:
//       return {...state, [action.payload.data.id]: action.payload.data}
//     case FETCH_CASES:
//       return _.mapKeys(action.payload.data, "id");
//     default:
//       return state;
//   }
// }


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CASES:
      return action.payload.data;
    default:
      return state;
  }
}
