import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

interface Props {
	count: number;
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
	title: string;
	id: string;
	selectedId: string;
	handleClick: (id: string) => void;
}

const FilterListItem: React.FC<Props> = (props) => {
	const { count, Icon, title, id, selectedId, handleClick } = props;

	const [selected, setSelected] = React.useState(false);

	React.useEffect(() => {
		setSelected(id === selectedId);
	}, [id, selectedId]);

	return (
		<ListItem
			onClick={handleClick.bind(null, id)}
			selected={selected}
			button
		>
			{Icon && (
				<ListItemIcon>
					<Icon fontSize="small" />
				</ListItemIcon>
			)}
			<ListItemText primary={title} />
			<ListItemSecondaryAction>{count}</ListItemSecondaryAction>
		</ListItem>
	);
};

export default FilterListItem;
