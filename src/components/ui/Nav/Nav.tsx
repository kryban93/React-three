import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icons from '../../../assets/icons/index';

const routes = [
	{
		name: 'box',
		route: '/box',
	},
	{
		name: 'models preview',
		route: '/modelspreview',
	},
	{
		name: 'rotating boxes',
		route: '/rotatingboxes',
	},
];

export default function Nav() {
	return (
		<StyledNav>
			<Link to="/">
				<img src={icons.logo} alt="logo" height="35px" />
			</Link>
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
	align-items: center;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	z-index: 2;
	padding: 10px;
`;
const StyledLinksWrapper = styled.div`
	display: flex;
	gap: 20px;
	margin-right: 50px;
`;

const StyledLink = styled(Link)`
	font-size: ${({ theme }) => theme.fontSize.l};
	text-decoration: none;
	color: ${({ theme }) => theme.white};
`;
