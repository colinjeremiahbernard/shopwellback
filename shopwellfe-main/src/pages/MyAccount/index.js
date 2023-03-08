import React,
{
    useState,
    useEffect,
    useRef
}
from 'react';

import {
     PageArea,
     ModalAll
 } from './styled';
import { 
    PageContainer,
    PageTitle,
    ErrorMessage
 } from "../../components/MainComponents";
import AdItem from '../../components/partials/AdItem';
import useApi from '../../helpers/shopAPI';
import Modal from '../../components/partials/ModalItem';
import MaskedImput from 'react-text-mask';
import { createNumberMask} from 'text-mask-addons';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import Slide from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Page = (props) => {
    const api = useApi();
    const fileField = useRef();
    const [stateList, setStateList] = useState([]); 
    const [categories, setCategories] = useState([]);
    const [adsList, setAdsList] = useState([]);
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [stateUserName, setStateUserName] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [nameUser, setNameUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [stateUser, setStateUser] = useState('');
    const [password, setPassword] = useState('');

    const [visibleModal, setVisibleModal] = useState(false);
    const [adStatusModal, setAdStatusModal] = useState(false);
    const [adTitleModal, setAdTitleModal] = useState('');

    const [categoryModal, setCategoryModal] = useState('');
    const [priceModal, setPriceModal] = useState('');
    const [priceNegotiableModal, setPriceNegotiableModal] = useState(false);
    const [discription, setDiscription] = useState('');
    const [imagesModal, setImagesModal] = useState([]);
    const [getIdAddModal, setGetIdAddModal] = useState('');

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [ {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      ]
    }
    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
        
    },[]);
    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
        
    },[]);
    useEffect(() => {
        const getUsers = async () => {
          const resp = await api.getUser();
          setAdsList(resp.ads);
          setUser(resp);
          setNameUser(resp.name);
          setEmailUser(resp.email);
          setStateUser(resp.state);
      }
      getUsers();
    }
    ),[]};

    useEffect(() => {
      if(user) {
        state.map(function(item){
          if(item.name === user.state) {
            setStateUser(item._id);
          }
        });
      }
    },[user]);

    const handleSubmit = async (e) => { 
        e.preventDefault();
        setDisabled(true);
        state.map(function(item) {
          if (item.id === stateUser) {
            setStateUserName(item.name);
          }
        });
        const resp = await api.updateUser(nameUser, emailUser, stateUserName, password); 
        if(resp.error) {
          setError(resp.error);  
        } else {
          window.location.href = '/my-account';
        }
        setDisabled(false);
      }
      const handleSubmitModal = async (e) => {
          e.preventDefault();
          setDisabled(true);
          setError('');
          let errors = [];
          if (!title.trim()) {
              errors.push('E necessario informar um titulo');
          }
          if (!category.trim()) {
              errors.push('E necessario escolher uma categoria');
          }
          if (errors.length === 0) {
             const fData = new FormData();
             fData.append('status', adStatusModal);
             fData.append('title', adTitleModal);
             fData.append('price', priceModal);
             fData.append('priceNeg', priceNegotiableModal);
             fData.append('desc', description);
             fData.append('cat', categoryModal);
             fData.append('images', imagesModal);
  
             if (fileField.current.files.length > 0) {
                 for(let i = 0; i < fileField.current.files.length; i++) {
                     fData.append('img', fileField.current.files[i]);
          }
        }
        const resp = await api.updateAd(fData, getIdAddModal);
           if (!response.error) {
            window.location.href = '/my-account';
           } else {
            setError(response.error);
           }
          } else {
            setError(errors.join('\n'));
          }
          setDisabled(false);
          setVisibleModal(false);     
    }
    const priceMask = createNumberMask({
      price: 'R$', 
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: '.',
      allowDecimal: true,
      decimalSymbol: ',',
      
   });
   function openModal(props) {
     categories.map((item) => {
      if (item.slug === props.category) {
         setCategoryModal(item._id);
      }
     });
        setAdStatusModal(props.status);
        setAdTitleModal(props.title);
        setPriceNegotiableModal(props.priceNegociable);
        setPriceModal(props.price);
        setDescription(props.description);
        setImagesModal(props.images);
        setGetIdAddModal(props.id);
        setVisibleModal(!visibleModal);
}
        
    return (
       
          <PageContainer>
              <PageTitle>
                 Minha Conta.
              </PageTitle>
              <PageArea>
                 {error &&
                    <ErrorMessage>
                       {error}
                    </ErrorMessage>
                 }
                 <div className="pageTop">
                      <div className= "pageTopLeft">
                          <div className="imgProfile">
                             <img src='https://i1.sndcdn.com/avatars-000205498235-o6x5yu-t500x500.jpg'
                              alt="profile" />
                              <div className="infoProfile">
                                 <h1>
                                   {user &&
                                     nameUser
                                   }
                                 </h1>
                                 <p>
                                  {user &&
                                     emailUser
                                   }

                                 </p>
                              </div>
                          </div>
                      </div>
                      <div className="pageTopRight">
                            <form 
                            onSubmit={handleSubmit}
                            className="formRight"
                            >
                            <label className="area">
                        <div className="area--title">
                          Nome Completo. 
                        </div>
                        <div className="area--input">
                            <input
                             type='text'
                             disabled = { disabled }
                             value = {nameUser}
                             onChange = {e => setNameUser(e.target.value)}
                             required
                             />
                        </div>
                        </label>
                    <label className="area">
                        <div className="area--title">
                          Estado.
                        </div>
                        <div className="area--input">
                            <select 
                             disabled = { disabled }
                             value = { stateUser} 
                             onChange={e => setStateUser(e.target.value)}
                             required
                             >
                             <option></option>
                             {stateList.map((i, k) => 
                              <option 
                              key={k} 
                                  value={i._id}
                                  >{i.name}
                                  </option>
                             )}
                             </select>
                        </div>
                    </label> 
                    <label className="area">
                        <div className="area--title">
                          Email.
                        </div>
                        <div className="area--input">
                            <input 
                             disabled = { disabled }
                             value = { emailUser} 
                             onChange={e => setEmailUser(e.target.value)}
                             required
                             />
                        </div>
                    </label> 
                    <label className="area">
                        <div className="area--title">
                          Nova senha.
                        </div>
                        <div className="area--input">
                            <input
                             type="password" 
                             disabled = { disabled }
                             value = { password } 
                             onChange={e => setPassword(e.target.value)}
                             
                             />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={ disabled }> Atualizar </button>
                        </div>
                    </label>
                            </form>
                      </div>

     
                 </div>
                 <PageTitle>
                     Meus Anúncios.
                 </PageTitle>
                 <div className= "pageBottom">
                      {adsList &&
                        <Slide {...settings} >
                          {adsList.map((ads, index) => 
                             <div
                              key = {index}
                              onClick= {() => openModal(ads)}
                             >
                               <AdItem
                                key = {index}
                                data= {ads}
                               />
                             </div>
                          )}
                        </Slide>
                      }
                 </div>
              </PageArea>
              {visibleModal &&
                 <Modal
                    title = {adTitleModal}
                    visibleModal = {visibleModal}
                    setVisibleModal = {setVisibleModal}
                 >
                  <ModalAll>
                    <form onSubmit={handleSubmitModal}>
                    <label className="area">
                        <div className="area--title">
                          Titulo. 
                        </div>
                        <div className="area--input">
                            <input
                             type='text'
                             disabled = { disabled }
                             value = {adTitleModal}
                             onChange = {e => setAdTitleModal(e.target.value)}
                             required
                             />
                        </div>
                        </label>
                    <label className="area area--checkbox">
                        <div className="area--title">
                          Status (ativo / inativo):
                        </div>
                        <div className="area--input">
                            <input 
                             type='checkbox'
                             disabled = { disabled } 
                             checked = {adStatusModal}
                             onChange={e => setAdStatusModal(e.target.value)}
                             disabled = { disabled }
                             />
                          </div>
                    </label> 
                    <label className="area">
                        <div className="area--title">
                          Categoria
                        </div>
                        <div className="area--input">
                            <select 
                             disabled = { disabled }
                             onChange={e => setCategoryModal(e.target.value)}
                             required
                             >
                             <option></option>
                             {categories.map((category, k) =>
                               <option
                                key = {k}
                                value = {category._id}
                               >
                                  {category.name}
                               </option>
                             )}
                             </select>
                        </div>
                    </label> 
                    <label className="area">
                        <div className="area--title">
                          Preço Negociavel.
                        </div>
                        <div className="area--input">
                            <input
                             type="checkbox"
                             className='check' 
                             disabled = { disabled }
                             onChange={e => setPriceNegotiableModal(!priceNegociable)}
                             checked = {priceNegociableModal}
                             />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                          Preço.
                        </div>
                        <div className="area--input">
                            <maskedInput
                             mask = {priceMask}
                             placeholder = "R$" 
                             disabled = { disabled || priceNegociableModal }
                             value = {priceModal}
                             onChange={e => setPriceModal(e.target.value)}
                        
                             />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                          Descrição.
                        </div>
                        <div className="area--input">
                            <textarea
                             disabled = { disabled }
                             value = {descriptionModal}
                             onChange={e => setPriceNegotiableModal(!priceNegociable)}
                             checked = {priceNegociableModal}
                             >
                            </textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                          Imagens (1 ou mais)
                        </div>
                        <div className="area--input">
                            
                            <input
                             type='file'
                             ref = 'fileField'
                             multiple 
                             
                             />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={ disabled }> Atualizar Anuncio </button>
                        </div>
                    </label>
                    </form>
                    </ModalAll>
                 </Modal>
              }
           </PageContainer>
         )
  
export default Page