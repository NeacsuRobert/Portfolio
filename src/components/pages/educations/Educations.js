import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Timeline } from '@material-ui/lab';
import CustomizedTimeLine from './timeline.jsx';


export default function Educations() {
	return (
		<div>
				
			<div class='card'>
				<div class='card-content'>
					<h6 align="center">
						<strong>EDUCATION</strong>
					</h6>
					<CustomizedTimeLine></CustomizedTimeLine>
				</div>
			</div>
		</div>
	
	);
}
