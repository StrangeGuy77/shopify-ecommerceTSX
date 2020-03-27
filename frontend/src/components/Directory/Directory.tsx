import "./DirectoryStyles.scss";
import * as React from "react";
import MenuItem from "../MenuItem/MenuItem";
import {connect} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directorySelector";
import GlobalState from "../../redux/state";

const Directory: React.FC<IProps> = ({sections}) => {
	return (
		<div className='directory-menu'>
			{sections.map(({id, ...anotherSectionProps}) => {
				return <MenuItem {...anotherSectionProps} key={id} />;
			})}
		</div>
	);
};

const mapStateToProps = (state: GlobalState) => ({
	sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);

interface IProps {
	sections: Items[];
}

export interface Items {
	id: number;
	imageUrl: string;
	linkUrl?: string;
	size?: string;
	title: string;
}
