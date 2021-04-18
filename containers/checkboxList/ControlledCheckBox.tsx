import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

interface Props {
	defaultChecked: boolean;
	labelId: string;
}

const ControlledCheckBox: React.FC<Props> = (props) => {
	const { defaultChecked, labelId } = props;

	const [checked, setChecked] = React.useState(false);

	React.useEffect(() => {
		if (defaultChecked !== checked) {
			setChecked(defaultChecked);
		}
	}, [defaultChecked]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
	};

	return (
		<Checkbox
			edge="start"
			checked={checked}
			onChange={handleChange}
			tabIndex={-1}
			disableRipple
			inputProps={{ "aria-labelledby": labelId }}
		/>
	);
};

export default ControlledCheckBox;
