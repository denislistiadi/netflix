import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Background, Profile, Dropdown, Feature, Container, Picture, ButtonLink, Group, Logo, TextLink, Text, FeatureCallOut, Search, SearchInput, SearchIcon, PlayButton } from './styles/header';

function Header({ bg=true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
};

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
};

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children}</Profile>
};

Header.Picture = function HeaderPicture({ src, ...restProps}) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
};

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput value={searchTerm} 
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive} 
            />
        </Search>
    )
}

Header.Dropdown = function HeaderText({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
};

Header.Text = function HeaderText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
};

Header.TextLink = function HeaderTextLink({children, ...restProps}) {
    return <TextLink {...restProps}>{children}</TextLink>
};

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
};

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>
    );
};


export default Header;