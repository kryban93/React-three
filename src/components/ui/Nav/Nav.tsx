import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icons from '../../../assets/icons/index';
import useWindowDimenions from '../../../additional/useWindowDimensions';

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
	const [isMenuButtonClicked, setMenuButtonState] = useState<boolean>(false);

	return (
		<StyledNav>
			<Link to="/">
				<img src={icons.logo} alt="logo" height="35px" />
			</Link>
			<StyledButton onClick={() => setMenuButtonState(!isMenuButtonClicked)}>
				<img src={icons.menu} alt="menu button icon" />
			</StyledButton>
			{isMenuButtonClicked && (
				<StyledLinksWrapper>
					<StyledButton
						onClick={() => setMenuButtonState(!isMenuButtonClicked)}
					>
						<img src={icons.close} alt="menu button icon" />
					</StyledButton>
					{routes.map((route) => (
						<StyledLink to={`${route.route}`} key={`${route.name}`}>
							{route.name}
						</StyledLink>
					))}
				</StyledLinksWrapper>
			)}
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	box-sizing: border-box;
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
	box-sizing: border-box;
	top: 0px;
	left: 0px;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.9);
	position: fixed;
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-right: 50px;
	color: white;
	z-index: 3;
	padding: 20px;
`;

const StyledLink = styled(Link)`
	font-size: ${({ theme }) => theme.fontSize.l};
	text-decoration: none;
	color: ${({ theme }) => theme.white};
	text-align: center;
`;

const StyledButton = styled.button`
	background: none;
	border: none;
`;
