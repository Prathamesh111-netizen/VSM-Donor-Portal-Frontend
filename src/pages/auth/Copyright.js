import * as React from "react";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = (props) => {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Vsm Donor Management Portal
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
};

export default Copyright;
