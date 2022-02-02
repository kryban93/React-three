import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const routes = [
	{
		name: 'box',
		route: '/box',
	},
	{
		name: 'dots',
		route: '/dots',
	},
	{
		name: 'airplane model',
		route: '/gltfairplane',
	},
	{
		name: 'rotating boxes',
		route: '/rotatingboxes',
	},
];

export default function Nav() {
	return (
		<StyledNav>
			<StyledLinksWrapper>
				{routes.map((route) => (
					<StyledLink to={`${route.route}`} key={`${route.name}`}>
						{route.name}
					</StyledLink>
				))}
			</StyledLinksWrapper>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	width: 100%;
	display: flex;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	z-index: 2;
	padding: 10px;
`;
const StyledLinksWrapper = styled.div`
	display: flex;
	gap: 20px;
`;

const StyledLink = styled(Link)`
	font-size: ${({ theme }) => theme.fontSize.l};
	text-decoration: none;
	color: white;
`;
