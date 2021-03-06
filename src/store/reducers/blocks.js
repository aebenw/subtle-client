export default function blockReducer(state = {}, action){
  switch(action.type){
    case "SELECT_BLOCK":
      return {...state, currentBlock: action.block};

      case "ADD_CHANNEL_BLOCK":
        let copy =  [...state.currentBlock.channels, action.channel]
        return {...state, currentBlock: {...state.currentBlock, channels: copy}}

      case "ADD_COMMENT":
        let altered = [...state.currentBlock.comments, action.comment]
        return {...state, currentBlock: { ...state.currentBlock, comments: altered}}

    default:
    return state;
  }
}
