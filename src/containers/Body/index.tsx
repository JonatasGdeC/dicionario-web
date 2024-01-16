import React from 'react';

import * as S from "./styles"

interface BodyProps {
  searchResults: any[]; // Adjust the type according to the API response structure
}


const Body: React.FC<BodyProps> = ({ searchResults }) => {
  const ButtonListen = require('../../images/button-listen.png')

  return(
    <>
      <div>
        {searchResults.map((result, index) => (
            <div key={index}>
              <S.ApresentaPalavra>
                <S.PalavraPesquisada>{result.word}</S.PalavraPesquisada>
                <button><img src={ButtonListen} alt="Escutar audio" /></button>
              </S.ApresentaPalavra>

              {result.meanings.map((meaning: any, meaningIndex: number) => (
                <div key={meaningIndex}>
                  <S.TipoPalavra>{meaning.partOfSpeech}</S.TipoPalavra>
                  <S.ListaDefinicoes>
                    {meaning.definitions.map((definition: any, definitionIndex: number) => (
                      <S.Definicao key={definitionIndex}>
                        {definition.definition}
                      </S.Definicao>
                    ))}
                  </S.ListaDefinicoes>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  )
}

export default Body
