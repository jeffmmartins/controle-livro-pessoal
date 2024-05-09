import React from 'react';
import { useForm } from 'react-hook-form';

const InclusaoLivros = () => {

    const {register, handleSubmit} = useForm();
    

    const salvar = (campos) => {
        alert(JSON.stringify(campos))
    }

  return (
    <div className='Container'>
        {register}
      <h4 className='fst-italic mt-3'>Inclusão</h4>
      <form onSubmit={handleSubmit(salvar)}>
        <div  className='form-group'>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" className='form-control' id='titulo' required autoFocus {...register("titulo")}/>
        </div>
        <div  className='form-group mt-2'>
            <label htmlFor="autor">Autor</label>
            <input type="text" className='form-control' id='autor' required {...register("autor")} />
        </div>
        <div  className='form-group mt-2'>
            <label htmlFor="foto">URL da foto</label>
            <input type="url" className='form-control' id='foto' required  {...register("foto")}/>
        </div>
        <div className='row mt-2'>
            <div className='col-sm-4'>
                <div className='form-group'>
                    <label htmlFor="ano">Ano de Publicão:</label>
                    <input type="number" className='form-control' id='ano' required {...register("ano")} />
                </div>
            </div>
            <div className='col-sm-8'>
                <div className='form-group'>
                    <label htmlFor="preco">Preço:</label>
                    <input type="number" className='form-control' id='preco' step='0,01' required  {...register("preco")}/>
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
