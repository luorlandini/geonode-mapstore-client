
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import  { toggleFilter }  from '@js/actions/gnfilters';
import Home from '@js/routes/Home';

const SearchRoute = connect(
    createSelector([
        state => state?.gnfilters?.isToggle || false
    ], (isToggle) => ({
        isToggle
    })),
    () => ({ hideHero: true, isToggle:false, onToggleFilter: toggleFilter })
)((Home));

export default SearchRoute;
