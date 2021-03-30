
import { connect } from 'react-redux';
import Home from '@js/routes/Home';

console.log("Detail2")

const DetailRoute = connect(() => ({ hideHero: true })
)((Home));

export default DetailRoute;
