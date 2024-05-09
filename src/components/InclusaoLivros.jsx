import React from 'react'

const InclusaoLivros = () => {
  return (
    <div className='Container'>
      <h4 className='fst-italic mt-3'>Inclusão</h4>
      <form>
        <div  className='form-group'>
            <label for="titulo">Titulo</label>
            <input type="text" className='form-control' id='titulo' required autoFocus />
        </div>
        <div  className='form-group'>
            <label for="autor">Autor</label>
            <input type="text" className='form-control' id='autor' required  />
        </div>
        <div  className='form-group'>
            <label for="foto">URL da foto</label>
            <input type="url" className='form-control' id='foto' required  />
        </div>
        <div className='row mt-2'>
            <div className='col-sm-4'>
                <div className='form-group'>
                    <label for="ano">Ano de Publicão:</label>
                    <input type="number" className='form-control' id='ano' required  />
                </div>
            </div>
            <div className='col-sm-8'>
                <div className='form-group'>
                    <label for="preco">Preço:</label>
                    <input type="number" className='form-control' id='peco' step='0,01' required  />
                </div>
            </div>
        </div>
        <input type="submit" className='btn btn-primary mt-3' value='Enviar' />
        <input type="reset" className='btn btn-danger mt-3 ms-3' value='Limpar' />
      </form>
      <div className='Alert'></div>
    </div>
  );
};

export default InclusaoLivros;
