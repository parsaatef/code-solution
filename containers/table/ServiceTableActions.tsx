import { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { yellow } from "@material-ui/core/colors";
import { useAppState } from "../../app/store";
import { addToFavorite, removeFromFavorite } from "../../app/actions";
import { useRouter } from "next/router";
import { WrapperCursor } from "../../components/styled/general";
import { ServiceModel } from "../../types";

interface Props {
	row: ServiceModel;
}

const ServiceTableActions: React.FC<Props> = (props) => {
	const { row } = props;

	const { name } = row;

	const router = useRouter();

	const { state, dispatch } = useAppState();

	const { favorites } = state;

	const [isStarred, setStarred] = useState(false);

	useEffect(() => {
		setStarred(favorites.includes(name));
	}, [favorites, name]);

	const handleFavorite = (type) => {
		if (type === "add") {
			dispatch(addToFavorite(name));
		} else {
			dispatch(removeFromFavorite(name));
		}
	};

	const openDetail = () => {
		router.push(`/service/${name}/overview`);
	};

	return (
		<WrapperCursor>
			<OpenInNewIcon
				onClick={openDetail}
				color="action"
				fontSize="small"
			/>
			<EditIcon color="action" fontSize="small" />
			{!isStarred ? (
				<StarBorderIcon
					onClick={handleFavorite.bind(null, "add")}
					color="action"
					fontSize="small"
				/>
			) : (
				<StarIcon
					onClick={handleFavorite.bind(null, "remove")}
					style={{ color: yellow[300] }}
					fontSize="small"
				/>
			)}
		</WrapperCursor>
	);
};

export default ServiceTableActions;
