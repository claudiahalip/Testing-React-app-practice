import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';

it('handles actions of type SAVE_COMMENT', ()=> {
    const action ={
        type: SAVE_COMMENT,
        payload:  'New Commnet'
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Commnet']);
});

it('handles actions with an unknown type',()=>{
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
});