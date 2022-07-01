import {createGlobalStyle} from "styled-components";

/* Main menu pics imports*/

import charactersMenuItemCover from "../Images/Covers/charactersCover.jpg";
import moviesMenuItemCover from "../Images/Covers/moviesCover.jpg";
import planetsMenuItemCover from "../Images/Covers/planetsCover.jpg";
import speciesMenuItemCover from "../Images/Covers/speciesCover.jpg";

/* Reseting CSS */

const GlobalStyle = createGlobalStyle`html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	min-width: 380px;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* General Menu Links Adjusts */

.headerMenuLink{
	text-decoration: none;
}

/* Mobile Menu Icon Adjusts */

.mobileMenuIcon{
	width: 100%;
	height: 100%;
}

.mobileMenuItemIcon{
	width: 15px;
	height: 15px;
	margin-right: 8px;
}


/* Mobile Menu Items Styles */

.mobileMenuItem{
	font-weight: 500 !important;
	font-size: 10px !important;
	line-height: 10px !important;
	color: #E5E5E0 !important;
	text-transform: uppercase !important;
	margin: 4px 0px !important;
	display: flex;
	align-items: center;
}


/* Main Menu Changes */

/* Changing the grid position for every item container */

.charactersContainer{

	@media (max-width: 1122px){
    grid-column: 1;
		grid-row: 1;
  }
}

.moviesContainer{
	@media (max-width: 1122px){
    grid-column: 2;
		grid-row: 1;
  }
}

.planetsContainer{
	@media (max-width: 1122px){
    grid-column: 1;
		grid-row: 2;
  }
}

.speciesContainer{
	@media (max-width: 1122px){
    grid-column: 2;
		grid-row: 2;
  }
}
/* Changing main menu items background */
.charactersBg, .moviesBg, .planetsBg, .speciesBg{
	display: flex;
	align-items: flex-end;
	object-fit: cover;
}
.charactersBg{
	background-image: url(${charactersMenuItemCover});
}

.moviesBg{
	background-image: url(${moviesMenuItemCover});
}

.planetsBg{
	background-image: url(${planetsMenuItemCover});
}

.speciesBg{
	background-image: url(${speciesMenuItemCover});
}

/* Changing main menu items titles position so it can fit in the img div */

.charactersItemTitle, .moviesItemTitle, .planetsItemTitle, .speciesItemTitle{
	text-align: center;
}
`;
export default GlobalStyle;