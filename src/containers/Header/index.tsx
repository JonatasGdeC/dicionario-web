import React, { useState } from 'react';

import * as S from './styles'
import ButtonTema from '../../components/ButtonTema'

interface HeaderProps {
  onSearch: (word: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const imgIcon = require('../../images/icon.png')
  const imgButtonSearch = require('../../images/button-search.png')

  return (
    <S.Header>
      <S.HeaderSuperior>
        <img src={imgIcon} alt="Icone" />
        <S.SelectTemas>
          <select>
            <option>Sans Serif</option>
            <option>Serif</option>
            <option>Mono</option>
          </select>
          <ButtonTema />
        </S.SelectTemas>
      </S.HeaderSuperior>
      <S.InputSearch>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <button type="button" onClick={handleSearch}><img src={imgButtonSearch} alt="Search" /></button>
      </S.InputSearch>
    </S.Header>
  )
}

export default Header
