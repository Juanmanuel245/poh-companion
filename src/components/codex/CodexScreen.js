import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import './modal.css';
import Swal from 'sweetalert2';
import sponsor from './sinsponsor.png';

export const CodexScreen = () => {
    const { t } = useTranslation(['codex']);
    useEffect(() => {ReactGA.pageview('/codex');}, []);
    const [instructivos, setInstructivos] = useState([]);

    const { uid, role } = useSelector(state => state.auth);

    const handleFindCodex = async e => {
        const resp = await fetchSinToken('codex/find',{ question },'POST');
        const body = await resp.json();
        setInstructivos(body.instructivosDisponibles);
    }

    const [ formCodexValues, handleCodexInputChange ] = useForm({
        question: ''
    });

    const [ formAddCodexValues, handleAddCodexInputChange, reset ] = useForm({
        title: '',
        author: '',
        source: '',
        link: '',
        meta: ''
    });

    const { question } = formCodexValues;
    const { title, author, source, link, meta } = formAddCodexValues;

    const handleOpenModal = e => {
        setModalState(true);
    }

    const [modalState, setModalState] = useState(false);
    const [modalOpenLink, setModalOpenLink] = useState(false);
    const [codexModal, setCodexModal] = useState(null);
    const [codexModalVote, setCodexModalVote] = useState('false');

    const customStyles = {
        content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
    };

    Modal.setAppElement('#root');

    const closeModal = () => {
        reset();
        setModalState(false);
    }

    const handleOpenLink = ( id, link ) => {
        window.open( link , "_blank");
        fetchSinToken(`codex/${ id }/add-visit`,{},'GET');
        setModalOpenLink(true);
        setCodexModal(id);
    }

    const closeModalOpenLink = () => {
        reset();
        setModalOpenLink(false);
        setCodexModal(null);
        setCodexModalVote('false');
    }

    const handleAddCodex = async e => {
        e.preventDefault();
        const resp = await fetchConToken('codex/add',{ title, author, source, link, meta  },'POST');
        const body = await resp.json();
        if(body.ok){
            reset();
            setModalState(false);
            Swal.fire({icon: 'success', title: 'El instructivo se agrego con exito', showConfirmButton: false, timer: 1500})
        }else{
            Swal.fire('Error',body.msg, 'error');
        }
    }

    const handleAddVote = (id, type) => {
        fetchSinToken(`codex/${ id }/add-vote`,{ type: type },'POST');
        setCodexModalVote('true');
    }
    

    
    return (
        <>
        <div className="container mt-4">
        { (uid && role === 'codex') && 
            <div className="text-right"><button className="btn btn-outline-warning" onClick={ handleOpenModal } ><i className="fas fa-plus-square"></i> INDEXAR INSTRUCTIVO</button></div>
        }
            <div className="poh-card mt-4"><div className="card-body"><h3 className="text-center"> CODEX </h3></div></div>
        </div>

        <div className="container mt-4">
            <div className="poh-card mt-4">
                <div className="card-body">
                    <span className="text-center"> 
                        {t('descripcion')} 
                    </span>
                </div>
            </div>
        </div>

        <div className="container mt-4">
            <div className="poh-card mt-4">

                    <div className="card-body row">
                        <div className='col-xs-10 col-md-10 col-xs-10 mt-1 mb-1'>
                            <input 
                                className="form-control" 
                                type="text" 
                                name="question"
                                placeholder={t('text-button')} 
                                value={ question } 
                                onChange={ handleCodexInputChange }
                            ></input>
                        </div>
                        <div className='col-xs-2 col-md-2 col-xs-2 mt-1 mb-1'>
                            <button className="btn btn-primary w-100" onClick={ handleFindCodex } ><i className="fas fa-search"></i></button>
                        </div>
                    </div>
            </div>
        </div>

        <div className="mt-4 text-center container">
            <div className="row ml-1 mr-1">
                {instructivos.map( i => 
                <div className="poh-card  mt-2 mb-2"  key={ i._id }>
                    <h5 className="card-title mt-1">{ i.title }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Author: {i.author} | Origen: { i.source } </h6>
                    <button className="btn" onClick={ () => handleOpenLink( i._id, i.link )  } >Ver instructivo</button>
                </div>
                )}
                </div>
        </div>

        <Modal 
            isOpen={ modalOpenLink } 
            onRequestClose={ closeModalOpenLink } 
            style={customStyles} 
            contentLabel="Opinion de instructivo"
            className="modal vote"
            closeTimeoutMS={ 200 }
            overlayClassName="vote-fondo"
        >

      <h3 className="text-center">¿Te sirvio el instructivo?</h3>
            <hr />
            <div className="row text-center">
            { (codexModalVote === 'false') ?  
                <>
                <div>
                    <button className="btn btn-outline-success mr-4" onClick={ () => handleAddVote( codexModal, 'positive' )  }><i className="far fa-thumbs-up fa-7x"></i></button>
                    <button className="btn btn-outline-danger ml-4" onClick={ () => handleAddVote( codexModal, 'negative' )  }><i className="far fa-thumbs-down fa-7x"></i></button>
                </div>
                </>
                :
                <div className="text-center">¡Gracias por votar!</div>
            }
            <a href="https://t.me/Juan245" rel="noreferrer" target="_blank"><img className="mt-4" width="100%" alt='Sponsor' src={sponsor} /></a>
            </div>
            

        </Modal>

        <Modal 
            isOpen={ modalState } 
            onRequestClose={ closeModal } 
            style={customStyles} 
            contentLabel="Cargar codex"
            className="modal"
            closeTimeoutMS={ 200 }
            overlayClassName="modal-fondo"
        >
            <div className="scroll-component">
      <div className="scroll-content">

      <h3 className="text-center">Agregar instructivo al CODEX</h3>
            <hr />
            <form onSubmit={ handleAddCodex } >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titulo del instructivo</label>
                    <input type="text" className="form-control" id="title" name="title"  value={ title } onChange={ handleAddCodexInputChange } aria-describedby="titleHelp" />
                    <div id="titleHelp" className="form-text">Se recomienda poner el mismo que el instructivo original.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Autor</label>
                    <input type="text" className="form-control" id="author" name="author"  value={ author } onChange={ handleAddCodexInputChange } aria-describedby="authorHelp" />
                    <div id="authorHelp" className="form-text">Indicar le autor del instructivo original.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="source" className="form-label">Fuente</label>
                    <input type="text" className="form-control" id="source" name="source"  value={ source } onChange={ handleAddCodexInputChange } aria-describedby="sourceHelp" />
                    <div id="sourceHelp" className="form-text">Indicar la fuente (Medium, Notion, Blog, etc...)</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="link" className="form-label">Link</label>
                    <input type="text" className="form-control" id="link" name="link"  value={ link } onChange={ handleAddCodexInputChange } aria-describedby="linkHelp" />
                    <div id="linkHelp" className="form-text">Indicar el link completo al instructivo</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="meta" className="form-label">Metatags</label>
                    <input type="text" className="form-control" placeholder="Ejemplo: crear,cuenta,metamask" id="meta" name="meta"  value={ meta } onChange={ handleAddCodexInputChange } aria-describedby="metaHelp" />
                    <div id="metaeHelp" className="form-text">Indicar los metatags separados únicamente por comas.</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


      </div>
   </div>
            

        </Modal>

        
        </>
    )
}
