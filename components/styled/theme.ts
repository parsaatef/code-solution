import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#19857b",
			contrastText: "#fff",
		},
		secondary: {
			main: "#2e76d0",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#333",
			paper: "#424242",
		},
		text: {
			primary: "rgba(255, 255, 255, 0.97)",
			secondary: "rgba(255, 255, 255, 0.54)",
			disabled: "rgba(255, 255, 255, 0.38)",
			hint: "rgba(255, 255, 255, 0.38)",
		},
		action: {
			disabled: "rgba(255, 255, 255, 0.38)",
			active: "rgba(255, 255, 255, 0.88)",
		},
		type: "dark",
	},
	overrides: {
		MuiTableCell: {
			root: {
				borderBottomColor: "rgba(224, 224, 224, 0.1)",
			},
			body: {
				color: "#fff",
			},
			head: {
				color: "#fff",
			},
		},
		MuiTableHead: {
			root: {
				"& > tr.MuiTableRow-root": {
					backgroundColor: "#424242",
				},
			},
		},
		MuiTableRow: {
			root: {
				"&:nth-of-type(odd)": {
					backgroundColor: "#333",
				},
			},
		},
		MuiPaper: {
			root: {
				backgroundColor: "#424242",
				color: "#fff",
			},
		},
		MuiSelect: {
			icon: {
				color: "#fff",
			},
		},
	},
});

export default theme;
