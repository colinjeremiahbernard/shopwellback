import React,
{
    useState,
    useEffect 
}
from 'react';
import { json, Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled'
import { PageContainer } from "../../components/MainComponents";
import AdItem from '../../components/partials/AdItem';
import useApi from '../../helpers/shopAPI'

const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]); 
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
        console.log("Estados");
    },[]);
    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            setCategories(cat);
        }
        getCategories();
        console.log("Categories");
    },[])
    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
        }, [] );
        
        
    return (
       <>
         <SearchArea>
           <PageContainer>
              <div className='searchbox'>
                  <form method='GET' action='/ads'> 
                      <input 
                         type='text' 
                          name='q' 
                          placeholder='What are you looking for?'
                      />
                    <select name='state'>
                        {stateList.map((i, k) => 
                        <option key = {k} value= {i.name}>
                           {i.name}
                        </option>
                        )}  
                    </select> 
                    <button> Pesquisar </button> 
                  </form>
              </div>
              <div className='categoryList'>
                {categories.map((i, k) =>
                    <link
                       key = {k}
                       to = {`/ads?cat = ${i.slug}`}
                       className='categoryItem'
                       >
                        <img src={i.img} alt={`Logo da categoria ${i.name}`}/>
                        <span> {i.name}</span>
                    </link>
                )} 
              </div>
           </PageContainer>
         </SearchArea>
         <PageContainer>
            <PageArea>
              <h2> Anuncios Recentes </h2>
              <div className='List'>
                {adList.map((i, k) =>
                <AdItem key={k} data={i} />
                )}
              </div>
              <Link to= '/ads' className='seeAllLinks'> Ver Todos </Link>
              <hr/>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria <br/>
              tipográfica e de impressos, e vem sendo utilizado desde o século XVI,<br/>
              quando um impressor desconhecido pegou uma bandeja de tipos e os<br/>
              embaralhou para fazer um livro de modelos de tipos.
            </PageArea>
         </PageContainer>
       </>
    )
}
export default Page