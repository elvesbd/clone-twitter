import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner, 
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Elves Brito</h1>
        <h2>@elvesbd</h2>

        <p>
          Developer at <a href="https://www.rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de fevereiro de 1983
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>123</strong>
          </span>
          <span>
            <strong>246 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;