import * as S from './styles'
import ButtonTema from '../../components/ButtonTema'

const Header = () => {
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
        <input type="text" />
        <button type="button"><img src={imgButtonSearch} alt="Search" /></button>
      </S.InputSearch>
    </S.Header>
  )
}

export default Header
